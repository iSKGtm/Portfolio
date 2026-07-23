import { useEffect, useRef } from 'react';
import './Hidden.css';
import audioInitUrl from './audio/audioInit.opus';
import audioLoopUrl from './audio/audioLoop.opus';

const Hidden: React.FC = () => {
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const context = new AudioContext();
    const sources: AudioBufferSourceNode[] = [];
    let audioScheduled = false;
    let disposed = false;

    const enterFullscreen = () => {
      console.log("Nem tudo precisa ser encontrado.");
      if (document.fullscreenElement || !mainRef.current) {
        return;
      }

      void mainRef.current.requestFullscreen().catch(() => {
        // Requer interação para isso.
      });
    };

    const activateExperience = () => {
      if (!audioScheduled) {
        return;
      }

      void context.resume();
      enterFullscreen();
    };

    const decodeAudio = async (url: string) => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to load ${url}`);
      }

      return context.decodeAudioData(await response.arrayBuffer());
    };

    const startAudio = async () => {
      const [introBuffer, loopBuffer] = await Promise.all([
        decodeAudio(audioInitUrl),
        decodeAudio(audioLoopUrl),
      ]);

      if (disposed) {
        return;
      }

      const intro = context.createBufferSource();
      const loop = context.createBufferSource();
      const startsAt = context.currentTime;

      intro.buffer = introBuffer;
      intro.connect(context.destination);

      loop.buffer = loopBuffer;
      loop.loop = true;
      loop.connect(context.destination);

      intro.start(startsAt);
      loop.start(startsAt + introBuffer.duration);
      sources.push(intro, loop);
      audioScheduled = true;

      void context.resume();
      enterFullscreen();
    };

    document.addEventListener('touchstart', activateExperience);
    document.addEventListener('mousedown', activateExperience);


    void startAudio().catch((error) => {
      console.error('Erro ao iniciar a tela Hidden:', error);
    });

    return () => {
      disposed = true;
      document.removeEventListener('touchstart', activateExperience);
      document.removeEventListener('mousedown', activateExperience);

      sources.forEach((source) => {
        try {
          source.stop();
        } catch {

        }

        source.disconnect();
      });

      void context.close();

      if (document.fullscreenElement === mainRef.current) {
        void document.exitFullscreen();
      }
    };
  }, []);

  return (
    <main ref={mainRef} className='mainHidden'>
      <div className='textDebug'>View: Hidden.tsx</div>
      <div className='hiddenQuestions' aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => <span key={index}>?</span>)}
      </div>
      <img src="https://cdn.pixabay.com/animation/2023/01/07/11/06/11-06-03-651_512.gif" />
    </main>
  );
};

export default Hidden;
