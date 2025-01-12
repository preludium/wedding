import { useTranslation } from "@/translations/useTranslation";
import giftCashUrl from "@/assets/gift-cash.png";

export const Gifts = () => {
  const { t } = useTranslation();

  return (
    <section id="gifts" className="bg-slate-100 py-6 scroll-m-[60px]">
      <div className="container flex -md:flex-col justify-around items-center h-full gap-8">
        <img
          src={giftCashUrl}
          className="min-w-[200px] max-w-[500px] w-1/5"
        />
        <div className="flex flex-col gap-6 max-w-xl">
          <p>
            {t("gifts.p1")}
            {t("gifts.p2")}
          </p>
          <p>
            {t("gifts.p3")}
            {t("gifts.p4")}
          </p>
        </div>
      </div>
    </section>
  );
};
