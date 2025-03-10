import type { MotionValue } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { memo } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { useHoverParallax } from 'src/hooks/use-hover-parallax';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

import { Character } from './components/character';
import { CirclePattern } from './components/circle-pattern';
import { TrianglePattern } from './components/shape-pattern';
import { FloatIcon, FloatLabel } from './components/float-elements';

// ----------------------------------------------------------------------

type IconProps = BoxProps & {
  label: string;
  color: string;
  icon: string;
  offsetX: MotionValue<number>;
  offsetY: MotionValue<number>;
};

const IconLabel = ({ label, icon, offsetX, offsetY, sx, ...other }: Omit<IconProps, 'color'>) => (
  <Box component="span" sx={{ zIndex: 9, position: 'absolute', ...sx }} {...other}>
    <FloatLabel
      text={label}
      icon={<Box component="img" alt={label} src={icon} sx={{ width: 48, height: 48 }} />}
      style={{ x: offsetX, y: offsetY }}
    />
  </Box>
);

const IconBox = ({ color, icon, offsetX, offsetY, sx, ...other }: Omit<IconProps, 'label'>) => (
  <Box component="span" sx={{ zIndex: 9, position: 'absolute', ...sx }} {...other}>
    <FloatIcon
      color={color}
      style={{ x: offsetX, y: offsetY }}
      icon={<SvgColor width={40} src={icon} sx={{ color: 'common.black' }} />}
    />
  </Box>
);

// ----------------------------------------------------------------------

const DISTANCE = 40;

const iconPath = (name: string) => `${CONFIG.assetsDir}/assets/icons/${name}`;

function CareerHeroIllustration({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  const { offsetX, offsetY, onMouseMove, onMouseLeave } = useHoverParallax(120, 16);

  const characterStyles = {
    bottom: 16,
    width: 300,
    position: 'absolute',
  };

  const renderShapes = (
    <>
      <TrianglePattern />
      <CirclePattern />
    </>
  );

  const renderLabels = (
    <>
      <IconLabel
        label="Bitcoin"
        icon={iconPath('banner/ic-accounting.svg')}
        offsetX={offsetX(-DISTANCE)}
        offsetY={offsetY(-DISTANCE)}
        sx={{ top: 170, transform: 'translateX(-125px) rotate(-15deg)' }}
      />
      <Character sx={{ ...characterStyles }} />
      <IconLabel
        label="Ethereum"
        icon={iconPath('banner/ic-banking.svg')}
        offsetX={offsetX(DISTANCE * 2)}
        offsetY={offsetY(DISTANCE * 2)}
        sx={{ transform: 'translate(175px, 90px) rotate(15deg)' }}
      />
      <IconLabel
        label="Internet Computer"
        icon={iconPath('banner/ic-health-care.svg')}
        offsetX={offsetX(DISTANCE * 3)}
        offsetY={offsetY(DISTANCE * 3)}
        sx={{ transform: 'translate(170px, -110px) rotate(15deg)' }}
      />
      <IconLabel
        label="Stellar"
        icon={iconPath('banner/ic-software-development.svg')}
        offsetX={offsetX(DISTANCE * -4)}
        offsetY={offsetY(DISTANCE * -4)}
        sx={{ zIndex: 11, bottom: 160, transform: 'translateX(-110px)' }}
      />
    </>
  );

  const renderIcons = (
    <>
      <IconBox
        color={theme.palette.warning.mainChannel}
        icon={iconPath('solid-64/ic-creativity.svg')}
        offsetX={offsetX(DISTANCE)}
        offsetY={offsetY(DISTANCE)}
        sx={{ top: 16, transform: 'translateX(20px)' }}
      />
      <IconBox
        color={theme.palette.success.mainChannel}
        icon={iconPath('solid-64/ic-marketing-bullhorn.svg')}
        offsetX={offsetX(-DISTANCE * 2)}
        offsetY={offsetY(DISTANCE * 2)}
        sx={{ bottom: 16, transform: 'translateX(40px)' }}
      />
      <IconBox
        color={theme.palette.info.mainChannel}
        icon={iconPath('solid-64/ic-customer-service.svg')}
        offsetX={offsetX(DISTANCE * 3)}
        offsetY={offsetY(DISTANCE * 3)}
        sx={{ bottom: 220, transform: 'translateX(-220px)' }}
      />
    </>
  );

  return (
    <Box
      component={m.div}
      display="flex"
      alignItems="center"
      justifyContent="center"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      sx={{ width: 560, height: 560, position: 'relative', ...sx }}
      {...other}
    >
      <Character isFront sx={{ ...characterStyles, zIndex: 10 }} />
      {renderLabels}
      {renderIcons}
      {renderShapes}
    </Box>
  );
}

export default memo(CareerHeroIllustration);
