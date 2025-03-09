import { Scale } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';

export const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <Section>
      <CTABanner
        title={t('title')}
        description={t('description')}
        buttons={(
          <a
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
            href="https://ustav.ai"
          >
            <Scale className="mr-2 size-5" />
            {t('button_text')}
          </a>
        )}
      />
    </Section>
  );
};
