'use client';

import { useEffect, useState } from 'react';
import { initAnalytics, trackDownloadClick, getOSInfo } from '../app/analytics';

interface DownloadButtonProps {
  location: 'header' | 'hero';
  className?: string;
  children: React.ReactNode;
}

const DOWNLOAD_URL = 'https://github.com/BasedHardware/omi/releases/latest/download/Omi.Computer.dmg';

export default function DownloadButton({ location, className, children }: DownloadButtonProps) {
  const [showWarning, setShowWarning] = useState(false);
  const [osInfo, setOsInfo] = useState<ReturnType<typeof getOSInfo> | null>(null);

  useEffect(() => {
    initAnalytics();
    const info = getOSInfo();
    setOsInfo(info);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Track the click
    trackDownloadClick(location);

    // Check compatibility
    if (osInfo && osInfo.isMac && !osInfo.isCompatible) {
      e.preventDefault();
      setShowWarning(true);
    }
    // If compatible or not on Mac, let the default link behavior proceed
  };

  const proceedAnyway = () => {
    setShowWarning(false);
    window.location.href = DOWNLOAD_URL;
  };

  return (
    <>
      <a
        href={DOWNLOAD_URL}
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>

      {/* Compatibility Warning Modal */}
      {showWarning && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-white/20 rounded-lg p-8 max-w-md mx-4 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">macOS Version Not Supported</h3>
              <p className="text-zinc-400">
                Omi requires <span className="text-white font-medium">macOS 15.0 (Sequoia)</span> or later.
              </p>
              <p className="text-zinc-400">
                Your current version appears to be <span className="text-white font-medium">macOS {osInfo?.osVersion}</span>.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-zinc-500">
                Please update your Mac to macOS 15.0 or later to use Omi.
              </p>
              <a
                href="https://support.apple.com/en-us/111900"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-blue-400 hover:text-blue-300 underline"
              >
                Learn how to update macOS
              </a>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowWarning(false)}
                className="flex-1 px-4 py-3 border border-white/20 font-mono text-xs font-bold tracking-wider hover:bg-white/5 transition-colors"
              >
                CLOSE
              </button>
              <button
                onClick={proceedAnyway}
                className="flex-1 px-4 py-3 bg-zinc-800 border border-white/10 font-mono text-xs text-zinc-400 tracking-wider hover:bg-zinc-700 transition-colors"
              >
                DOWNLOAD ANYWAY
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
