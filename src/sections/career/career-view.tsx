'use client';

import Divider from '@mui/material/Divider';

import CareerHero from './career-hero';

// ----------------------------------------------------------------------

export default function CareerView() {
  return (
    <>
      <CareerHero />

      {/* <CareerAboutOurVision /> */}

      <Divider orientation="vertical" sx={{ height: 80, width: 2, mx: 'auto' }} />


    </>
  );
}
