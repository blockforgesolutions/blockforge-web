import type { IBlogPostProps } from 'src/types/blog';

import { m } from 'framer-motion';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { useTranslate } from 'src/locales';

import { Image } from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
import { varHover, varTranHover } from 'src/components/animate';

import PostTimeBlock from './common/post-time-block';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
};

export default function BlogPostItem({ post }: Props) {
  const { currentLang } = useTranslate();
  const theme = useTheme();


  return (
    <Stack
      component={m.div}
      whileHover="hover"
      variants={varHover(1)}
      transition={varTranHover()}
      sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative', }}
    >
      <m.div variants={varHover(1.25)} transition={varTranHover()} style={{ height: '100%' }}>
        <Image
          src={post.coverUrl}
          alt={post.title}
          ratio="3/4"
          sx={{
            width: 1,
            height: 1,
          }}
          overlay={`linear-gradient(to top, ${alpha(theme.palette.common.black, 0)} 0%, ${theme.palette.common.black
            } 75%)`}
        />
      </m.div>

      <Stack
        justifyContent="space-between"
        sx={{
          p: 5,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Stack spacing={2}>
          <PostTimeBlock
            duration={post.duration}
            createdAt={fDate(post.createdAt) || ""}
            sx={{ color: 'inherit', opacity: 0.72 }}
          />

          <Link component={RouterLink} href={paths.post.details(post.title)} sx={{ color: 'common.white' }}>
            <TextMaxLine variant="h4">{currentLang.value === "en" ? post.title : post.titleTr}</TextMaxLine>
          </Link>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
          <Avatar src={post.author.avatarUrl} sx={{ mr: 1 }} />
          {post.author.name}
        </Stack>
      </Stack>
    </Stack>
  );
}
