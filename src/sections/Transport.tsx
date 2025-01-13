import { useTranslation } from "@/translations/useTranslation";
import danceUrl from "@/assets/schedule-icons/dance.png";
import ringsUrl from "@/assets/schedule-icons/rings.png";
import { TriangleAlert } from "lucide-react";

export const Transport = () => {
  const { t } = useTranslation();

  return (
    <section
      id="transport"
      className="section container flex flex-col items-center text-center py-10 min-h-viewport-1/2 md:min-h-viewport gap-8">
      <div className="flex flex-col w-full items-center gap-4">
        <h3 className="text-4xl font-medium font-PlayfairDisplay mb-2">
          {t("transport.title")}
        </h3>
        <div className="border-[#e8ca9b] border-b-2 md:w-[30%] -md:w-[50%]" />
      </div>
      <div className="flex -md:flex-col w-full justify-center items-center gap-8">
        <div className="flex flex-col items-center w-full max-w-[500px] gap-6 shadow-around p-6 rounded-md bg-secondary">
          <img className="w-24 h-24" src={ringsUrl} />
          <h4 className="text-2xl font-alice">{t("transport.ceremony")}</h4>
          <p>
            <strong>Eglise saint Etienne de Brie-Comte-Robert</strong>
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
        <div className="flex flex-col w-full items-center max-w-[500px] gap-6 shadow-around p-6 rounded-md bg-secondary">
          <img className="w-24 h-24" src={danceUrl} />
          <h4 className="text-2xl font-alice">{t("transport.wedding")}</h4>
          <p>
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
      <div className="flex -md:flex-col items-center gap-4 p-6 -md:max-w-[500px] max-w-[1032px] text-sky-800 rounded-xl bg-sky-200">
        <TriangleAlert className="-md:w-[50px] -md:h-[50px] md:w-[1.25em] md:h-[1.25em] md:min-w-[20px] md:min-h-[20px]" />
        {t("transport.info1")}
      </div>
      <div className="flex -md:flex-col items-center gap-4 p-6 -md:max-w-[500px] max-w-[1032px] text-sky-800 rounded-xl bg-sky-200">
        <TriangleAlert className="-md:w-[50px] -md:h-[50px] md:w-[1.25em] md:h-[1.25em] md:min-w-[20px] md:min-h-[20px]" />
        {t("transport.info2")}
      </div>
    </section>
  );
};
