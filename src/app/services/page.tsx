import { getServerTranslations } from 'src/locales/server';

import { ServicesView } from 'src/sections/services/view';

// ----------------------------------------------------------------------

export async function generateMetadata() {
  const { t } = await getServerTranslations('navbar');
  return {
    title: t('services'),
  };
}

export default function Page() {
  return <ServicesView />
}
