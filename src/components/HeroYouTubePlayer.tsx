import React, { useEffect, useRef, useState, useCallback, useId } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let ytApiPromise: Promise<void> | null = null;
function loadYouTubeApi(): Promise<void> {
  if (window.YT && window.YT.Player) return Promise.resolve();
  if (ytApiPromise) return ytApiPromise;
  ytApiPromise = new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve();
    };
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
  });
  return ytApiPromise;
}

interface HeroYouTubePlayerProps {
  videoId: string;
}

const HeroYouTubePlayer: React.FC<HeroYouTubePlayerProps> = ({ videoId }) => {
  const containerId = `yt-hero-${useId().replace(/[:]/g, '')}`;
  const rootRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Keep in sync with the real Fullscreen API in case the user exits via the
  // browser's own UI (Escape key, back gesture, etc.)
  useEffect(() => {
    const onFullscreenChange = () => {
      const fsEl = document.fullscreenElement || (document as any).webkitFullscreenElement;
      if (!fsEl) setIsExpanded(false);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', onFullscreenChange);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isExpanded ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isExpanded]);

  const toggleExpanded = useCallback(() => {
    const section = rootRef.current?.closest('.hero-video-section') as
      | (HTMLElement & { webkitRequestFullscreen?: () => Promise<void> })
      | null;

    if (!isExpanded) {
      setIsExpanded(true);
      const request = section?.requestFullscreen?.bind(section) || section?.webkitRequestFullscreen?.bind(section);
      request?.()?.catch(() => {});
    } else {
      setIsExpanded(false);
      const fsEl = document.fullscreenElement || (document as any).webkitFullscreenElement;
      if (fsEl) {
        const exit = document.exitFullscreen?.bind(document) || (document as any).webkitExitFullscreen?.bind(document);
        exit?.()?.catch?.(() => {});
      }
    }
  }, [isExpanded]);

  useEffect(() => {
    let cancelled = false;
    let pollId: number;

    loadYouTubeApi().then(() => {
      if (cancelled) return;
      playerRef.current = new window.YT.Player(containerId, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
          rel: 0,
          fs: 0,
          iv_load_policy: 3,
          playsinline: 1,
        },
        events: {
          onReady: (e: any) => {
            if (cancelled) return;
            setDuration(e.target.getDuration());
            e.target.mute();
            e.target.playVideo();
          },
          onStateChange: (e: any) => {
            if (cancelled) return;
            if (e.data === window.YT.PlayerState.ENDED) {
              e.target.seekTo(0);
              e.target.playVideo();
            } else if (e.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              setDuration(e.target.getDuration());
            } else if (e.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            }
          },
        },
      });
    });

    pollId = window.setInterval(() => {
      const p = playerRef.current;
      if (p && typeof p.getCurrentTime === 'function') {
        const d = p.getDuration() || 0;
        setDuration(d);
        setProgress(d ? (p.getCurrentTime() / d) * 100 : 0);
      }
    }, 400);

    return () => {
      cancelled = true;
      window.clearInterval(pollId);
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  const togglePlay = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    if (isPlaying) { p.pauseVideo(); setIsPlaying(false); }
    else { p.playVideo(); setIsPlaying(true); }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    if (isMuted) { p.unMute(); setIsMuted(false); }
    else { p.mute(); setIsMuted(true); }
  }, [isMuted]);

  const skip = useCallback((seconds: number) => {
    const p = playerRef.current;
    if (!p) return;
    const t = p.getCurrentTime() || 0;
    p.seekTo(Math.min(Math.max(t + seconds, 0), p.getDuration() || 0), true);
  }, []);

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const p = playerRef.current;
    if (!p || !duration) return;
    const value = Number(e.target.value);
    p.seekTo((value / 100) * duration, true);
    setProgress(value);
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const currentTime = duration ? (progress / 100) * duration : 0;

  return (
    <div
      ref={rootRef}
      className={
        isExpanded
          ? 'fixed inset-0 w-screen h-screen z-[9999] bg-black'
          : 'absolute inset-0 w-full h-full'
      }
    >
      <div className="yt-cover-wrapper">
        <div id={containerId} />
      </div>

      <button
        onClick={toggleExpanded}
        aria-label={isExpanded ? 'Salir de pantalla completa' : 'Pantalla completa'}
        className="md:hidden absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors"
      >
        {isExpanded ? (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
          </svg>
        )}
      </button>

      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-4 pt-10 bg-gradient-to-t from-black/60 to-transparent">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white text-xs tabular-nums w-10 text-right shrink-0">{fmt(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={progress}
            onChange={seek}
            className="flex-1 h-1 accent-white cursor-pointer"
            style={{ accentColor: '#fff' }}
          />
          <span className="text-white text-xs tabular-nums w-10 shrink-0">{fmt(duration)}</span>
        </div>

        <div className="flex items-center gap-2 justify-end">
          <button
            onClick={() => skip(-10)}
            aria-label="Regresar 10 segundos"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
              <text x="8.5" y="14.5" fontSize="5" fill="currentColor" fontFamily="sans-serif" fontWeight="bold">10</text>
            </svg>
          </button>

          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors"
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M8 5v14l11-7z" /></svg>
            )}
          </button>

          <button
            onClick={() => skip(10)}
            aria-label="Adelantar 10 segundos"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z" />
              <text x="8.5" y="14.5" fontSize="5" fill="currentColor" fontFamily="sans-serif" fontWeight="bold">10</text>
            </svg>
          </button>

          <button
            onClick={toggleMute}
            aria-label={isMuted ? 'Activar audio' : 'Silenciar'}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors"
          >
            {isMuted ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-3-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 19L19 20.27 20.27 19 5.27 4 4.27 3zM12 4 9.91 6.09 12 8.18V4z" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroYouTubePlayer;
