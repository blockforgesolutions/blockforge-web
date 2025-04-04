import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

import { useTranslate } from 'src/locales';
import { bgGradient } from 'src/theme/styles';

import { Image } from 'src/components/image';


// ----------------------------------------------------------------------

const StyledSection = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 2,
  marginTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(10),
  },
}));

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: `${alpha(theme.palette.common.black, 0)} 0%, ${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
  [theme.breakpoints.up('md')]: {
    right: 0,
    width: '75%',
    left: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    width: '50%',
  },
}));

// ----------------------------------------------------------------------

export default function CareerHero() {
  const { t } = useTranslate('career');

  return (
    <Container
      sx={{
        pt: 5,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Typography
        paragraph
        variant="overline"
        sx={{ color: 'primary.main', textAlign: { xs: 'center', md: 'left' } }}
      >
        {t('join our journey')}
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        sx={{ textAlign: { xs: 'center', md: 'left' } }}
      >
        <Grid xs={12} md={6} lg={5}>
          <Typography variant="h2">{t('title')}</Typography>
        </Grid>

        <Grid xs={12} md={6} lg={6} sx={{ color: 'text.secondary' }}>
          <Stack spacing={{ xs: 3, md: 10 }} direction={{ xs: 'column', md: 'row' }}>
            <Typography>
              {t('careerDesc1')}
            </Typography>
            <Typography>
              {t('careerDesc2')}
            </Typography>
          </Stack>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 4, display: 'flex', width: { xs: '100%', md: '25%' }, }}
            href='/contact-us'
          >
            {t('contact')}
          </Button>
        </Grid>
      </Grid>



      <Section />
    </Container>
  );
}

// ----------------------------------------------------------------------

function Section() {
  const { t } = useTranslate('career');

  return (
    <StyledSection>
      <Stack
        sx={{
          py: 10,
          zIndex: 9,
          ml: 'auto',
          position: 'relative',
          px: { xs: 2.5, md: 10 },
          width: { md: 0.75, lg: 0.5 },
          mb: { xs: 0, md: 10 },
          mt: { xs: 0, md: 10 },
        }}
      >
        <Stack
          sx={{
            mb: 5,
            color: 'common.white',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2" paragraph>
            {t('join')}
          </Typography>
          <Typography sx={{ opacity: 0.72 }}>
            {t('joinDesc')}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 4, display: 'flex', width: { xs: '100%'}, }}
            href='/contact-us'
          >
            {t('contact')}
          </Button>
        </Stack>

        {/* <Box
          sx={{
            gap: 5,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {SUMMARY.map((value) => (
            <Stack key={value.name} spacing={1}>
              <Typography variant="h2" sx={{ color: 'primary.main' }}>
                <Typography variant="h3" component="span" sx={{ verticalAlign: 'top', ml: 0.5 }}>
                  +
                </Typography>
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.500' }}>
                {value.name}
              </Typography>
            </Stack>
          ))}
        </Box> */}
      </Stack>

      <StyledOverlay />

      <Box sx={{ position: 'absolute', width: 1, height: 1, top: 0 }}>
        <Image
          alt="career about"
          src="/assets/images/career/career.jpg"
          sx={{ width: 1, height: 1 }}
        />

      </Box>
    </StyledSection>
  );
}
