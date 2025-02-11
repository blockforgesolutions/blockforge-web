import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Divider, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { fPercent } from 'src/utils/format-number';

import { CONFIG } from 'src/config-global';
import { useTranslate } from 'src/locales';
import { varAlpha, stylesMode } from 'src/theme/styles';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, AnimateBorder, MotionViewport } from 'src/components/animate';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const SKILLS = [...Array(3)].map((_, index) => ({
  label: ['Blockchain Development', 'Education Specialists', 'Marketing and Strategy Experts'][index],
  value: [100, 100, 100][index],
}));

// ----------------------------------------------------------------------

export function AboutWhat({ sx, ...other }: BoxProps) {
  const { t } = useTranslate('about');
  const theme = useTheme();
  return (
    <Box component="section" sx={{ overflow: 'hidden', ...sx }} {...other}>
      <Container
        component={MotionViewport}
        sx={{
          py: { xs: 10, md: 15 },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Grid container columnSpacing={{ md: 3 }} alignItems="flex-start">
          <Grid
            container
            xs={12}
            md={6}
            lg={7}
            alignItems="center"
            sx={{
              pr: { md: 7 },
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Grid xs={6}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="Our office small"
                  src={`${CONFIG.assetsDir}/assets/images/about/what-small.webp`}
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
            </Grid>

            <Grid xs={6}>
              <m.div variants={varFade().inUp}>
                <Image
                  alt="Our office large"
                  src={`${CONFIG.assetsDir}/assets/images/about/what-large.webp`}
                  ratio="3/4"
                  sx={(themeImg) => ({
                    borderRadius: 3,
                    boxShadow: `-40px 40px 80px ${varAlpha(themeImg.vars.palette.grey['500Channel'], 0.24)}`,
                    [stylesMode.dark]: {
                      boxShadow: `-40px 40px 80px ${varAlpha(themeImg.vars.palette.common.blackChannel, 0.24)}`,
                    },
                  })}
                />
              </m.div>
            </Grid>
          </Grid>

          <Grid xs={12} md={6} lg={5}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                {t('title')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{ color: 'text.secondary', [stylesMode.dark]: { color: 'common.white' }, mb: 1 }}
              >
                {t('desc1')}
              </Typography>
              <Box sx={{ paddingX: 2 }}>
                <Divider />
              </Box>
              <Typography sx={{ color: 'text.secondary', [stylesMode.dark]: { color: 'common.white' }, mt: 1 }}>
                {t('desc2')}
              </Typography>
            </m.div>

            <Box gap={3} display="flex" sx={{ my: 5, width: '100%', justifyContent: 'space-between' }}>
              {SKILLS.map((progress, index) => (
                <Box component={m.div} key={progress.label} variants={varFade().inRight}>
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{ mb: 1, color: 'text.secondary', typography: 'body2' }}
                  >
                    <Typography variant="subtitle2" sx={{ flexGrow: 1, color: 'text.primary' }}>
                      {t(progress.label)}
                    </Typography>
                    {/* {fPercent(progress.value)} */}
                  </Box>

                  <LinearProgress
                    color={(index === 0 && 'primary') || (index === 1 && 'warning') || 'error'}
                    variant="determinate"
                    value={progress.value}
                  />
                </Box>
              ))}
            </Box>

            <Box
              component={m.div}
              variants={varFade({ distance: 24 }).inLeft}
              sx={{
                display: 'flex',
                borderRadius: 1.25,
                position: 'relative',
                alignItems: { xs: 'center', md: 'start' },
                justifyContent: { xs: 'center', md: 'start' },
                alignSelf: { md: 'flex-end' },
                mt: 4
              }}
            >
              <AnimateBorder
                animate={{
                  duration: 12,
                  distance: 40,
                  color: [theme.vars.palette.primary.main, theme.vars.palette.warning.main],
                  outline: `135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}`,
                }}
                sx={{ width: '150px', height: 1, position: 'absolute' }}
              />

              <Button
                size="large"
                color="primary"
                variant="text"
                href={paths.services}
                endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
                sx={{ px: 2 }}
              >
                {t('Our Services')}
              </Button>
            </Box>

            {/* <m.div variants={varFade().inRight} style={{ marginTop: 32 }} >
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
              >
                Our Services
              </Button>
            </m.div> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
