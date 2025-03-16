import { useTranslation } from "@/translations/useTranslation";
import danceUrl from "@/assets/schedule-icons/dance.png";
import ringsUrl from "@/assets/schedule-icons/rings.png";
import { Heart, TriangleAlert } from "lucide-react";

export const Localization = () => {
  const { t } = useTranslation();

  return (
    <section
      id="localization"
      className="flex flex-col items-center text-center py-28 bg-[#fcfcfc]">
      <div className="container flex flex-col items-center gap-12">
        <div className="flex flex-col w-full items-center gap-4">
          <h3 className="text-4xl font-medium justify-stretch font-PlayfairDisplay mb-2">
            {t("localization.title")}
          </h3>
          <div className="flex items-center justify-center w-full">
            <div className="h-[1px] bg-[#e8ca9b] md:w-[15%] -md:w-[25%]"></div>
            <Heart className="mx-2 text-[#e8ca9b] h-5 w-5" />
            <div className="h-[1px] bg-[#e8ca9b] md:w-[15%] -md:w-[25%]"></div>
          </div>
        </div>
        <div className="flex -md:flex-col w-full justify-center items-center gap-8">
          <div className="flex flex-col items-center w-full max-w-[500px] gap-6 shadow-around-sm p-6 rounded-xl bg-secondary">
            <img className="w-24 h-24" src={ringsUrl} />
            <h4 className="text-2xl font-alice">
              {t("localization.ceremony")}
            </h4>
            <p>
              <strong>Église Saint-Étienne de Brie-Comte-Robert</strong>
              <br />
              31 Rue de la Madeleine,
              <br />
              77170 Brie-Comte-Robert
            </p>
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d292.6291910529328!2d2.6082022924321975!3d48.69021245511646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6081d9dc7dc21%3A0x878596d2e0d6f00!2sSaint%20%C3%89tienne%20Catholic%20Church%20at%20Brie-Comte-Robert!5e0!3m2!1sen!2spl!4v1736696560569!5m2!1sen!2spl"
                width="600"
                height="350"
                style={{ border: 0, width: "100%" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="flex flex-col w-full flex-grow self-stretch items-center max-w-[500px] gap-6 shadow-around-sm p-6 rounded-xl bg-secondary">
            <img className="w-24 h-24" src={danceUrl} />
            <h4 className="text-2xl font-alice">{t("localization.wedding")}</h4>
            <p className="h-full">
              <strong>Château de Lésigny</strong>
              <br />
              Rue de la Croix,
              <br />
              77150 Lésigny
            </p>
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d815.4397540138328!2d2.6144214489530024!3d48.74234829869728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60890cf851ad9%3A0x5c13370c778ceb1e!2zQ2jDonRlYXUgZGUgTMOpc2lnbnk!5e0!3m2!1sen!2spl!4v1736696625709!5m2!1sen!2spl"
                width="600"
                height="350"
                style={{ border: 0, width: "100%" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex -md:flex-col items-center gap-4 p-6 -md:max-w-[500px] max-w-[1032px] text-sky-800 rounded-xl bg-sky-200">
            <TriangleAlert className="-md:w-[50px] -md:h-[50px] md:w-[1.25em] md:h-[1.25em] md:min-w-[20px] md:min-h-[20px]" />
            {t("localization.info")}
          </div>
        </div>
      </div>
    </section>
  );
};
