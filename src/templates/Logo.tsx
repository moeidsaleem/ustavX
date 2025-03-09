'use client';

import Image from 'next/image';

export const Logo = () => (
  <div className="flex items-center text-xl font-semibold">
    <Image
      src="/assets/ustav-icon.png"
      alt="UstavAI Logo"
      width={32}
      height={32}
    />
    <span className="text-xl font-semibold">UstavAI</span>
  </div>
);
