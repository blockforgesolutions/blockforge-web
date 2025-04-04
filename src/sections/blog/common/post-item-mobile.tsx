import type { IBlogPostProps } from 'src/types/blog';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { fDate } from 'src/utils/format-time';

import { useTranslate } from 'src/locales';

import { Image } from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import PostTimeBlock from './post-time-block';

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
  onSiderbar?: boolean;
};

export default function PostItemMobile({ post, onSiderbar }: Props) {
  const { currentLang } = useTranslate();
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems={{ xs: 'flex-start', md: 'unset' }}
      sx={{ width: 1 }}
    >
      <Image
        alt={post.title}
        src={post.coverUrl}
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
          borderRadius: 1.5,
        }}
      />

      <Stack spacing={onSiderbar ? 0.5 : 1}>
        <Link color="inherit">
          <TextMaxLine variant={onSiderbar ? 'subtitle2' : 'h6'}>{currentLang.value === "en" ? post.title : post.titleTr}</TextMaxLine>
        </Link>

        <PostTimeBlock createdAt={fDate(post.createdAt) || ""} duration={post.duration} />
      </Stack>
    </Stack>
  );
}
