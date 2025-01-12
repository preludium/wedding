import { useTranslation } from "@/translations/useTranslation";
import envelopeUrl from "@/assets/envelope.png";
import presentUrl from "@/assets/present.png";
import rightArrowUrl from "@/assets/right-arrow.png";

export const Gifts = () => {
  const { t } = useTranslation();

  return (
    <section id="gifts" className="bg-[#f3f3f3] py-6 scroll-m-[60px]">
      <div className="container flex -md:flex-col justify-around items-center h-full gap-8">
        <div className='flex w-full justify-center items-center gap-8'>
        <img
          src={presentUrl}
          className="w-[100px]"
          />
          <img
          src={rightArrowUrl}
          className="w-[50px] h-[70%]"
          />
        <img
          src={envelopeUrl}
          className="w-[100px]"
          />
          </div>
        <div className="flex flex-col gap-6 max-w-xl">
          <p>
            {t("gifts.p1")}
          </p>
          <p>
            {t("gifts.p2")}
          </p>
          <p>
            {t("gifts.p3")}{' '}
            {t("gifts.p4")}
          </p>
        </div>
      </div>
    </section>
  );
};
