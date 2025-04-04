import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { useTranslate } from 'src/locales';
import { varAlpha } from 'src/theme/styles';

import { Image } from 'src/components/image';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function AboutVision({ sx, ...other }: BoxProps) {
  const { t } = useTranslate('about');
  const renderImg = (
    <Image
      src={`${CONFIG.assetsDir}/assets/images/about/vision3.jpg`}
      alt="about-vision"
      ratio={{ xs: '4/3', sm: '16/9' }}
      slotProps={{
        overlay: {
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey['900Channel'], 0.48),
        },
      }}
    />
  );

  // const renderLogos = (
  //   <Box
  //     display="flex"
  //     flexWrap="wrap"
  //     alignItems="center"
  //     justifyContent="center"
  //     sx={{
  //       width: 1,
  //       zIndex: 9,
  //       bottom: 0,
  //       opacity: 0.48,
  //       position: 'absolute',
  //       py: { xs: 1.5, md: 2.5 },
  //     }}
  //   >
  //     {['ibm', 'lya', 'spotify', 'netflix', 'hbo', 'amazon'].map((logo) => (
  //       <Box
  //         component={m.img}
  //         key={logo}
  //         variants={varFade().in}
  //         alt={logo}
  //         src={`${CONFIG.assetsDir}/assets/icons/brands/ic-brand-${logo}.svg`}
  //         sx={{ m: { xs: 1.5, md: 2.5 }, height: { xs: 20, md: 32 } }}
  //       />
  //     ))}
  //   </Box>
  // );

  return (
    <Box
      component="section"
      sx={{
        pb: 10,
        position: 'relative',
        bgcolor: 'background.neutral',
        '&::before': {
          top: 0,
          left: 0,
          width: 1,
          content: "''",
          position: 'absolute',
          height: { xs: 80, md: 120 },
          bgcolor: 'background.default',
        },
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionViewport}>
        <Box
          sx={{
            mb: 10,
            borderRadius: 2,
            display: 'flex',
            overflow: 'hidden',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderImg}

          {/* {renderLogos} */}
        </Box>

        <m.div variants={varFade().inUp}>
          <Typography variant="h3" sx={{ textAlign: 'center', maxWidth: 'auto', mx: 'auto' }}>
            {t('vision')}
          </Typography>
        </m.div>
      </Container>
    </Box>
  );
}
