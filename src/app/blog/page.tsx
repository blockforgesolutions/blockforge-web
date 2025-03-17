import { getServerTranslations } from "src/locales/server";

import BlogView from "src/sections/blog/blog-view";

export async function generateMetadata() {
  const { t } = await getServerTranslations('navbar');
  return {
    title: t('Web3-Academy'),
  };
}

export default function Page() {
  return <BlogView />
}
