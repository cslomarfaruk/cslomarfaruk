import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="pill-badge mb-4">404 Error</span>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight mb-3">
        Page Not Found
      </h1>
      <p className="text-text-secondary text-sm sm:text-base max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn-primary">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
}
