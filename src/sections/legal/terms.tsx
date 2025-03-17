import Link from 'next/link';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useTranslate } from 'src/locales';

import { Iconify } from '../../components/iconify';

// ----------------------------------------------------------------------

export default function TermsView() {
  const { t } = useTranslate('legal');

  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography variant="h3" paragraph>
          {t('terms.title')}
        </Typography>
      </Box>

      {Object.keys(t('terms.sections', { returnObjects: true })).map((section) => (
        <Box key={section} sx={{ mb: 5 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {t(`terms.sections.${section}.title`)}
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            {t(`terms.sections.${section}.content`)}
          </Typography>

          {section !== 'limitation' && <Divider sx={{ my: 5 }} />}
        </Box>
      ))}

      <Box sx={{ textAlign: 'center' }}>
        <Button
          component={Link}
          href="/"
          size="large"
          color="inherit"
          variant="outlined"
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}
        >
          {t('Back to Home')}
        </Button>
      </Box>
    </Container>
  );
}
