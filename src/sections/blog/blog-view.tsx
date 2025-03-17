'use client';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { _tags, blogPosts, _categories } from 'src/_mock';

import BlogPosts from './blog-posts';
import FeaturedPost from './featured-blogs';
import PostSidebar from './common/post-sidebar';
import PostSearchMobile from './common/post-search-mobile';


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
