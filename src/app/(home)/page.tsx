import { getServerTranslations } from 'src/locales/server';

import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export async function generateMetadata() {
  const { t } = await getServerTranslations('navbar');
  return {
    title: t('metaTitleHome'),
    description: t('metaDescriptionHome'),
  };
}

export default function Page() {
  return <HomeView />;
}
