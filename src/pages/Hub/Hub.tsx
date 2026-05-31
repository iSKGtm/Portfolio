import React, { useEffect, useRef, useState } from "react";
import './Hub.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faSoundcloud,
  faSpotify,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faEllipsisVertical,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

type HubBackground =
  | {
      kind: 'video';
      poster?: string;
      sources: {
        src: string;
        type: string;
      }[];
    }
  | {
      kind: 'image';
      src: string;
      alt?: string;
    };

type HubLink = {
  title: string;
  href: string;
  description?: string;
  icon?: IconDefinition;
  image?: string;
  badge?: string;
};

type HubSocial = {
  label: string;
  href: string;
  icon: IconDefinition;
};

const hubBackground: HubBackground = {
  kind: 'video',
  poster: '/videos/backgrounds/Website.jpg',
  sources: [
    {
      src: '/videos/backgrounds/Website10.mp4',
      type: 'video/mp4',
    },
  ],
};

const hubLinks: HubLink[] = [
  {
    title: 'iSKGtm Hub',
    href: '/home',
    description: 'Conheça a iSKGtm!',
    icon: faGlobe,
  },
  {
    title: 'iSKGtm - YouTube',
    href: 'https://www.youtube.com/@iSKGtm',
    description: 'Assista nosso conteúdo.',
    image: '/images/logo/logo.jpg',
  },
  {
    title: 'iSKGtm Music - YouTube',
    href: 'https://www.youtube.com/@iSKGtmMusic',
    description: 'Ouça nossas produções de músicas.',
    image: '/images/logo/logoMusic.jpg',
  },
  {
    title: 'iSKGtm Prod - YouTube',
    href: 'https://www.youtube.com/@iSKGtmProd',
    description: 'Veja nossas criações.',
    image: '/images/logo/logoProd.jpg',
  },
  {
    title: 'iSKGtm Dev - YouTube',
    href: '#',
    description: 'Em breve.',
    image: '/images/logo/logoDev.jpg',
  },
];

const hubSocials: HubSocial[] = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/iskgtm/',
    icon: faFacebook,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/iSKGtm',
    icon: faGithub,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/iSKGtm',
    icon: faInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/iskgtm/',
    icon: faLinkedinIn,
  },
  {
    label: 'SoundCloud',
    href: 'https://soundcloud.com/iSKGtm',
    icon: faSoundcloud,
  },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/artist/5jesmsqMuJ6O8GEYF1TAHe',
    icon: faSpotify,
  },
  {
    label: 'X',
    href: 'https://x.com/iSKGtm',
    icon: faXTwitter,
  },
];

const isExternalLink = (href: string) => href.startsWith('http');

