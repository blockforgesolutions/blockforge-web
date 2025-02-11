import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { useTranslate } from 'src/locales';
import { varAlpha, stylesMode } from 'src/theme/styles';

import { SvgColor } from 'src/components/svg-color';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { CircleSvg, FloatLine, FloatPlusIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

export function HomeMinimal({ sx, ...other }: BoxProps) {
  const { t } = useTranslate('home');

  const renderLines = (
    <>
      <FloatPlusIcon sx={{ top: 72, left: 72 }} />
      <FloatPlusIcon sx={{ bottom: 72, left: 72 }} />
      <FloatLine sx={{ top: 80, left: 0 }} />
      <FloatLine sx={{ bottom: 80, left: 0 }} />
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );

  const renderDescription = (
    <>
      <SectionTitle
        caption={t('homeMinimalCaption')}
        title="Web3"
        txtGradient="Wanderers"
        sx={{ mb: { xs: 5, md: 8 }, textAlign: { xs: 'center', md: 'left' } }}
      />

      <Stack
        spacing={6}
        sx={{
          maxWidth: { sm: 560, md: 400 },
          mx: { xs: 'auto', md: 'unset' },
        }}
      >
        <Box component={m.div} variants={varFade({ distance: 24 }).inUp} gap={3} display="flex">
          <SvgColor
            src={`${CONFIG.assetsDir}/assets/icons/home/ic-education.svg`}
            sx={{ width: 40, height: 40 }}
          />
          <Stack spacing={1}>
            <Typography variant="h5" component="h6">
              {t('homeItem1Title')}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>{t('homeItem1Description')}</Typography>
          </Stack>
        </Box>
        <Box component={m.div} variants={varFade({ distance: 24 }).inUp} gap={3} display="flex">
          <SvgColor
            src={`${CONFIG.assetsDir}/assets/icons/home/ic-consulting.svg`}
            sx={{ width: 40, height: 40 }}
          />
          <Stack spacing={1}>
            <Typography variant="h5" component="h6">
              {t('homeItem2Title')}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>{t('homeItem2Description')}</Typography>
          </Stack>
        </Box>
        <Box component={m.div} variants={varFade({ distance: 24 }).inUp} gap={3} display="flex">
          <SvgColor
            src={`${CONFIG.assetsDir}/assets/icons/home/ic-development.svg`}
            sx={{ width: 40, height: 40 }}
          />
          <Stack spacing={1}>
            <Typography variant="h5" component="h6">
              {t('homeItem3Title')}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>{t('homeItem3Description')}</Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );

  const renderImg = (
    <Stack
      component={m.div}
      variants={varFade({ distance: 24 }).inRight}
      alignItems="center"
      justifyContent="center"
      sx={{ height: 1, position: 'relative' }}
    >
      <Box
        sx={{
          left: 0,
          width: 720,
          borderRadius: 2,
          position: 'absolute',
          bgcolor: 'background.default',
          boxShadow: (theme) =>
            `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
          [stylesMode.dark]: {
            boxShadow: (theme) =>
              `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.common.blackChannel, 0.16)}`,
          },
        }}
      >
        <Box
          component="img"
          alt="Home Chart"
          src={`${CONFIG.assetsDir}/assets/images/home/web3wanderers.webp`}
          sx={{ width: 720, borderRadius: 2 }}
        />
      </Box>
    </Stack>
  );

  return (
    <Box
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        py: { xs: 10, md: 20 },
        ...sx,
      }}
      {...other}
    >
      <MotionViewport>
        {renderLines}

        <Container sx={{ position: 'relative' }}>
          <Grid container columnSpacing={{ xs: 0, md: 8 }} sx={{ position: 'relative', zIndex: 9 }}>
            <Grid xs={12} md={6} lg={7}>
              {renderDescription}
            </Grid>

            <Grid md={6} lg={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              {renderImg}
            </Grid>
          </Grid>

          <CircleSvg variants={varFade().in} sx={{ display: { xs: 'none', md: 'block' } }} />
        </Container>
      </MotionViewport>
    </Box>
  );
}
