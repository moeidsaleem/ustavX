import Link from 'next/link';

import { StickyBanner } from '@/features/landing/StickyBanner';

export const DemoBanner = () => (
  <StickyBanner>
    Explore UstavAI -
    {' '}
    <Link href="/sign-up">Explore the Legal Dashboard</Link>
  </StickyBanner>
);
