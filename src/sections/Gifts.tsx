import { ArrowRightIcon, BanknoteIcon, ExternalLink, GiftIcon, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/translations/useTranslation';

export const Gifts = () => {
  const { t } = useTranslation();

  return (
    <section id="gifts" className="flex flex-col py-28 scroll-m-[60px] gap-12">
      <div className="flex flex-col container items-center gap-4">
        <h3 className="text-4xl font-medium font-PlayfairDisplay mb-2">{t('gifts.title')}</h3>
        <div className="flex items-center justify-center w-full">
          <div className="h-[1px] bg-[#e8ca9b] md:w-[15%] -md:w-[25%]"></div>
          <Heart className="mx-2 text-[#e8ca9b] h-5 w-5" />
          <div className="h-[1px] bg-[#e8ca9b] md:w-[15%] -md:w-[25%]"></div>
        </div>
        <p className="text-center">{t('gifts.p1')}</p>
      </div>
      <div className="container flex flex-col justify-center items-center h-full gap-8">
        <div className="flex flex-col gap-6 p-6 rounded-xl bg-secondary shadow-around-sm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            <div className="relative">
              <div className="p-6 rounded-full bg-[#fcf9f5] border border-[#e8ca9b]">
                <GiftIcon className="h-10 w-10 text-[#e8ca9b]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-0.5 bg-[#e8ca9b] rotate-45 rounded-full"></div>
              </div>
            </div>

            <ArrowRightIcon className="h-8 w-8 text-[#e8ca9b] hidden md:block" />
            <ArrowRightIcon className="h-8 w-8 text-[#e8ca9b] rotate-90 md:hidden" />

            <div className="p-6 rounded-full bg-[#fcf9f5] border border-[#e8ca9b]">
              <BanknoteIcon className="h-10 w-10 text-[#e8ca9b]" />
            </div>
          </div>

          <div className="flex flex-col gap-6 max-w-xl">
            <p>{t('gifts.p2')}</p>
            <Button asChild className="w-full font-medium">
              <a
                href="https://www.millemercismariage.com/gabrielaandfrancis"
                referrerPolicy="no-referrer"
                target="_blank"
                className="flex gap-2 w-[150px]"
                rel="noopener"
              >
                {t('gifts.link')}
                <ExternalLink />
              </a>
            </Button>
          </div>
        </div>
        <p>{t('gifts.p4')}</p>
      </div>
    </section>
  );
};
