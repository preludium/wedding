/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: ignore */
import { Heart } from 'lucide-react';
import { useTranslation } from '@/translations/useTranslation';

export const Breakfast = () => {
  const { t } = useTranslation();

  return (
    <section id="breakfast" className="flex flex-col justify-around items-center py-28">
      <div className="container flex flex-col items-center w-full gap-12">
        <div className="flex flex-col w-full items-center gap-4">
          <h3 className="text-4xl font-medium font-PlayfairDisplay mb-2">{t('nav.breakfast')}</h3>
          <div className="flex items-center justify-center w-full">
            <div className="h-[1px] bg-[#e8ca9b] md:w-[15%] -md:w-[25%]"></div>
            <Heart className="mx-2 text-[#e8ca9b] h-5 w-5" />
            <div className="h-[1px] bg-[#e8ca9b] md:w-[15%] -md:w-[25%]"></div>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full max-w-[1032px]">
          <div className="shadow-around-sm p-8 rounded-xl bg-secondary h-fit">
            <div className="flex flex-col gap-6 [&_strong]:font-bold">
              <p>{t('common.dearGuests')},</p>
              <div className="flex flex-col gap-2">
                <p dangerouslySetInnerHTML={{ __html: t('breakfast.p1') }} />
                <p dangerouslySetInnerHTML={{ __html: t('breakfast.p2') }} />
                <p dangerouslySetInnerHTML={{ __html: t('breakfast.p3') }} />
                <p dangerouslySetInnerHTML={{ __html: t('breakfast.p4') }} />
                <p dangerouslySetInnerHTML={{ __html: t('breakfast.p5') }} />
              </div>
              <p dangerouslySetInnerHTML={{ __html: t('breakfast.greeting1') }} />
              <p>Gabriela & Francis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
