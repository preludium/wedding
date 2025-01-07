import { useTranslation } from '@/translations/useTranslation';

export const Photos = () => {
  const { t } = useTranslation();

  return (
    <section className="container flex flex-col justify-around items-center text-center h-viewport-1/2 md:h-viewport">
      <p className='text-2xl'>{t('photos.intro')}</p>
      <p className='text-3xl'>{t('photos.howItWorks')}</p>
      <ol>
        <li className='text-xl'>{t('photos.step1')}</li>
        <li className='text-xl'>{t('photos.step2')}</li>
        <li className='text-xl'>{t('photos.step3')}</li>
        <li className='text-xl'>{t('photos.step4')}</li>
      </ol>
      <p className='text-2xl'>{t('photos.conclusion')}</p>
      <p className='text-2xl'>{t('photos.outro')}</p>
    </section>
  );
};
