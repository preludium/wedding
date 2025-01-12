import { useTranslation } from "@/translations/useTranslation";
import povUrl from "@/assets/pov.png";
export const Photos = () => {
  const { t } = useTranslation();

  return (
    <section
      id="photos"
      className="section container flex flex-col justify-center gap-10 py-8 min-h-viewport-1/2 md:min-h-viewport">
      <div className="grid grid-cols-2 -md:grid-cols-1 gap-8">
        <div className="flex flex-col gap-10">
          <p>{t("photos.intro")}</p>
          <div className="flex gap-8">
            <div className="flex flex-col gap-4 flex-grow">
              <p className="text-lg font-medium">{t("photos.howItWorks")}</p>
              <ol className="flex flex-col gap-3 [&>li]:text-left">
                <li>1. {t("photos.step1")}</li>
                <li>2. {t("photos.step2")}</li>
                <li>3. {t("photos.step3")}</li>
                <li>4. {t("photos.step4")}</li>
              </ol>
            </div>
          </div>
          <p>{t("photos.conclusion")}</p>
          <p>{t("photos.outro")}</p>
        </div>
        <img src={povUrl} className="max-h-[500px] aspect-square justify-self-center" />
      </div>
    </section>
  );
};
