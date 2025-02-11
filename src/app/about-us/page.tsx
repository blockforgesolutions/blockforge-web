import { getServerTranslations } from 'src/locales/server';

import { AboutView } from '../../sections/about/view';

// ----------------------------------------------------------------------

export async function generateMetadata() {
  const { t } = await getServerTranslations('navbar');
  return {
    title: t('about'),
  };
}

export default function Page() {
  return <AboutView />;
}
