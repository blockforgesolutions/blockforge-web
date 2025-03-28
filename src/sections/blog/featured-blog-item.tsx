import type { IBlogPostProps } from 'src/types/blog';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { useTranslate } from 'src/locales';

import { Image } from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import PostTimeBlock from './common/post-time-block';


// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps;
};

export default function FeaturedPostItem({ post }: Props) {
  const { currentLang } = useTranslate();
  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
      }}
      sx={{ bgcolor: 'background.default', borderRadius: 2 }}
    >
      <Image src={post.coverUrl} alt={post.title} sx={{ flexGrow: 1, height: { md: 560 } }} />

      <Stack
        justifyContent="space-between"
        sx={{
          mx: 'auto',
          p: { xs: 3, md: 5 },
          maxWidth: { md: 396 },
        }}
      >
        <Stack spacing={1}>
          <PostTimeBlock createdAt={fDate(post.createdAt) ?? ''} duration={post.duration ?? 'Unknown'} />

          <Link component={RouterLink} href={paths.post.details(post.title)} color="inherit" variant="h3">
            {currentLang.value === "en" ? post.title : post.titleTr}
          </Link>

          <TextMaxLine line={3} variant="body2" sx={{ color: 'text.secondary' }}>
            {currentLang.value === "en" ? post.description : post.descriptionTr}
          </TextMaxLine>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ pt: 2, typography: 'body2' }}>
          <Avatar src={post.author.avatarUrl} sx={{ mr: 1 }} />
          {post.author.name}
        </Stack>
      </Stack>
    </Stack>
  );
}
