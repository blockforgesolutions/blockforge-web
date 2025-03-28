import type { Options } from 'react-markdown';
import type { Theme, SxProps } from '@mui/material/styles';

// ----------------------------------------------------------------------

export interface MarkdownProps extends Options {
  content?: string;
  asHtml?: boolean;
  sx?: SxProps<Theme>;
}
