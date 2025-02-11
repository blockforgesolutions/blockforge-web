'use client';

import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeFAQs } from '../home-faqs';
import { HomeHero } from '../home-hero';
import { HomeMinimal } from '../home-minimal';
import { HomeForDesigner } from '../home-for-designer';
import { HomeIntegrations } from '../home-integrations';
import { HomeAdvertisement } from '../home-advertisement';

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <HomeHero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <HomeMinimal />

        <HomeForDesigner />

        <HomeIntegrations />

        {/* <HomePricing /> */}

        <HomeFAQs />

        <HomeAdvertisement />
      </Stack>
    </>
  );
}
