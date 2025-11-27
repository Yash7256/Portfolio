import * as React from 'react';

// Declare the custom element type
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          url: string;
          'loading-anim'?: boolean | string;
          'loading-anim-type'?: string;
          'events-target'?: 'local' | 'global';
          'renderer'?: 'webgl' | 'webgpu';
          'quality'?: 'low' | 'medium' | 'high';
        },
        HTMLElement
      >;
    }
  }
}

interface SplineBackgroundProps {
  className?: string;
  style?: React.CSSProperties;
  opacity?: number;
  sceneUrl?: string;
}

const SplineBackground: React.FC<SplineBackgroundProps> = React.memo(({
  className = '',
  style = {},
  opacity = 1,
  sceneUrl = '/assets/spline/background.spline'
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isInView, setIsInView] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const splineRef = React.useRef<HTMLElement>(null);
  const observer = React.useRef<IntersectionObserver | null>(null);
  const scriptRef = React.useRef<HTMLScriptElement | null>(null);

  // Check if mobile device
  const isMobile = React.useMemo(() => {
    return /Mobi|Android/i.test(navigator.userAgent);
  }, []);

  // Setup intersection observer
  React.useEffect(() => {
    if (!containerRef.current) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !isInView) {
        setIsInView(true);
      }
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    observer.current.observe(containerRef.current);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [isInView]);

  // Load Spline script when in view
  React.useEffect(() => {
    if (!isInView) return;

    // Skip if already loaded or loading
    if (isLoaded || scriptRef.current) return;

    const loadSpline = () => {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@splinetool/viewer@1.12.3/build/spline-viewer.js';
      script.type = 'module';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        setIsLoaded(true);
      };
      
      script.onerror = () => {
        setError('Failed to load 3D background');
      };

      document.body.appendChild(script);
      scriptRef.current = script;
    };

    // Add a small delay before loading to prioritize critical content
    const timer = setTimeout(loadSpline, 1000);

    return () => {
      clearTimeout(timer);
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, [isInView, isLoaded]);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
      }
      if (splineRef.current) {
        const viewer = splineRef.current as any;
        if (viewer.unload) {
          viewer.unload();
        }
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 -z-10 ${className}`}
      style={{
        ...style,
        opacity: isLoaded ? opacity : 0,
        transition: 'opacity 0.5s ease-in-out',
        pointerEvents: 'none',
        background: 'linear-gradient(to bottom, #0a0a0f 0%, #1a1a2e 100%)',
        willChange: 'opacity',
      }}
    >
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0f] z-10">
          <div className="animate-pulse text-white/50 text-sm">Loading 3D background...</div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0f] z-10">
          <div className="text-red-400 text-sm">{error}</div>
        </div>
      )}
      
      {isInView && (
        <spline-viewer
          ref={splineRef}
          url={sceneUrl}
          loading-anim={!isMobile} // Disable loading animation on mobile
          loading-anim-type="spinner-small-dark"
          renderer={isMobile ? 'webgl' : 'webgpu'}
          quality={isMobile ? 'low' : 'high'}
          style={{
            width: '100%',
            height: '100%',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            pointerEvents: 'none',
            transform: 'translate3d(0,0,0)', // Force GPU acceleration
          }}
          events-target="global"
        />
      )}
    </div>
  );
});

SplineBackground.displayName = 'SplineBackground';

export default SplineBackground;
