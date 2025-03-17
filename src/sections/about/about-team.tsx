import type { BoxProps } from '@mui/material/Box';

import React from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';
import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

// import { _socials, _carouselsMembers } from 'src/_mock';
import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';
import { varFade, AnimateBorder, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------


const competencies = [
  {
    icon: <SvgColor
      src={`${CONFIG.assetsDir}/assets/icons/home/ic-development.svg`}
      sx={{ width: 80, height: 80, mt: 2 }}
    />,
    title: "Blockchain Developers",
    desc: "blockchainDevelopersDesc"
  },
  {
    icon: <SvgColor
      src={`${CONFIG.assetsDir}/assets/icons/home/ic-consulting.svg`}
      sx={{ width: 80, height: 80, mt: 2 }}
    />,
    title: "Consultants",
    desc: "consultantsDesc"
  },
  {
    icon: <SvgColor
      src={`${CONFIG.assetsDir}/assets/icons/home/ic-education.svg`}
      sx={{ width: 80, height: 80, mt: 2 }}
    />,
    title: "Education Specialists",
    desc: "educationSpecialistsDesc"
  },
  {
    icon: <Iconify icon="mdi:chart-line" width={80} style={{ marginTop: 16 }} />,
    title: "Marketing and Strategy Experts",
    desc: "marketingAndStrategyExpertsDesc"
  },
]

export function AboutTeam({ sx, ...other }: BoxProps) {
  const { t } = useTranslate('about');


  return (
    <Box component="section" sx={{ overflow: 'hidden', ...sx }} {...other}>
      <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
        <m.div variants={varFade().inDown}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            {t('Dream Team')}
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ my: 3 }}>
            {t('teamTitle')}
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography sx={{ mx: 'auto', maxWidth: 640, color: 'text.secondary' }}>
            {t('teamDesc')}
          </Typography>
        </m.div>

        <Box sx={{ position: 'relative', display: { xs: 'block', md: 'flex' }, gap: 4, height: '100%', alignItems: 'stretch' }}>
          {/* <CarouselArrowFloatButtons {...carousel.arrows} options={carousel.options} /> */}

          {competencies.map((competency, i) => (
            <Box
              key={i}
              component={m.div}
              variants={varFade().in}
              sx={{
                py: { xs: 8, md: 10 },
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                minHeight: '100%',
                height: 'auto',
              }}
            >
              <CompetenciesCard competency={competency} />
            </Box>
          ))}
        </Box>

        <m.div variants={varFade().inUp}>
          <Typography sx={{ mx: 'auto', maxWidth: 640, color: 'text.secondary' }}>
            {t('teamDesc1')}
          </Typography>
        </m.div>

        <Button
          href={paths.contact}
          size="large"
          color="inherit"
          variant="outlined"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={24} />}
          sx={{ mx: 'auto', mt: 4 }}
        >
          {t('Contact')}
        </Button>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------


type CompetenciesProps = {
  competency: {
    icon: React.ReactNode;
    title: string;
    desc: string;
  }
};


function CompetenciesCard({ competency }: CompetenciesProps) {
  const { t } = useTranslate('about');
  const theme = useTheme();
  return (
    <Box
      component={m.div}
      variants={varFade({ distance: 24 }).inLeft}
      sx={{
        display: 'flex',
        borderRadius: 1.25,
        position: 'relative',
        alignItems: { xs: 'center', md: 'center' },
        justifyContent: { xs: 'center', md: 'start' },
        alignSelf: { md: 'flex-end' },
        height: '100%',
        width: '100%',
        mt: 4
      }}
    >
      <AnimateBorder
        animate={{
          duration: 16,
          distance: 64,
          color: [theme.vars.palette.primary.main, theme.vars.palette.warning.main],
          outline: `135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.04)}`,

        }}
        sx={{ width: 1, height: 1, position: 'absolute' }}
      />
      <Card sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mx: 'auto' }}>{competency.icon}</Box>
        <Typography variant="subtitle1" sx={{ mt: 2.5, mb: 0.5 }}>
          {t(competency.title)}
        </Typography>

        <Typography variant="body2" sx={{ mb: 2.5, color: 'text.secondary' }}>
          {t(competency.desc)}
        </Typography>
      </Card>
    </Box>

  );
}
