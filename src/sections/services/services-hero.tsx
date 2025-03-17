import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { useTranslate } from 'src/locales';
import { varAlpha, stylesMode } from 'src/theme/styles';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, AnimateBorder, MotionViewport } from 'src/components/animate';

export function ServiceHero({ sx, ...other }: BoxProps) {
  const { t } = useTranslate('service');
  const theme = useTheme();

  return (
    <Box component="section" sx={{ overflow: 'hidden', py: 8, ...sx }} {...other}>
      <Container
        component={MotionViewport}
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Grid container spacing={4} alignItems="">
          {/* Image Section */}
          <Grid xs={12} md={6} sx={{ borderRadius: 5, overflow: 'hidden' }}>
            <m.div variants={varFade().inUp}>
              <Image
                alt="Our office small"
                src={`${CONFIG.assetsDir}/assets/images/services/futre.jpg`}
                ratio="3/2"
                sx={(themeImg) => ({
                  boxShadow: `-40px 40px 80px ${varAlpha(themeImg.vars.palette.grey['500Channel'], 0.24)}`,
                  [stylesMode.dark]: {
                    boxShadow: `-40px 40px 80px ${varAlpha(themeImg.vars.palette.common.blackChannel, 0.24)}`,
                  },
                })}
              />
            </m.div>
          </Grid>

          {/* Text Section */}
          <Grid xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <m.div variants={varFade().inUp}>
              <Typography variant="h3" sx={{ mb: 3, color: theme.palette.text.primary }}>
                {t('heroTitle')}
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                {t('heroDesc')}
              </Typography>
            </m.div>
            <Box
              component={m.div}
              variants={varFade({ distance: 24 }).inLeft}
              sx={{
                display: 'flex',
                borderRadius: 1.25,
                position: 'relative',
                alignItems: { xs: 'center', md: 'start' },
                justifyContent: { xs: 'center', md: 'start' },
                alignSelf: { md: 'flex-start' },
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
                sx={{ width: 1, height: 1, position: 'absolute' }}
              />

              <Button
                size="large"
                color="primary"
                variant="text"
                endIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}
                onClick={() => {
                  const element = document.getElementById('services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{ px: 2 }}
              >
                {t('listTitle')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
