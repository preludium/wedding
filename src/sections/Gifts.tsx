import { useTranslation } from '@/translations/useTranslation';

export const Details = () => {
  const { t } = useTranslation();

  return (
    <section id='gifts' className="section container flex flex-col justify-around items-center text-center h-viewport-1/2 md:h-viewport">
      <div className="flex flex-col align-center gap-16">
        <h3 className="font-PlayfairDisplay text-5xl md:text-7xl">
          {t("hero.title")}
        </h3>
        <h3 className="font-PlayfairDisplay italic font-normal text-3xl md:text-5xl">
          {t("common.date")}
        </h3>
      </div>
      <p className='font-PlayfairDisplay text-3xl'>{t('common.location')}</p>
    </section>
  );
};
