'use client';

import { ServiceHero } from "../services-hero";
import { ServicesList } from "../services-list";

export function ServicesView() {
  return (
    <>
      <ServiceHero />

      <ServicesList />
    </>
  );
}
