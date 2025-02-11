import type { BoxProps } from '@mui/material/Box';

import { z as zod } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useTranslate } from 'src/locales';
import {
  CONFIG,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from 'src/config-global';

import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export function ContactForm({ sx, ...other }: BoxProps) {
  const { t } = useTranslate('contact');
  const ElearningContactSchema = zod.object({
    fullName: zod.string().min(1, { message: t('name') }),
    subject: zod.string().min(1, { message: t('subject') }),
    message: zod.string().min(1, { message: t('messageForm') }),
    email: zod
      .string()
      .min(1, { message: t('email') })
      .email({ message: t('emailValid') }),
  });
  const [mailresult, setMailResult] = useState(true);
  const defaultValues = {
    fullName: '',
    subject: '',
    email: '',
    message: '',
  };

  const methods = useForm({
    resolver: zodResolver(ElearningContactSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await emailjs.send(EMAILJS_SERVICE_ID || '', EMAILJS_TEMPLATE_ID || '', data, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      console.log('SUCCESS!');

      reset();
      setMailResult(false);
      console.log('DATA', data);
    } catch (error) {
      if (error instanceof EmailJSResponseStatus) {
        console.log('EMAILJS FAILED...', error);
      }
      console.log('ERROR', error);
    }
  });

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 13 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={6} lg={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              component="img"
              alt="Contact form"
              src={`${CONFIG.assetsDir}/assets/illustrations/illustration-courses-contact.svg`}
              sx={{ width: 260 }}
            />
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Stack
              spacing={2}
              sx={{
                mb: 5,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h3">{t('title')}</Typography>

              <Typography sx={{ color: 'text.secondary' }}>{t('description')}</Typography>
            </Stack>

            <Form methods={methods} onSubmit={onSubmit}>
              <Stack spacing={2.5} alignItems="flex-start">
                <Field.Text name="fullName" label={t('fullName')} />

                <Field.Text name="email" label={t('emailName')} />

                <Field.Text name="subject" label={t('subjectName')} />

                <Field.Text name="message" multiline rows={4} label={t('messageName')} />

                {mailresult ? (
                  <LoadingButton
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                    sx={{ mx: { xs: 'auto', md: 'unset' } }}
                  >
                    {t('send')}
                  </LoadingButton>
                ) : (
                  <Stack direction="row" gap={5} alignItems="center" justifyContent="center">
                    <Typography color="success.main" variant="h6">
                      {t('team')}
                    </Typography>
                    <Button
                      variant="text"
                      size="large"
                      color="info"
                      onClick={() => setMailResult(true)}
                    >
                      {t('newMessage')}
                    </Button>
                  </Stack>
                )}
              </Stack>
            </Form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
