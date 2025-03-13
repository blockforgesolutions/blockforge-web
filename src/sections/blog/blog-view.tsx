'use client';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { _marketingPosts } from 'src/_mock';
import FeaturedPost from './featured-blogs';
import PostSearchMobile from './common/post-search-mobile';
import BlogPosts from './blog-posts';


// ----------------------------------------------------------------------

export default function BlogView() {
  return (
    <>
      <PostSearchMobile />

      <FeaturedPost posts={_marketingPosts.slice(0, 5).map(post => ({ ...post, createdAt: new Date(post.createdAt) }))} />

      <Container
        sx={{
          mt: 10,
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 8 }}>
          {/* <Grid xs={12} md={8}>
            <BlogPosts posts={_marketingPosts.slice(0, 5).map(post => ({ ...post, createdAt: new Date(post.createdAt) }))}  />
          </Grid> */}

          {/* <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={_tags}
              categories={_categories}
              recentPosts={{ list: _marketingPosts.slice(-4) }}
              advertisement={{
                title: 'Advertisement',
                description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                imageUrl: _mock.image.marketing(9),
                path: '',
              }}
            />
          </Grid> */}
        </Grid>
      </Container>
      {/* <MarketingLandingFreeSEO />

      <MarketingNewsletter /> */}
    </>
  );
}
