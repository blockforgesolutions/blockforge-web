import './code-highlight-block.css';

import type { SxProps } from '@mui/material';
import type { Theme } from '@mui/material/styles';

import StyledMarkdown from './styles';


// ----------------------------------------------------------------------

type Props = {
  firstLetter?: boolean;
  content: string;
  sx?: SxProps<Theme>;
};

export function Markdown({ content, firstLetter = false, sx }: Props) {
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
