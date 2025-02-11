import { getServerTranslations } from 'src/locales/server';

import { ContactView } from 'src/sections/contact/view';

// ----------------------------------------------------------------------

export async function generateMetadata() {
  const { t } = await getServerTranslations('navbar');
  return {
    title: t('contact'),
  };
}

export default function Page() {
  return <ContactView />;
}
