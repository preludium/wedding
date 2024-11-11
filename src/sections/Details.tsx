import { useTranslation } from '@/translations/useTranslation';

export const Details = () => {
  const { t } = useTranslation();

  return (
    <section className="container flex justify-center items-center text-center md:h-viewport">
      <div className="flex flex-col align-center gap-16 text-5xl md:text-7xl">
        <h1 className="font-dhellia">
          {t("hero.title")}
        </h1>
        <h1 className="font-dhellia font-normal">
          {t("common.date")}
        </h1>
      </div>
    </section>
  );
};
