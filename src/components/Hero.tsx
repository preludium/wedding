import { useTranslation } from '@/translations/useTranslation';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="container flex justify-center text-center py-20 md:py-32 gap-10 bg-hero bg-cover bg-no-repeat">
      <div className="text-center lg:text-start space-y-6">
        <main className="flex flex-col gap-5 text-5xl md:text-6xl">
          <h1 className="inline">
            {t("hero.title")}
            <br/>
            {t("common.date")}
          </h1>
          <h2 className="inline">
            Gabriela & Francis
          </h2>
        </main>
        <p className='text-center text-2xl md:text-3xl'>
          {t("common.location")}
        </p>
      </div>
    </section>
  );
};
