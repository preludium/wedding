import { useTranslation } from '@/translations/useTranslation';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="container flex justify-center items-center text-center md:h-viewport bg-hero bg-cover bg-no-repeat">
        <main className="flex flex-col align-center text-5xl md:text-8xl">
          <h1 className="font-calligrapher">
            {`Gabriela ${t('common.and')} Francis`}
          </h1>
        </main>
    </section>
  );
};
