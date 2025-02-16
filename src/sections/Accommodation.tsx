import { Button } from "@/components/ui/button";
import { useTranslation } from "@/translations/useTranslation";
import { ExternalLink, TriangleAlert } from "lucide-react";
import hotelUrl from "@/assets/hotel.png";

export const Accommodation = () => {
  const { t } = useTranslation();

  return (
    <section
      id="accommodation"
      className="flex flex-col justify-around items-center bg-[#f3f3f3] py-28">
      <div className="container flex flex-col items-center w-full gap-12">
        <div className="flex flex-col w-full items-center gap-4">
          <h3 className="text-4xl font-medium font-PlayfairDisplay mb-2">
            {t("nav.accommodation")}
          </h3>
          <div className="border-[#e8ca9b] border-b-2 md:w-[30%] -md:w-[50%]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="shadow-around p-8 rounded-xl bg-secondary h-fit">
            <div className="flex flex-col gap-4">
              <p>{t("common.dearGuests")},</p>
              <p dangerouslySetInnerHTML={{ __html: t("accommodation.p1") }} />
              <p dangerouslySetInnerHTML={{ __html: t("accommodation.p2") }} />
              <p dangerouslySetInnerHTML={{ __html: t("accommodation.p3") }} />
              <p dangerouslySetInnerHTML={{ __html: t("accommodation.p4") }} />
              <div className="flex gap-6 justify-evenly">
                <Button asChild>
                  <a
                    href="https://www.booking.com/Share-32tzk7"
                    referrerPolicy="no-referrer"
                    target="_blank"
                    className="flex gap-2 w-[150px]">
                    Booking
                    <ExternalLink />
                  </a>
                </Button>
                <Button asChild>
                  <a
                    href="https://all.accor.com/hotel/0385/index.fr.shtml"
                    referrerPolicy="no-referrer"
                    target="_blank"
                    className="flex gap-2 w-[150px]">
                    Accor
                    <ExternalLink />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 items-center gap-6 shadow-around p-6 rounded-xl bg-secondary">
            <div className="flex flex-col w-full h-full items-center justify-center max-w-[500px] gap-6 ">
              <img className="w-24 h-24" src={hotelUrl} />
              <h4 className="text-2xl font-alice">{t("localization.hotel")}</h4>
              <p className="text-center">
                <strong>Novotel Marne-la-Vallée Collégien</strong>
                <br />
                Allée des portes de la Foret
                <br />
                77090 Collégien
              </p>
            </div>
            <div className="w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2626.446771733545!2d2.6762127!3d48.8306162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e605203860e737%3A0x8df1d29a3199ca7c!2sNovotel%20Marne-la-Vall%C3%A9e%20Coll%C3%A9gien!5e0!3m2!1sen!2spl!4v1737405300692!5m2!1sen!2spl"
                width="600"
                height="350"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div className="flex -md:flex-col items-center gap-4 p-6 -md:max-w-[500px] max-w-[1032px] text-sky-800 rounded-xl bg-sky-200">
          <TriangleAlert className="-md:w-[50px] -md:h-[50px] md:w-[1.25em] md:h-[1.25em] md:min-w-[20px] md:min-h-[20px]" />
          {t("accommodation.info")}
        </div>
      </div>
    </section>
  );
};
