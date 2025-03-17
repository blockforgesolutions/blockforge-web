import Carousel from 'react-slick';

export * from './classes';

export type * from './types';

export * from './breakpoints';

export * from './components/carousel-slide';
export * from './components/carousel-thumbs';

export * from './components/carousel-dot-buttons';


export * from './components/carousel-progress-bar';

export * from './components/carousel-arrow-buttons';

export { default as CarouselDots } from './carousel-dots';

export { default as CarouselArrows } from './carousel-arrows';

export { default as useCarousel } from './hooks/use-carousel';

export { default as CarouselArrowIndex } from './carousel-arrow-index';

export default Carousel;
