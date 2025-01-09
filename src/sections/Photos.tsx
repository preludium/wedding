import { useTranslation } from '@/translations/useTranslation';

export const Photos = () => {
  const { t } = useTranslation();

  return (
    <section id="photos" className="section container flex flex-col justify-around items-center text-center h-viewport-1/2 md:h-viewport">
      <p className='text-lg'>{t('photos.intro')}</p>
      <p className='text-xl'>{t('photos.howItWorks')}</p>
      <ol>
        <li className='text-sm'>{t('photos.step1')}</li>
        <li className='text-sm'>{t('photos.step2')}</li>
        <li className='text-sm'>{t('photos.step3')}</li>
        <li className='text-sm'>{t('photos.step4')}</li>
      </ol>
      <p className='text-lg'>{t('photos.conclusion')}</p>
      <p className='text-lg'>{t('photos.outro')}</p>
    </section>
  );
};
