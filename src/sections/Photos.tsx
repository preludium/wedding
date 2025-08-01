import { Heart } from 'lucide-react';
import povUrl from '@/assets/pov.png';
import { useTranslation } from '@/translations/useTranslation';
export const Photos = () => {
  const { t } = useTranslation();

  return (
    <section
      id="photos"
      className="section container flex flex-col justify-center gap-14 pt-8 md:pb-8 -md:pb-16 min-h-viewport-1/2 md:min-h-viewport"
    >
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-4xl font-medium font-PlayfairDisplay mb-2 text-center">
          {t('photos.title')}
        </h3>
        <div className="flex items-center justify-center w-full">
          <div className="h-[1px] bg-[#e8ca9b] md:w-[15%] -md:w-[25%]"></div>
          <Heart className="mx-2 text-[#e8ca9b] h-5 w-5" />
          <div className="h-[1px] bg-[#e8ca9b] md:w-[15%] -md:w-[25%]"></div>
        </div>
        <p className="text-center">{t('photos.p')}</p>
      </div>
      <div className="grid grid-cols-2 -md:grid-cols-1 items-center gap-8">
        <div className="flex flex-col gap-10">
          <p>{t('photos.intro')}</p>
          <div className="flex gap-8">
            <div className="flex flex-col gap-4 flex-grow">
              <p className="text-lg font-medium">{t('photos.howItWorks')}</p>
              <ol className="flex flex-col gap-3 [&>li]:text-left">
                <li>1. {t('photos.step1')}</li>
                <li>2. {t('photos.step2')}</li>
                <li>3. {t('photos.step3')}</li>
                <li>4. {t('photos.step4')}</li>
              </ol>
            </div>
          </div>
          <p>{t('photos.conclusion')}</p>
          <p>{t('photos.outro')}</p>
        </div>
        <img
          src={povUrl}
          className="max-h-[500px] aspect-square justify-self-center"
          alt="Wedding sharing QR code"
        />
      </div>
    </section>
  );
};
