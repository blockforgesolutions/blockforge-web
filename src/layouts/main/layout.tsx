'use client';

import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';

import { useBoolean } from 'src/hooks/use-boolean';

import { Logo } from 'src/components/logo';

import { Main } from './main';
import { Footer } from './footer';
import { NavMobile } from './nav/mobile';
import { NavDesktop } from './nav/desktop';
import { MenuButton } from '../components/menu-button';
import { LayoutSection } from '../core/layout-section';
import { HeaderSection } from '../core/header-section';
import ThemeSwitcher from '../components/theme-switcher';
import { navData as mainNavData } from '../config-nav-main';

import type { NavMainProps } from './nav/types';

// ----------------------------------------------------------------------

export type MainLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  header?: {
    sx?: SxProps<Theme>;
  };
  data?: {
    nav?: NavMainProps['data'];
  };
};

export function MainLayout({ sx, data, children, header }: MainLayoutProps) {
  const theme = useTheme();

  const mobileNavOpen = useBoolean();

  const layoutQuery: Breakpoint = 'md';

  const navData = data?.nav ?? mainNavData;

  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
      headerSection={
        <HeaderSection
          layoutQuery={layoutQuery}
          sx={header?.sx}
          slots={{
            topArea: (
              <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
                This is an info Alert.
              </Alert>
            ),
            leftArea: (
              <>
                {/* -- Nav mobile -- */}
                <MenuButton
                  onClick={mobileNavOpen.onTrue}
                  sx={{
                    mr: 1,
                    ml: -1,
                    [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
                  }}
                />
                <NavMobile
                  data={navData}
                  open={mobileNavOpen.value}
                  onClose={mobileNavOpen.onFalse}
                />
                {/* -- Logo -- */}
                <Logo isSingle={false} />
              </>
            ),
            rightArea: (
              <>
                {/* -- Nav desktop -- */}
                <NavDesktop
                  data={navData}
                  sx={{
                    display: 'none',
                    [theme.breakpoints.up(layoutQuery)]: { mr: 2.5, display: 'flex' },
                  }}
                />
                <Box display="flex" alignItems="center" gap={{ xs: 1, sm: 1.5 }}>
                  {/* -- Theme Switcher Button -- */}
                  <ThemeSwitcher />
                  {/* -- Sign in button -- *  <SignInButton /> */}
                  {/* <LanguagePopover data={allLangs} /> */}
                  {/* -- Purchase button -- *  <Button
                    variant="contained"
                    rel="noopener"
                    target="_blank"
                    href={paths.contact}
                    sx={{
                      display: 'none',
                      [theme.breakpoints.up(layoutQuery)]: { display: 'inline-flex' },
                    }}
                  >
                    Purchase
                  </Button> */}
                </Box>
              </>
            ),
          }}
        />
      }
      /** **************************************
       * Footer
       *************************************** */
      footerSection={<Footer layoutQuery={layoutQuery} />}
      /** **************************************
       * Style
       *************************************** */
      sx={sx}
    >
      <Main>{children}</Main>
    </LayoutSection>
  );
}
