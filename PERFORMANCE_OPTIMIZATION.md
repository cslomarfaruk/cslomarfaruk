# Mobile Performance Optimization Guide

## Current Issues (69% Mobile Performance)

### 1. **Image Optimization** 🖼️
- Using Unsplash external images without optimization
- No Next.js `Image` component usage
- Missing `loading="lazy"` on below-fold images

### Quick Fix - Use Next.js Image Component:

```tsx
import Image from 'next/image';

// Before (bad):
<img src="https://images.unsplash.com/..." alt="..." />

// After (good):
<Image
  src="https://images.unsplash.com/..."
  alt="..."
  width={800}
  height={600}
  quality={75}
  loading="lazy"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
/>
```

### 2. **Font Optimization** 📝
Add to `app/layout.tsx`:

```tsx
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout() {
  return (
    <html lang="en" className={`${inter.className} ${poppins.className}`}>
      {/* ... */}
    </html>
  );
}
```

### 3. **Script Optimization** ⚡

Update `next.config.mjs`:

```javascript
const nextConfig = {
  output: "standalone",
  
  // Add this section:
  swcMinify: true,
  
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store' },
        ],
      },
      {
        source: '/:path*.(js|css|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.(png|jpg|jpeg|gif|webp|avif|svg)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, must-revalidate' },
        ],
      },
    ];
  },
};
```

### 4. **CSS Optimization** 🎨
- Tailwind CSS 4.0 is already good
- Ensure no unused styles are loaded
- Use CSS containment for animations

### 5. **React Optimization** ⚛️

Add to components with heavy animations:

```tsx
'use client';

import { memo } from 'react';

const HeavyComponent = memo(() => {
  // Component code
}, (prev, next) => {
  // Only re-render if props changed
  return prev === next;
});

export default HeavyComponent;
```

### 6. **API/Database Optimization** 🗄️
- Add caching headers to API responses
- Use ISR (Incremental Static Regeneration) where possible
- Minimize database queries

Add to `app/api/contact/route.ts`:

```ts
export const revalidate = 3600; // Cache for 1 hour

export async function POST(request: Request) {
  // ...
  return new Response(JSON.stringify(data), {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
```

### 7. **Network Optimization** 🌐

Add to `app/layout.tsx` head:

```tsx
<link rel="dns-prefetch" href="https://images.unsplash.com" />
<link rel="preconnect" href="https://images.unsplash.com" />
<link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
```

## Testing & Monitoring

### Check Performance:
1. **Google PageSpeed**: https://pagespeed.web.dev
2. **WebPageTest**: https://www.webpagetest.org
3. **GTmetrix**: https://gtmetrix.com
4. **Lighthouse (DevTools)**: F12 → Lighthouse → Analyze

### Core Web Vitals Targets:
- **LCP** (Largest Contentful Paint): < 2.5s ✅
- **FID** (First Input Delay): < 100ms ✅
- **CLS** (Cumulative Layout Shift): < 0.1 ✅

## Priority Fixes:

1. **Replace Unsplash images** with optimized versions or CDN
2. **Use Next.js Image** component for all images
3. **Add font optimization** (biggest impact)
4. **Lazy load images** below the fold
5. **Minify CSS/JS** (already done by Next.js)

## Expected Results After Optimization:
- Mobile: 69% → 85-95%
- Desktop: 96% → 98%+
