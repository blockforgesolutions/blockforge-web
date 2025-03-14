import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _socials } from 'src/_mock';
import { TwitterIcon, FacebookIcon, LinkedinIcon, InstagramIcon } from 'src/assets/icons';

import { Logo } from 'src/components/logo';

import { useTranslate } from '../../locales';

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

export type FooterProps = {
  layoutQuery: Breakpoint;
  sx?: SxProps<Theme>;
};

export function Footer({ layoutQuery, sx }: FooterProps) {
  const theme = useTheme();
  const { t, currentLang } = useTranslate('navbar');

  const LINKS = [
    {
      headline: 'w3w',
      children: [
        { name: 'about', href: paths.about },
        { name: 'services', href: paths.contact },
        { name: 'contact', href: paths.contact },
      ],
    },
    {
      headline: 'legal',
      children: [
        { name: 'terms', href: paths.terms },
        { name: 'privacy', href: paths.privacy },
      ],
    },
    {
      headline: 'contact',
      children: [
        currentLang.value === 'en'
          ? {
            name: 'info@blockforgesolutions.com',
            href: 'mailto:info@blockforgesolutions.com'
          }
          : {
            name: 'info@web3wanderers.com',
            href: 'mailto:info@web3wanderers.com'
          }
      ],
    },
  ];

  return (
    <Box component="footer" sx={{ position: 'relative', bgcolor: 'background.default', ...sx }}>
      <Divider />

      <Container
        sx={{
          pb: 5,
          pt: 10,
          textAlign: 'center',
          [theme.breakpoints.up(layoutQuery)]: { textAlign: 'unset' },
        }}
      >
        <Logo isSingle={false} />

        <Grid
          container
          sx={{
            mt: 3,
            justifyContent: 'center',
            [theme.breakpoints.up(layoutQuery)]: { justifyContent: 'space-between' },
          }}
        >
          <Grid {...{ xs: 12, [layoutQuery]: 3 }}>
            <Typography
              variant="body2"
              sx={{
                mx: 'auto',
                maxWidth: 280,
                [theme.breakpoints.up(layoutQuery)]: { mx: 'unset' },
              }}
            >
              {t('w3wslg')}
            </Typography>

            <Stack
              direction="row"
              sx={{
                mt: 3,
                mb: 5,
                justifyContent: 'center',
                [theme.breakpoints.up(layoutQuery)]: { mb: 0, justifyContent: 'flex-start' },
              }}
            >
              {_socials.map((social) => (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.path}
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                  sx={{
                    '&:hover': {
                      bgcolor: 'action.hover',
                      '& svg': { color: 'inherit' },
                    },
                  }}
                >
                  {social.value === 'twitter' && <TwitterIcon />}
                  {social.value === 'facebook' && <FacebookIcon />}
                  {social.value === 'instagram' && <InstagramIcon />}
                  {social.value === 'linkedin' && <LinkedinIcon />}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid {...{ xs: 12, [layoutQuery]: 6 }}>
            <Stack
              spacing={5}
              sx={{
                flexDirection: 'column',
                [theme.breakpoints.up(layoutQuery)]: { flexDirection: 'row' },
              }}
            >
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  sx={{
                    width: 1,
                    alignItems: 'center',
                    [theme.breakpoints.up(layoutQuery)]: { alignItems: 'flex-start' },
                  }}
                >
                  <Typography component="div" variant="overline">
                    {t(list.headline)}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {t(link.name)}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © {t('rights')}
        </Typography>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

export type HomeFooterProps = {
  sx?: SxProps<Theme>;
};

export function HomeFooter({ sx }: HomeFooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
        ...sx,
      }}
    >
      <Container>
        <Logo />
        <Box sx={{ mt: 1, typography: 'caption' }}>
          © All rights reserved.
          <br /> made by
          <Link href="https://web3wanderers.com/"> web3wanderers </Link>
        </Box>
      </Container>
    </Box>
  );
}
