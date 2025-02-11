import type { BoxProps } from '@mui/material';

import { useMemo } from 'react';
import { m } from 'framer-motion';

import { Box, Card, Stack, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';
import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';
import { varFade, MotionViewport } from 'src/components/animate';

export function ServicesList({ sx, ...other }: BoxProps) {
  const { t, currentLang } = useTranslate('service');

  const servicesList = useMemo(
    () => [
      {
        title: t('Education'),
        desc: t('educationDesc'),
        icon: (
          <SvgColor
            src={`${CONFIG.assetsDir}/assets/icons/home/ic-education.svg`}
            sx={{ width: 80, height: 80, mt: 2 }}
          />
        ),
        subServices: [
          {
            title: t('Blockchain Fundamentals'),
            desc: t('blockchainFundamentalsDesc'),
          },
          {
            title: t('Programming Training'),
            desc: t('programmingTrainingDesc'),
          },
          {
            title: t('DeFi and NFT Applications'),
            desc: t('defiAndNftApplicationsDesc'),
          },
          {
            title: t('Corporate Training'),
            desc: t('corporateTrainingDesc'),
          },
        ],
      },
      {
        title: t('Consulting'),
        desc: t('consultingDesc'),
        icon: (
          <SvgColor
            src={`${CONFIG.assetsDir}/assets/icons/home/ic-consulting.svg`}
            sx={{ width: 80, height: 80, mt: 2 }}
          />
        ),
        subServices: [
          {
            title: t('Strategic Planning'),
            desc: t('strategicPlanningDesc'),
          },
          {
            title: t('Tokenization'),
            desc: t('tokenizationDesc'),
          },
          {
            title: t('Compliance and Data Security'),
            desc: t('complianceAndDataSecurityDesc'),
          },
          {
            title: t('Web3-Based Business Models'),
            desc: t('web3BasedBusinessModelsDesc'),
          },
        ],
      },
      {
        title: t('Development'),
        desc: t('developmentDesc'),
        icon: (
          <SvgColor
            src={`${CONFIG.assetsDir}/assets/icons/home/ic-development.svg`}
            sx={{ width: 80, height: 80, mt: 2 }}
          />
        ),
        subServices: [
          {
            title: t('DApp Development'),
            desc: t('dappDevelopmentDesc'),
          },
          {
            title: t('Smart Contract Development'),
            desc: t('smartContractDevelopmentDesc'),
          },
          {
            title: t('Platform Integrations'),
            desc: t('platformIntegrationsDesc'),
          },
          {
            title: t('Technical Support and Maintenance'),
            desc: t('technicalSupportAndMaintenanceDesc'),
          },
        ],
      },
    ],
    [t]
  );

  return (
    <Box id="services" component="section" sx={{ py: { xs: 10, md: 15 }, ...sx }} {...other}>
      <Container>
        <Box component={MotionViewport} key={currentLang.value}>
          <m.div variants={varFade({ durationIn: 0.5 }).in}>
            <Typography variant="h2" sx={{ textAlign: 'center', mb: 8 }}>
              {t('listTitle')}
            </Typography>
          </m.div>

          <Stack spacing={4}>
            {servicesList.map((service, index) => (
              <Box
                component={MotionViewport}
                key={`${service.title}-${index}-${currentLang.value}`}
              >
                <Card component={m.div} variants={varFade({ distance: 200, durationIn: 1.8 }).inUp}>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ p: 3 }}>
                    <Box sx={{ width: { xs: 1, md: 0.4 } }}>
                      <Box
                        component={m.div}
                        variants={varFade({ distance: 240, durationIn: 2 }).inRight}
                      >
                        {service.icon}
                        <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                          {service.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {service.desc}
                        </Typography>
                      </Box>
                    </Box>

                    <Stack spacing={2} sx={{ width: { xs: 1, md: 0.6 } }}>
                      {service.subServices.map((subService, subIndex) => (
                        <Card
                          component={m.div}
                          variants={varFade({ distance: 240, durationIn: 2 }).inLeft}
                          key={`${subService.title}-${subIndex}-${currentLang.value}`}
                          sx={{ p: 2, bgcolor: 'background.neutral' }}
                        >
                          <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                            {subService.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {subService.desc}
                          </Typography>
                        </Card>
                      ))}
                    </Stack>
                  </Stack>
                </Card>
              </Box>
            ))}
          </Stack>

          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <m.div variants={varFade({ durationIn: 1.5 }).in}>
              <Typography sx={{ color: 'text.secondary', maxWidth: 640, mx: 'auto' }}>
                {t('contactDesc')}
              </Typography>
            </m.div>

            <Button
              component={Link}
              href={paths.contact}
              size="large"
              color="inherit"
              variant="outlined"
              endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={24} />}
              sx={{ mt: 4 }}
            >
              {t('Contact')}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
