import { useTranslation } from "@/translations/useTranslation";

export const Photos = () => {
  const { t } = useTranslation();

  return (
    <section
      id="photos"
      className="section container flex flex-col justify-center gap-10 h-viewport-1/2 md:h-viewport">
      <p className="text-lg">{t("photos.intro")}</p>
      <div className='flex flex-col gap-4'>
        <p className="text-lg font-medium">{t("photos.howItWorks")}</p>
        <ol className="flex flex-col gap-3 [&>li]:text-left">
          <li className="text-lg">{t("photos.step1")}</li>
          <li className="text-lg">{t("photos.step2")}</li>
          <li className="text-lg">{t("photos.step3")}</li>
          <li className="text-lg">{t("photos.step4")}</li>
        </ol>
      </div>
      <p className="text-lg">{t("photos.conclusion")}</p>
      <p className="text-lg">{t("photos.outro")}</p>
    </section>
  );
};
