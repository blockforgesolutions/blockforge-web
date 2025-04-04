'use client';

import { AboutWhat } from '../about-what';
import { AboutTeam } from '../about-team';
import { AboutVision } from '../about-vision';
import { AboutTestimonials } from '../about-testimonials';

// ----------------------------------------------------------------------

export function AboutView() {
  return (
    <>
      <AboutWhat />

      <AboutVision />

      <AboutTestimonials />

      <AboutTeam />

    </>
  );
}