const Hub: React.FC = () => {
  const navigate = useNavigate();
  const hubLinksRef = useRef<HTMLElement | null>(null);
  const navigationTimeoutRef = useRef<number | undefined>(undefined);
  const skeletonStartRef = useRef(Date.now());
  const skeletonTimeoutRef = useRef<number | undefined>(undefined);
  const [hasLinksOverflow, setHasLinksOverflow] = useState(false);
  const [isHubReady, setIsHubReady] = useState(false);
  const [isHubLeaving, setIsHubLeaving] = useState(false);

  useEffect(() => {
    const updateLinksOverflow = () => {
      const hubLinksElement = hubLinksRef.current;
      if (!hubLinksElement) return;

      setHasLinksOverflow(hubLinksElement.scrollHeight > hubLinksElement.clientHeight + 1);
    };

    updateLinksOverflow();
    window.addEventListener('resize', updateLinksOverflow);

    const resizeObserver = new ResizeObserver(updateLinksOverflow);
    if (hubLinksRef.current) {
      resizeObserver.observe(hubLinksRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateLinksOverflow);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const fallbackId = window.setTimeout(() => setIsHubReady(true), 2500);

    return () => {
      window.clearTimeout(fallbackId);
      if (navigationTimeoutRef.current) {
        window.clearTimeout(navigationTimeoutRef.current);
      }
      if (skeletonTimeoutRef.current) {
        window.clearTimeout(skeletonTimeoutRef.current);
      }
    };
  }, []);

  const markHubReady = () => {
    const elapsed = Date.now() - skeletonStartRef.current;
    const remainingTime = Math.max(800 - elapsed, 0);

    if (skeletonTimeoutRef.current) {
      window.clearTimeout(skeletonTimeoutRef.current);
    }

    skeletonTimeoutRef.current = window.setTimeout(() => {
      setIsHubReady(true);
    }, remainingTime);
  };

  const handleHubLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isExternalLink(href) || href === '#') return;

    event.preventDefault();
    if (isHubLeaving) return;

    setIsHubLeaving(true);
    navigationTimeoutRef.current = window.setTimeout(() => {
      navigate(href);
    }, 220);
  };

  const renderBackground = (background: HubBackground) => {
    if (background.kind === 'video') {
      return (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={background.poster}
          className="hubBackgroundMedia"
          onCanPlay={markHubReady}
          onLoadedData={markHubReady}
          onError={markHubReady}
        >
          {background.sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      );
    }

    return (
      <img
        src={background.src}
        alt={background.alt ?? ''}
        className="hubBackgroundMedia"
        onLoad={markHubReady}
        onError={markHubReady}
      />
    );
  };

  return (
    <main className={`mainHub ${isHubReady ? 'mainHubReady' : ''} ${isHubLeaving ? 'mainHubLeaving' : ''}`}>
      <div className="hubBackground" aria-hidden="true">
        {renderBackground(hubBackground)}
      </div>
      <div className="hubBackgroundOverlay" aria-hidden="true" />
      <SkeletonTheme baseColor="#a1a1a1" highlightColor="#888" borderRadius={10}>
        <div className="hubSkeleton" aria-hidden="true">
          <div className="hubContainer hubSkeletonContainer">
            <div className="hubProfile hubSkeletonProfile">
              <div className="hubAvatar hubSkeletonAvatar">
                <Skeleton circle width="100%" height="100%" />
              </div>
              <div className="hubIdentity hubSkeletonIdentity">
                <Skeleton height={36} className="hubSkeletonTitle" />
                <Skeleton height={16} className="hubSkeletonSubtitle" />
              </div>
            </div>

            <div className="hubLinks hubSkeletonLinks">
              {hubLinks.map((link) => (
                <div className="hubLink hubSkeletonLink" key={link.title}>
                  <div className="hubLinkThumb hubSkeletonThumb">
                    <Skeleton circle width="100%" height="100%" />
                  </div>
                  <div className="hubLinkText hubSkeletonText">
                    <Skeleton width="60%" height={16} className="hubSkeletonLine" />
                    <Skeleton width="32%" height={12} className="hubSkeletonSmall" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <nav className="hubSocials hubSkeletonSocials">
            {hubSocials.map((social) => (
              <span className="hubSocial hubSkeletonSocial" key={social.label}>
                <Skeleton circle width="100%" height="100%" />
              </span>
            ))}
          </nav>
        </div>
      </SkeletonTheme>

      <section className="sectionHub">
        <div className="hubContainer">
          <header className="hubProfile">
            <div className="hubAvatar">
              <img src="/images/logo/logo.jpg" alt="iSKGtm" />
            </div>

            <div className="hubIdentity">
              <img
                className="hubIdentityTitle"
                src="/images/logo/logoName.svg"
                alt="iSKGtm"
              />
              <div className="hubIdentitySubtitle">we are in everything.</div>
            </div>
          </header>

          <nav
            className={`hubLinks ${hasLinksOverflow ? 'hubLinksScrollable' : ''}`}
            aria-label="Links principais"
            ref={hubLinksRef}
          >
            {hubLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="hubLink"
                target={isExternalLink(link.href) ? '_blank' : undefined}
                rel={isExternalLink(link.href) ? 'noopener noreferrer' : undefined}
                onClick={(event) => handleHubLinkClick(event, link.href)}
              >
                {(link.image || link.icon || link.badge) && (
                  <span className="hubLinkThumb" aria-hidden="true">
                    {link.image && <img src={link.image} alt="" />}
                    {!link.image && link.icon && <FontAwesomeIcon icon={link.icon} />}
                    {!link.image && !link.icon && link.badge}
                  </span>
                )}

                <span className="hubLinkText">
                  <strong>{link.title}</strong>
                  {link.description && <small>{link.description}</small>}
                </span>

                <FontAwesomeIcon icon={faEllipsisVertical} className="hubLinkMore" />
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="hubLinkOpen" />
              </a>
            ))}
          </nav>
        </div>

        <section className="sectionHubSocials">
          <nav className="hubSocials" aria-label="Redes sociais">
            {hubSocials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="hubSocial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </nav>
        </section>
      </section>
    </main>
  );
};

export default Hub;
