import mixpanel from 'mixpanel-browser';
import posthog from 'posthog-js';

// Same tokens as desktop app
const MIXPANEL_TOKEN = '1810fcd19a3b43c29ee8c56cbe6682ee';
const POSTHOG_API_KEY = 'phc_z3qUFhGUgYIOMYnfxVSrLmYISQvbgph8iREQv3sez3Y';
const POSTHOG_HOST = 'https://us.i.posthog.com';

let isInitialized = false;

export function initAnalytics() {
  if (isInitialized || typeof window === 'undefined') return;

  // Initialize Mixpanel
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: false,
    track_pageview: true,
    persistence: 'localStorage',
  });

  // Initialize PostHog
  posthog.init(POSTHOG_API_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: true,
    capture_pageleave: true,
  });

  isInitialized = true;
}

interface OSInfo {
  osName: string;
  // Note: User-Agent version is UNRELIABLE - Chrome/Firefox freeze it at 10.15.7
  // for privacy reasons, even on newer macOS versions
  uaOsVersion: string | null;
  isMac: boolean;
}

/**
 * Parse OS info from User-Agent
 *
 * IMPORTANT: The macOS version from User-Agent is UNRELIABLE.
 * Chrome and Firefox freeze it at "10.15.7" for privacy/compatibility reasons,
 * even when running on macOS 11, 12, 13, 14, or 15.
 * Only Safari reports the actual macOS version.
 *
 * We track this for informational purposes only - the actual macOS version
 * will be captured by the desktop app's "First Launch" event.
 */
export function getOSInfo(): OSInfo {
  if (typeof window === 'undefined') {
    return { osName: 'unknown', uaOsVersion: null, isMac: false };
  }

  const ua = navigator.userAgent;

  // Check for macOS
  const macMatch = ua.match(/Mac OS X (\d+)[_.](\d+)(?:[_.](\d+))?/);
  if (macMatch) {
    const major = parseInt(macMatch[1], 10);
    const minor = parseInt(macMatch[2], 10);
    const patch = macMatch[3] ? parseInt(macMatch[3], 10) : 0;
    const version = `${major}.${minor}.${patch}`;

    return {
      osName: 'macOS',
      uaOsVersion: version,
      isMac: true,
    };
  }

  // Check for Windows
  if (ua.includes('Windows')) {
    return { osName: 'Windows', uaOsVersion: null, isMac: false };
  }

  // Check for Linux
  if (ua.includes('Linux') && !ua.includes('Android')) {
    return { osName: 'Linux', uaOsVersion: null, isMac: false };
  }

  // Check for iOS
  if (ua.includes('iPhone') || ua.includes('iPad')) {
    return { osName: 'iOS', uaOsVersion: null, isMac: false };
  }

  // Check for Android
  if (ua.includes('Android')) {
    return { osName: 'Android', uaOsVersion: null, isMac: false };
  }

  return { osName: 'unknown', uaOsVersion: null, isMac: false };
}

/**
 * Get browser name from User-Agent
 */
export function getBrowser(): string {
  if (typeof window === 'undefined') return 'unknown';

  const ua = navigator.userAgent;

  if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome';
  if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Edg')) return 'Edge';
  if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera';

  return 'other';
}

interface DownloadClickProperties {
  button_location: 'header' | 'hero';
  os_name: string;
  // Renamed to make it clear this is from User-Agent and may be inaccurate
  ua_os_version: string | null;
  is_mac: boolean;
  browser: string;
  user_agent: string;
  page_url: string;
  referrer: string;
}

/**
 * Track download button click
 */
export function trackDownloadClick(buttonLocation: 'header' | 'hero') {
  const osInfo = getOSInfo();
  const browser = getBrowser();

  const properties: DownloadClickProperties = {
    button_location: buttonLocation,
    os_name: osInfo.osName,
    ua_os_version: osInfo.uaOsVersion,
    is_mac: osInfo.isMac,
    browser,
    user_agent: typeof window !== 'undefined' ? navigator.userAgent : '',
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    referrer: typeof document !== 'undefined' ? document.referrer : '',
  };

  // Track in Mixpanel
  mixpanel.track('Download Button Clicked', properties);

  // Track in PostHog
  posthog.capture('Download Button Clicked', properties);

  console.log('Analytics: Download button clicked', properties);
}

/**
 * Track page view (called automatically, but can be called manually)
 */
export function trackPageView(pageName: string) {
  const osInfo = getOSInfo();

  const properties = {
    page_name: pageName,
    os_name: osInfo.osName,
    ua_os_version: osInfo.uaOsVersion,
    is_mac: osInfo.isMac,
    browser: getBrowser(),
  };

  mixpanel.track('Page Viewed', properties);
  posthog.capture('$pageview', properties);
}
