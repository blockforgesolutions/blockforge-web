import './code-highlight-block.css';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';

import Link from '@mui/material/Link';
import { SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';

import { isExternalLink } from 'src/routes/utils';
import { RouterLink } from 'src/routes/components';

import { Image } from '../image';
import StyledMarkdown from './styles';
import { htmlToMarkdown, isMarkdownContent } from './html-to-markdown';


// ----------------------------------------------------------------------

type Props = {
  firstLetter?: boolean;
  content: string;
  sx?: SxProps<Theme>;
};

export default function Markdown({ content, firstLetter = false, sx }: Props) {
  return (
    <StyledMarkdown
      firstLetter={firstLetter}
      dangerouslySetInnerHTML={{ __html: content }}
      sx={sx}
    />
  );
}


// ----------------------------------------------------------------------

// type ComponentTag = {
//   [key: string]: any;
// };

// const rehypePlugins = [rehypeRaw, rehypeHighlight, [remarkGfm, { singleTilde: false }]];

// const components = {
//   img: ({ ...other }: ComponentTag) => (
//     <Image
//       ratio="16/9"
//       className={markdownClasses.content.image}
//       sx={{ borderRadius: 2 }}
//       {...other}
//     />
//   ),
//   a: ({ href, children, ...other }: ComponentTag) => {
//     const linkProps = isExternalLink(href)
//       ? { target: '_blank', rel: 'noopener' }
//       : { component: RouterLink };

//     return (
//       <Link {...linkProps} href={href} className={markdownClasses.content.link} {...other}>
//         {children}
//       </Link>
//     );
//   },
//   pre: ({ children }: ComponentTag) => (
//     <div className={markdownClasses.content.codeBlock}>
//       <pre>{children}</pre>
//     </div>
//   ),
//   code({ className, children, ...other }: ComponentTag) {
//     const language = /language-(\w+)/.exec(className || '');

//     return language ? (
//       <code {...other} className={className}>
//         {children}
//       </code>
//     ) : (
//       <code {...other} className={markdownClasses.content.codeInline}>
//         {children}
//       </code>
//     );
//   },
// };
