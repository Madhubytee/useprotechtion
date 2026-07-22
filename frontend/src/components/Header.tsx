'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <div className="hud-header">
      <Link href="/" className="hud-logo" style={{ textDecoration: 'none' }}>
        USE<span>PROTECHTION</span>
      </Link>
    </div>
  );
}
