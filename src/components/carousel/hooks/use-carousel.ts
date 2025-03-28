/* eslint-disable import/no-extraneous-dependencies */
import type Carousel from 'react-slick';
import type { Settings } from 'react-slick';

import { useRef, useState, useCallback } from 'react';

import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

// type ReturnType = {
//   currentIndex: number;
//   nav: Carousel | undefined;
//   carouselSettings: Settings;
//   carouselRef: React.MutableRefObject<Carousel | null>;
//   //
//   onPrev: VoidFunction;
//   onNext: VoidFunction;
//   onSetNav: VoidFunction;
//   onTogo: (index: number) => void;
//   //
//   setNav: React.Dispatch<React.SetStateAction<Carousel | undefined>>;
//   setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
// };

export default function useCarousel(props?: Settings, p0?: unknown) {
  const theme = useTheme();

  const carouselRef = useRef<Carousel | null>(null);
  const [currentIndex, setCurrentIndex] = useState(props?.initialSlide || 0);
  const [nav, setNav] = useState<Carousel | undefined>(undefined);
  const rtl = theme.direction === 'rtl';

  const carouselSettings: Settings = {
    arrows: false,
    dots: !!props?.customPaging,
    rtl,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
    ...props,
    fade: !!(props?.fade && !rtl),
  };

  const onSetNav = useCallback(() => {
    if (carouselRef.current) {
      setNav(carouselRef.current);
    }
  }, []);

  const onPrev = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.slickPrev();
    }
  }, []);

  const onNext = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.slickNext();
    }
  }, []);

  const onTogo = useCallback((index: number) => {
    if (carouselRef.current) {
      carouselRef.current.slickGoTo(index);
    }
  }, []);

  return {
    nav,
    carouselRef,
    currentIndex,
    carouselSettings,
    //
    onPrev,
    onNext,
    onTogo,
    onSetNav,
    setNav,
    setCurrentIndex,
    //
    arrows: {
      onPrev,
      onNext,
    },
    dots: {
      scrollSnaps: Array.from({ length: props?.slidesToShow || 1 }, (_, i) => i),
      selectedIndex: currentIndex,
      onClickDot: (index: number) => onTogo(index),
    },
    options: carouselSettings,
  };
}

