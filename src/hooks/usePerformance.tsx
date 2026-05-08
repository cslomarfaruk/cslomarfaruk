import { useEffect } from 'react';

/**
 * Web Vitals Monitoring
 * Tracks Core Web Vitals metrics and sends to analytics
 */
export function useWebVitals() {
  useEffect(() => {
    // Check if the browser supports the Web Vitals API
    if ('PerformanceObserver' in window) {
      // LCP - Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP observer not supported');
      }

      // FID - First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            console.log('FID:', entry.processingDuration);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observer not supported');
      }

      // CLS - Cumulative Layout Shift
      let clsValue = 0;
      try {
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              console.log('CLS:', clsValue);
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS observer not supported');
      }
    }
  }, []);
}

/**
 * Optimized Image Component with Lazy Loading
 * Usage: <OptimizedImage src="..." alt="..." />
 */
export function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  className = '',
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={`${className} will-change-transform`}
    />
  );
}

/**
 * Route Prefetch Component
 * Prefetch links on hover/visibility for faster navigation
 */
export function PrefetchLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  [key: string]: any;
}) {
  useEffect(() => {
    const link = document.querySelector(`a[href="${href}"]`);
    if (link && 'prefetch' in link) {
      (link as any).prefetch?.();
    }
  }, [href]);

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
