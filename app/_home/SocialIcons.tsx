export function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8.06h2.7l.4-3.13h-3.1V7.79c0-.9.25-1.52 1.55-1.52h1.66V3.46A22 22 0 0 0 14.36 3c-2.35 0-3.96 1.44-3.96 4.08v2.73H7.7v3.13h2.7V21h3.1Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 0 0 2-2C22 15.2 22 12 22 12Z" />
      <path d="M10 9.5v5l4.5-2.5-4.5-2.5Z" fill="#0f4c81" />
    </svg>
  );
}

export function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3c-1.15 0-1.9.76-1.9 1.76 0 .97.73 1.76 1.86 1.76h.02c1.17 0 1.9-.79 1.9-1.76C7.1 3.76 6.4 3 5.25 3ZM20.45 20h-3.38v-6.14c0-1.54-.55-2.6-1.93-2.6-1.05 0-1.68.71-1.95 1.4-.1.24-.13.58-.13.92V20h-3.38s.05-10.5 0-11.5h3.38v1.63c.45-.7 1.25-1.68 3.04-1.68 2.22 0 3.9 1.45 3.9 4.56V20Z" />
    </svg>
  );
}
