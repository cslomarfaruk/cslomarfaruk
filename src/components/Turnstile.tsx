'use client';

import { useEffect, useRef, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface TurnstileProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
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
          'error-callback'?: () => void;
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
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Check if script is already added
    const scriptId = 'cf-turnstile-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    const renderWidget = () => {
      if (!window.turnstile || !containerRef.current) return;

      // Remove existing widget if re-rendering
      if (widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore removal errors
        }
      }

      try {
        const id = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token: string) => {
            onVerify(token);
          },
          'expired-callback': () => {
            if (onExpire) onExpire();
          },
          'error-callback': () => {
            if (onError) onError();
          },
          theme: theme === 'dark' ? 'dark' : theme === 'light' ? 'light' : 'auto',
          size: 'flexible',
        });
        widgetIdRef.current = id;
        setIsLoaded(true);
      } catch (err) {
        console.error('Turnstile render error:', err);
      }
    };

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
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore removal errors
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, onVerify, onExpire, onError, theme]);

  return (
    <div className="w-full flex flex-col gap-1.5">
      <div
        ref={containerRef}
        className="w-full min-h-[65px] rounded-xl overflow-hidden flex items-center justify-center bg-surface-subtle border border-border"
      />
      <div className="flex items-center gap-1.5 text-[10px] text-text-muted px-1">
        <ShieldCheck className="w-3 h-3 text-accent" />
        <span>Cloudflare Turnstile Protected &bull; Bot Prevention</span>
      </div>
    </div>
  );
}
