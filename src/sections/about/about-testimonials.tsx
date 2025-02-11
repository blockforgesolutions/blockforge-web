import type { BoxProps } from '@mui/material/Box';
import type { IDateValue } from 'src/types/common';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { fDate } from 'src/utils/format-time';

import { _testimonials } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { bgBlur, varAlpha, bgGradient, hideScrollY, stylesMode } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import { Image } from 'src/components/image';
import { useTranslate } from 'src/locales';
import { Divider } from '@mui/material';

// ----------------------------------------------------------------------

export function AboutTestimonials({ sx, ...other }: BoxProps) {
  const { t } = useTranslate('about')
  const theme = useTheme();

  const renderLink = (
    <Button color="primary" endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
      Read more
    </Button>
  );

  const renderDescription = (
    <Box
      sx={{
        maxWidth: { md: 560 },
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3, color: 'common.white' }}>
          {t('partnersTitle')}
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography sx={{ color: 'common.white' }}>
          {t('partnersDesc')}
        </Typography>
      </m.div>
      <Box sx={{ display:{ xs: 'none', md: 'block'}, mt:2 }}>
        <Divider />
      </Box>
      <m.div variants={varFade().inUp} style={{ marginTop: 16 }}>
        <Typography sx={{ color: 'common.white' }}>
          {t('partnersDesc1')}
        </Typography>
      </m.div>
    </Box>
  );

  const renderContent = (
    <Box
      sx={{
        ...hideScrollY,
        py: { md: 10 },
        height: { md: 1 },
        overflowY: { xs: 'unset', md: 'auto' },
      }}
    >
      {/* <Masonry spacing={3} columns={{ xs: 1, md: 2 }} sx={{ ml: 0 }}>
        {_testimonials.map((testimonial) => (
          <m.div key={testimonial.name} variants={varFade().inUp}>
            <TestimonialItem testimonial={testimonial} />
          </m.div>
        ))}
      </Masonry> */}
      <m.div variants={varFade().inUp}>
        <Image
          alt="icp-logo"
          src={`${CONFIG.assetsDir}/assets/images/about/icp-logo.png`}
          ratio="1/1"
          sx={(themeImg) => ({
            borderRadius: 3,
            boxShadow: `-40px 40px 80px ${varAlpha(themeImg.vars.palette.grey['500Channel'], 0.24)}`,
            [stylesMode.dark]: {
              boxShadow: `-40px 40px 80px ${varAlpha(themeImg.vars.palette.common.blackChannel, 0.24)}`,
            },
          })}
        />
      </m.div>
    </Box>
  );

  return (
    <Box
      component="section"
      sx={{
        ...bgGradient({
          color: `0deg, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.9)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.9)}`,
          imgUrl: `${CONFIG.assetsDir}/assets/images/about/testimonials.webp`,
        }),
        overflow: 'hidden',
        height: { md: 840 },
        py: { xs: 10, md: 0 },
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport} sx={{ position: 'relative', height: 1 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ height: 1 }}
        >
          <Grid xs={10} md={5}>
            {renderDescription}
          </Grid>

          <Grid xs={12} md={7} lg={6} alignItems="center" sx={{ height: 1 }}>
            {renderContent}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type TestimonialItemProps = BoxProps & {
  testimonial: {
    name: string;
    content: string;
    avatarUrl: string;
    ratingNumber: number;
    postedDate: IDateValue;
  };
};

function TestimonialItem({ testimonial, sx, ...other }: TestimonialItemProps) {
  const theme = useTheme();

  return (
    <Box
      gap={3}
      display="flex"
      flexDirection="column"
      sx={{
        ...bgBlur({ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.08) }),
        p: 3,
        borderRadius: 2,
        color: 'common.white',
        ...sx,
      }}
      {...other}
    >
      <Iconify icon="mingcute:quote-left-fill" width={40} sx={{ opacity: 0.48 }} />

      <Typography variant="body2">{testimonial.content}</Typography>

      <Rating value={testimonial.ratingNumber} readOnly size="small" />

      <Box gap={2} display="flex">
        <Avatar alt={testimonial.name} src={testimonial.avatarUrl} />

        <ListItemText
          primary={testimonial.name}
          secondary={fDate(testimonial.postedDate)}
          primaryTypographyProps={{ typography: 'subtitle2', mb: 0.5 }}
          secondaryTypographyProps={{
            color: 'inherit',
            typography: 'caption',
            sx: { opacity: 0.64 },
          }}
        />
      </Box>
    </Box>
  );
}
