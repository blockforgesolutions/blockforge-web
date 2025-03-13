'use client';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { _categories, _marketingPosts, _tags, blogPosts } from 'src/_mock';
import FeaturedPost from './featured-blogs';
import PostSearchMobile from './common/post-search-mobile';
import BlogPosts from './blog-posts';
import PostSidebar from './common/post-sidebar';


// ----------------------------------------------------------------------

export default function BlogView() {
  return (
    <>
      <PostSearchMobile />

      <FeaturedPost posts={blogPosts} />

      <Container
        sx={{
          mt: 10,
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 8 }}>
          <Grid xs={12} md={8}>
            <BlogPosts posts={blogPosts} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={_tags}
              categories={_categories}
              recentPosts={{
                list: blogPosts.slice(0, 4),
              }}
            />
          </Grid>
        </Grid>
      </Container>
      {/* <MarketingLandingFreeSEO />

      <MarketingNewsletter /> */}
    </>
  );
}
