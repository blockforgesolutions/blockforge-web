import { IconifyIcon } from '@iconify/react';
import { Iconify, IconifyProps } from '../iconify';

// ----------------------------------------------------------------------

type Props = {
  icon?: IconifyProps | string; // Right icon
  isRTL?: boolean;
};

export function LeftIcon({ icon = 'eva:arrow-ios-forward-fill', isRTL }: Props) {
  return (
    <Iconify
      icon={icon as string | IconifyIcon}
      sx={{
        transform: ' scaleX(-1)',
        ...(isRTL && {
          transform: ' scaleX(1)',
        }),
      }}
    />
  );
}

export function RightIcon({ icon = 'eva:arrow-ios-forward-fill', isRTL }: Props) {
  return (
    <Iconify
      icon={icon as string | IconifyIcon}
      sx={{
        ...(isRTL && {
          transform: ' scaleX(-1)',
        }),
      }}
    />
  );
}
