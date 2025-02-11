import { Box, Divider, styled } from '@mui/material';

const AnimatedDivider = styled(Divider)(({ theme }) => ({
  marginY: theme.spacing(2),
  height: '2px',
  background: 'linear-gradient(45deg, rgb(255, 0, 0), rgb(0, 0, 255))',
  backgroundSize: '200% 200%',
  borderRadius: 20,
  width: '100%',
  animation: 'gradientMove 5s linear infinite',

  '@keyframes gradientMove': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
}));

export function AnimatedGradientDivider() {
  return (
    <Box sx={{ width: '150px', display: { xs: 'none', md: 'flex' }, mt: 12 }}>
      <AnimatedDivider />
    </Box>
  );
}
