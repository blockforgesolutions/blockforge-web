'use client';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { ComingSoonIllustration } from 'src/assets/illustrations';

import { Iconify } from '../../components/iconify';

// ----------------------------------------------------------------------

export function ComingSoonView() {
  return (
    <Container>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Coming soon!
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>
        We are currently working hard on this page!
      </Typography>

      <ComingSoonIllustration sx={{ my: { xs: 5, sm: 10 } }} />

      <Button
        size="large"
        color="primary"
        variant="text"
        href="\"
        endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        sx={{ px: 2 }}
      >
        Home
      </Button>
    </Container>
  );
}
