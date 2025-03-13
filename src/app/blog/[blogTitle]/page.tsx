import { getServerTranslations } from "src/locales/server";
import BlogPostView from "src/sections/blog/blog-post-view";

export async function generateMetadata() {
  const { t } = await getServerTranslations('navbar');
  return {
    title: t('Web3-Academy'),
  };
}

export default function Page() {
  return <BlogPostView />
}
