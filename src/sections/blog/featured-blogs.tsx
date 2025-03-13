import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { alpha, useTheme } from '@mui/material/styles';

import { Image } from 'src/components/image';
import Carousel, { CarouselArrows, CarouselDots } from 'src/components/carousel';
import useCarousel from 'src/components/carousel/hooks/use-carousel';

import { IBlogPostProps } from 'src/types/blog';

import FeaturedPostItem from './featured-blog-item';

// ----------------------------------------------------------------------

type Props = {
  posts: IBlogPostProps[];
};

export default function FeaturedPost({ posts }: Props) {
  const theme = useTheme();

  const carousel = useCarousel({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    ...CarouselDots({
      rounded: true,
      sx: { mt: 5 },
    }),
  });

  return (
    <Box
      sx={{
        py: 10,
        pt: { md: 15 },
        position: 'relative',
        '& .slick-list': {
          borderRadius: 2,
          overflow: 'hidden',
        },
        // Add these styles for proper slide layout
        '& .slick-slide > div': {
          width: '100%',
        },
        '& .slick-track': {
          display: 'flex',
          alignItems: 'center',
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 9 }}>
        <CarouselArrows
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
          leftButtonProps={{
            sx: {
              mt: -8,
              left: 2,
              opacity: 1,
              color: 'common.white',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.main' },
            },
          }}
          rightButtonProps={{
            sx: {
              mt: -8,
              right: 2,
              opacity: 1,
              color: 'common.white',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.main' },
            },
          }}
        >
          <Carousel
            ref={carousel.carouselRef}
            {...carousel.carouselSettings}
          >
            {posts.map((post) => (
              <FeaturedPostItem key={post.id} post={post} />
            ))}
          </Carousel>
        </CarouselArrows>
      </Container>

      {posts.map(
        (post, index) =>
          carousel.currentIndex === index && (
            <Image
              key={post.id}
              alt="post cover"
              src={post.coverUrl}
              // overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${theme.palette.common.black
              //   } 75%)`}
              sx={{ position: 'absolute', top: 0, width: 1, height: 1 }}
            />
          )
      )}
    </Box>
  );
}
