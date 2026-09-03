'use client';

import { useEffect, useRef, useState } from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface TurnstileProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: (errorCode?: string) => void;
  siteKey?: string;
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement | string,
        params: {
          sitekey: string;
          callback?: (token: string) => void;
          'error-callback'?: (code?: string) => void;
          'expired-callback'?: () => void;
          theme?: 'light' | 'dark' | 'auto';
          size?: 'normal' | 'compact' | 'flexible';
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
    onloadTurnstileCallback?: () => void;
  }
}

export default function Turnstile({
  onVerify,
  onExpire,
  onError,
  siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA',
}: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const { theme } = useTheme();

  // Stable callback refs to prevent infinite re-render loops
  const onVerifyRef = useRef(onVerify);
  onVerifyRef.current = onVerify;

  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  const onErrorRef = useRef(onError);
  onErrorRef.current = onError;

  useEffect(() => {
    let isMounted = true;
    const scriptId = 'cf-turnstile-script';

    const renderWidget = () => {
      if (!isMounted || !window.turnstile || !containerRef.current) return;

      // Don't render multiple times in the same container
      if (widgetIdRef.current) {
        return;
      }

      try {
        const id = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token: string) => {
            if (!isMounted) return;
            setIsVerified(true);
            onVerifyRef.current?.(token);
          },
          'expired-callback': () => {
            if (!isMounted) return;
            setIsVerified(false);
            onExpireRef.current?.();
          },
          'error-callback': (code?: string) => {
            if (!isMounted) return;
            setIsVerified(false);
            onErrorRef.current?.(code);
          },
          theme: theme === 'dark' ? 'dark' : theme === 'light' ? 'light' : 'auto',
          size: 'flexible',
        });
        widgetIdRef.current = id;
      } catch (err) {
        console.error('Turnstile render error:', err);
      }
    };

    // Load Turnstile script if not already present
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        renderWidget();
      };
      document.head.appendChild(script);
    } else {
      if (window.turnstile) {
        renderWidget();
      } else {
        script.addEventListener('load', renderWidget);
      }
    }

    return () => {
      isMounted = false;
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore removal errors
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey]); // ONLY depend on siteKey, NEVER re-mount on callback changes!

  return (
    <div className="w-full flex flex-col gap-1.5">
      <div
        ref={containerRef}
        className="w-full min-h-[65px] rounded-xl overflow-hidden flex items-center justify-center bg-surface-subtle border border-border"
      />
      <div className="flex items-center justify-between px-1 text-[11px] text-text-muted">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-accent" />
          <span>Cloudflare Turnstile Protected</span>
        </div>
        {isVerified && (
          <div className="flex items-center gap-1 text-accent font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Verified Human</span>
          </div>
        )}
      </div>
    </div>
  );
}
