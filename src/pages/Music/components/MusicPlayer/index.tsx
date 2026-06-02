import { useEffect, useMemo, useRef, useState } from 'react';
import type React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import {
  faArrowUpRightFromSquare,
  faBackwardStep,
  faForwardStep,
  faMagnifyingGlass,
  faPause,
  faPlay,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import { music, type Music } from '../../../../data/listaMusicas';
import styles from './index.module.css';

type FilterMode = 'all' | 'albumName' | 'drumKit' | 'productionType' | 'classic';

const parseDate = (date: string) => {
  const [day, month, year] = date.split('/').map(Number);
  return new Date(year, month - 1, day).getTime();
};

const formatTime = (seconds: number) => {
  const safeSeconds = Number.isFinite(seconds) ? Math.floor(seconds) : 0;
  const minutes = Math.floor(safeSeconds / 60);
  const rest = safeSeconds % 60;
  return `${minutes}:${String(rest).padStart(2, '0')}`;
};

const getTitle = (song: Music) =>
  song.featuring ? `${song.title} ft. ${song.featuring}` : song.title;

const ExplicitBadge = ({ explicit }: { explicit: boolean }) =>
  explicit ? <span className={styles.explicitBadge} title="Música Explícita">E</span> : null;

const filters: { mode: FilterMode; label: string }[] = [
  { mode: 'all', label: 'Todas' },
  { mode: 'albumName', label: 'Álbum' },
  { mode: 'drumKit', label: 'Drumkit' },
  { mode: 'productionType', label: 'Tipo de produção' },
  { mode: 'classic', label: 'Clássicas' },
];

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const musicListRef = useRef<HTMLDivElement | null>(null);
  const [filterMode, setFilterMode] = useState<FilterMode>('all');
  const [filterValue, setFilterValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSong, setSelectedSong] = useState<Music | null>(null);
  const [autoPlaySongId, setAutoPlaySongId] = useState<number | null>(null);
  const [hasListOverflow, setHasListOverflow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(15);

  const sortedSongs = useMemo(
    () => music.filter((song) => !song.hide).sort((a, b) => parseDate(b.date) - parseDate(a.date)),
    []
  );

  const filterOptions = useMemo(() => {
    if (filterMode === 'all' || filterMode === 'classic') return [];

    const values = sortedSongs
      .map((song) => {
        if (filterMode === 'albumName') return song.albumName;
        if (filterMode === 'drumKit') return song.drumKit;
        return song.productionType;
      })
      .filter((value): value is string => Boolean(value));

    return [...new Set(values)].sort((a, b) => a.localeCompare(b));
  }, [filterMode, sortedSongs]);

  const listedSongs = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return sortedSongs.filter((song) => {
      const matchesFilter =
        filterMode === 'all' ||
        (filterMode === 'classic' && song.classic) ||
        (filterMode === 'albumName' && (!filterValue || song.albumName === filterValue)) ||
        (filterMode === 'drumKit' && (!filterValue || song.drumKit === filterValue)) ||
        (filterMode === 'productionType' && (!filterValue || song.productionType === filterValue));

      if (!matchesFilter) return false;
      if (!normalizedSearch) return true;

      return [
        song.title,
        song.author,
        song.featuring,
        song.albumName,
        song.drumKit,
        song.productionType,
      ].some((value) => value?.toLowerCase().includes(normalizedSearch));
    });
  }, [filterMode, filterValue, searchTerm, sortedSongs]);

  const currentSong = selectedSong ?? listedSongs[0] ?? sortedSongs[0] ?? null;

  useEffect(() => {
    if (!currentSong || listedSongs.some((song) => song.id === currentSong.id)) return;
    setSelectedSong(listedSongs[0] ?? sortedSongs[0] ?? null);
    setIsPlaying(false);
  }, [currentSong, listedSongs, sortedSongs]);

  useEffect(() => {
    const audio = audioRef.current;
    setCurrentTime(0);
    setDuration(15);
    audio?.load();

    if (!audio || !currentSong || autoPlaySongId !== currentSong.id) return;
    void audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  }, [autoPlaySongId, currentSong]);

  useEffect(() => {
    setFilterValue('');
  }, [filterMode]);

  useEffect(() => {
    const updateListOverflow = () => {
      const listElement = musicListRef.current;
      if (!listElement) return;
      setHasListOverflow(listElement.scrollHeight > listElement.clientHeight + 1);
    };

    updateListOverflow();
    window.addEventListener('resize', updateListOverflow);

    const resizeObserver = new ResizeObserver(updateListOverflow);
    if (musicListRef.current) {
      resizeObserver.observe(musicListRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateListOverflow);
      resizeObserver.disconnect();
    };
  }, [listedSongs.length, filterMode, filterValue, searchTerm]);

  useEffect(() => {
    const playRequestedSong = (event: Event) => {
      const songId = (event as CustomEvent<{ id: number }>).detail?.id;
      const song = sortedSongs.find((item) => item.id === songId);
      if (!song) return;

      setSelectedSong(song);
      setAutoPlaySongId(song.id);
    };

    window.addEventListener('music-player:play-song', playRequestedSong);

    return () => {
      window.removeEventListener('music-player:play-song', playRequestedSong);
    };
  }, [sortedSongs]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target, clientX, clientY } = e;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mouse-x', `${clientX - rect.left}px`);
    target.style.setProperty('--mouse-y', `${clientY - rect.top}px`);
  };

  const selectSong = (song: Music) => {
    setSelectedSong(song);
    setAutoPlaySongId(song.id);

    if (currentSong?.id === song.id && audioRef.current) {
      void audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    void audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  };

  const skipSong = (step: number) => {
    const queue = listedSongs.length ? listedSongs : sortedSongs;
    if (!currentSong || !queue.length) return;
    const currentIndex = queue.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + step + queue.length) % queue.length;
    selectSong(queue[nextIndex]);
  };

  const seek = (value: string) => {
    const time = Number(value);
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const referenceText = (song: Music) => {
    if (filterMode === 'drumKit') return song.drumKit ?? 'Sem drumkit';
    if (filterMode === 'productionType') return song.productionType;
    return song.albumName;
  };

  return (
    <div className={styles.musicBackground}>
      <svg style={{ display: 'none' }}>
        <filter
          id="music-glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.003 0.008"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="1" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="150"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      
      <div className={styles.musicListContainer} onMouseMove={handleMouseMove}>
        <div className={styles.spotlight}></div>
        <div className={styles.containerContent}>
          <div className={styles.filters}>
            <div className={styles.searchInputContainer}>
              <div className={styles.searchIcon}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <input
                className={styles.searchInput}
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              {searchTerm.length > 0 && (
                <button
                  className={styles.clearSearchButton}
                  type="button"
                  aria-label="Limpar pesquisa"
                  title="Limpar pesquisa"
                  onClick={() => setSearchTerm('')}
                >
                  <FontAwesomeIcon icon={faX} />
                </button>
              )}
            </div>

            <select
              className={styles.filterSelect}
              aria-label="Filtro de músicas"
              value={filterMode}
              onChange={(event) => setFilterMode(event.target.value as FilterMode)}
            >
              {filters.map((filter) => (
                <option key={filter.mode} value={filter.mode}>{filter.label}</option>
              ))}
            </select>

            {filterOptions.length > 0 && (
              <select
                className={styles.filterSelect}
                aria-label="Valor do filtro"
                value={filterValue}
                onChange={(event) => setFilterValue(event.target.value)}
              >
                <option value="">Todos</option>
                {filterOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            )}
          </div>

          <div
            className={`${styles.musicList} ${hasListOverflow ? styles.musicListScrollable : ''}`}
            ref={musicListRef}
          >
            {listedSongs.length === 0 && (
              <div className={styles.emptyState}>
                <img src="/images/symb/aviso.svg" alt="Aviso" />
                <h2>
                  Nenhuma música encontrada
                  {searchTerm.trim() && <span> para “{searchTerm}”</span>}.
                </h2>
              </div>
            )}

            {listedSongs.map((song) => (
              <div
                key={song.id}
                className={`${styles.musicItem} ${currentSong?.id === song.id ? styles.musicItemActive : ''}`}
                role="button"
                tabIndex={0}
                onClick={() => selectSong(song)}
                onKeyDown={(event) => event.key === 'Enter' && selectSong(song)}
              >
                <img className={styles.listCover} src={song.fileAlbum ?? '/images/symb/music.svg'} alt="" />

                <div className={styles.musicInfo}>
                  <div className={styles.titleRow}>
                    <strong className={styles.songTitle}>
                      <span className={styles.songTitleText}>
                        {getTitle(song)}
                        <ExplicitBadge explicit={song.explicit} />
                      </span>
                    </strong>
                  </div>
                  <span className={styles.songMeta}>{song.author}</span>
                  <small className={styles.songTag}>{referenceText(song)}</small>
                </div>

                <a
                  className={styles.listenLink}
                  href={song.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ouça agora"
                  title="Ouça agora"
                  onClick={(event) => event.stopPropagation()}
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.musicPlayerContainer} id="music-player" onMouseMove={handleMouseMove}>
        <div className={styles.spotlight}></div>
        <div className={styles.containerContentPlayer}>
          {currentSong && (
            <>
              <audio
                ref={audioRef}
                src={currentSong.fileSong}
                onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 15)}
                onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
                onEnded={() => setIsPlaying(false)}
              />

              <div className={styles.contentLeft}>
                <img className={styles.playerCover} src={currentSong.fileAlbum ?? '/images/symb/music.svg'} alt="" />
              </div>

              <div className={styles.contentRight}>
                <div className={styles.playerInfo}>
                  <h2 className={styles.playerTitle}>
                    <span>{currentSong.title}</span>
                    <ExplicitBadge explicit={currentSong.explicit} />
                  </h2>
                  <p>
                    {currentSong.author}
                    {currentSong.featuring && <span> ft. {currentSong.featuring}</span>}
                  </p>
                </div>
                <div className={styles.progressRow}>
                  <span>{formatTime(currentTime)}</span>
                  <input
                    aria-label="Progresso da música"
                    max={duration || 15}
                    min="0"
                    onChange={(event) => seek(event.target.value)}
                    step="0.1"
                    style={{ '--progress': `${duration ? (currentTime / duration) * 100 : 0}%` } as React.CSSProperties}
                    type="range"
                    value={currentTime}
                  />
                  <span>{formatTime(duration || 15)}</span>
                </div>
                <div className={styles.playerControls}>
                  <button type="button" onClick={() => skipSong(-1)} aria-label="Anterior" title="Anterior">
                    <FontAwesomeIcon icon={faBackwardStep} />
                  </button>
                  <button
                    className={styles.playButton}
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pausar' : 'Play'}
                    title={isPlaying ? 'Pausar' : 'Play'}
                  >
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                  </button>
                  <button type="button" onClick={() => skipSong(1)} aria-label="Seguinte" title="Seguinte">
                    <FontAwesomeIcon icon={faForwardStep} />
                  </button>
                  <a href={currentSong.url} target="_blank" rel="noreferrer" aria-label="Ouça agora" title="Ouça agora">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
