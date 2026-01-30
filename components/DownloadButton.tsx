'use client';

import { useEffect } from 'react';
import { initAnalytics, trackDownloadClick } from '../app/analytics';

interface DownloadButtonProps {
  location: 'header' | 'hero';
  className?: string;
  children: React.ReactNode;
}

const DOWNLOAD_URL = 'https://github.com/BasedHardware/omi/releases/latest/download/Omi.Computer.dmg';

export default function DownloadButton({ location, className, children }: DownloadButtonProps) {
  useEffect(() => {
    initAnalytics();
  }, []);

  const handleClick = () => {
    // Just track the click, don't block the download
    trackDownloadClick(location);
  };

  return (
    <a
      href={DOWNLOAD_URL}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
