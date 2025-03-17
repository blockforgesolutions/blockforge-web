'use client';

import type { BoxProps } from '@mui/material/Box';

import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';
import { useTranslate } from 'src/locales';

import { logoClasses } from './classes';

// ----------------------------------------------------------------------

export type LogoProps = BoxProps & {
  href?: string;
  isSingle?: boolean;
  disableLink?: boolean;
};

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  (
    { width, href = '/', height, isSingle = true, disableLink = false, className, sx, ...other },
    ref
  ) => {

    const { currentLang } = useTranslate();

    const singleLogo =
      currentLang.value === 'tr' ?  (<Box
          alt="Single logo"
          component="img"
          src={`${CONFIG.assetsDir}/logo/logo-single.png`}
          width="100%"
          height="100%"
        />) : (
          <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

        }}
        width="100%"
        height="100%"
      >
        <Typography variant="h2" fontWeight="bold" textAlign="center">
          B
        </Typography>
      </Box>)

    ;

    const fullLogo =   currentLang.value === 'tr' ? (

      <Box
        alt="Full logo"
        component="img"
        src={`${CONFIG.assetsDir}/logo/logo.png`}
        width="100%"
        height="100%"
      />
    ) : (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        width="100%"
        height="100%"
      >
        <Typography variant="h3" fontWeight="bold" textAlign="center">
          BlockForge
        </Typography>
      </Box>);

    const baseSize =
      currentLang.value === 'tr'
        ? {
          width: width ?? 46,
          height: height ?? 39,
          ...(!isSingle && {
            width: width ?? { xs: 115, sm: 153 },
            height: height ?? { xs: 40, sm: 54 },
          }),
        }
        : {
          width: width ?? 46,  // İngilizce logo için örnek genişlik
          height: height ?? 39, // İngilizce logo için örnek yükseklik
          ...(!isSingle && {
            width: width ?? { xs: 130, sm: 170 },
            height: height ?? { xs:40, sm: 54  },
          }),
        };

    return (
      <Box
        ref={ref}
        component={RouterLink}
        href={href}
        className={logoClasses.root.concat(className ? ` ${className}` : '')}
        aria-label="Logo"
        sx={{
          ...baseSize,
          flexShrink: 0,
          display: 'inline-flex',
          verticalAlign: 'middle',
          ...(disableLink && { pointerEvents: 'none' }),
          textDecoration: 'none',
          color: 'inherit',
          ...sx,
        }}
        {...other}
      >
        {isSingle ? singleLogo : fullLogo}
      </Box>
    );
  }
);
