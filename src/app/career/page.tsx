import { getServerTranslations } from "src/locales/server";
import CareerView from "src/sections/career/career-view";

export async function generateMetadata() {
  const { t } = await getServerTranslations('navbar');
  return {
    title: t('Career'),
  };
}

export default function Page() {
  return <CareerView />
}
