'use client';

import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';

import { fDate } from 'src/utils/format-time';

import { _socials, blogPosts, _marketingPosts } from 'src/_mock';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';
import Markdown from 'src/components/markdown/markdown';
import PostTags from './common/post-tags';
import PostSocialsShare from './common/post-socials-share';
import PostAuthor from './common/post-author';
import LatestPosts from './common/latest-posts';


// ----------------------------------------------------------------------

export default function BlogPostView() {
  const { title, description, duration, createdAt, author, favorited, heroUrl, tags, content } =
    blogPosts[0];

  const formattedPosts = _marketingPosts.map((post) => ({
    ...post,
    createdAt: new Date(post.createdAt),
  }));

  const [favorite, setFavorite] = useState(favorited);

  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(null);
  }, []);

  const handleChangeFavorite = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  }, []);

  return (
    <>
      <Image alt="hero" src={heroUrl} ratio="21/9" />

      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: paths.post.root },
            { name: title },
          ]}
        />
      </Container>

      <Divider />

      <Container>
        <Grid container spacing={3} justifyContent={{ md: 'center' }}>
          <Grid xs={12} md={8}>
            <Stack
              spacing={3}
              sx={{
                textAlign: 'center',
                pt: { xs: 5, md: 10 },
                pb: 5,
              }}
            >
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                {duration}
              </Typography>

              <Typography variant="h2" component="h1">
                {title}
              </Typography>
              <Typography variant="h5">{description}</Typography>
            </Stack>

            <Divider />
            <Stack direction="row" justifyContent="space-between" spacing={1.5} sx={{ py: 3 }}>
              <Avatar src={author.avatarUrl} sx={{ width: 48, height: 48 }} />

              <Stack spacing={0.5} flexGrow={1}>
                <Typography variant="subtitle2">{author.name}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {fDate(createdAt, 'dd/MM/yyyy p')}
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center">
                <IconButton onClick={handleOpen} color={open ? 'primary' : 'default'}>
                  <Iconify icon="carbon:share" />
                </IconButton>

                <Checkbox
                  color="error"
                  checked={favorite}
                  onChange={handleChangeFavorite}
                  icon={<Iconify icon="carbon:favorite" />}
                  checkedIcon={<Iconify icon="carbon:favorite-filled" />}
                />
              </Stack>
            </Stack>

            <Divider sx={{ mb: 6 }} />

            <Markdown content={content} firstLetter />

            {tags.length && <PostTags tags={tags} />}

            <PostSocialsShare />

            <Divider sx={{ mt: 8 }} />

            <PostAuthor author={author} />
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* <LatestPosts posts={formattedPosts.slice(0, 4)} /> */}

      <Divider />

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: { width: 220 },
          },
        }}
      >
        {_socials.map((social) => (
          <MenuItem key={social.value} onClick={handleClose}>
            <Iconify icon={social.icon} width={24} sx={{ mr: 1, color: social.color }} />
            Share via {social.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
