import { useTranslation } from "@/translations/useTranslation";
import envelopeUrl from "@/assets/envelope.png";
import presentUrl from "@/assets/present.png";
import rightArrowUrl from "@/assets/right-arrow.png";

export const Gifts = () => {
  const { t } = useTranslation();

  return (
    <section
      id="gifts"
      className="flex flex-col bg-[#f3f3f3] py-28 scroll-m-[60px] gap-12">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-4xl font-medium font-PlayfairDisplay mb-2">
          {t("gifts.title")}
        </h3>
        <div className="border-[#e8ca9b] border-b-2 md:w-[18%] -md:w-[50%]" />
        <p className="text-center">{t("gifts.p1")}</p>
      </div>
      <div className="container flex -md:flex-col justify-center items-center h-full -md:gap-8 md:gap-24">
        <div className="flex w-fit justify-center items-center gap-8">
          <img src={presentUrl} className="w-[100px]" />
          <img src={rightArrowUrl} className="w-[50px] h-[70%]" />
          <img src={envelopeUrl} className="w-[100px]" />
        </div>
        <div className="flex flex-col gap-6 max-w-xl">
          <p>{t("gifts.p2")}</p>
          <p>
            {t("gifts.p3")} {t("gifts.p4")}
          </p>
        </div>
      </div>
    </section>
  );
};
