import { Button } from "@/components/ui/button";
import { useTranslation } from "@/translations/useTranslation";
import { ExternalLink, TriangleAlert } from "lucide-react";
import hotelUrl from "@/assets/hotel.png";
import routeUrl from "@/assets/schedule-icons/route.png";

export const Accommodation = () => {
  const { t } = useTranslation();

  return (
    <section
      id="accommodation"
      className="flex flex-col justify-around items-center py-28">
      <div className="container flex flex-col items-center w-full gap-12">
        <div className="flex flex-col w-full items-center gap-4">
          <h3 className="text-4xl font-medium font-PlayfairDisplay mb-2">
            {t("nav.accommodation")}
          </h3>
          <div className="border-[#e8ca9b] border-b-2 md:w-[30%] -md:w-[50%]" />
        </div>

        <div className="flex flex-col gap-8 max-w-[1032px]">
          <div className="shadow-around p-8 rounded-xl bg-secondary h-fit">
            <div className="flex flex-col gap-4">
              <p>{t("common.dearGuests")},</p>
              <p dangerouslySetInnerHTML={{ __html: t("accommodation.p1") }} />
              <p dangerouslySetInnerHTML={{ __html: t("accommodation.p2") }} />
            </div>
          </div>

          <div className="flex -md:flex-col items-center gap-8 justify-center">
            <div className="flex flex-col justify-center gap-6 shadow-around p-6 rounded-xl bg-secondary w-full max-w-[500px]">
              <div className="flex flex-col w-full h-full items-center justify-center gap-6 ">
                <img className="w-24 h-24" src={hotelUrl} />
                <h4 className="text-2xl font-alice text-center">
                  <strong>Hôtel Novotel Marne-la-Vallée Collégien</strong>
                </h4>
                <p className="text-center">
                  Allée des portes de la Foret
                  <br />
                  77090 Collégien
                </p>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <img className="w-12 h-12 justify-self-center" src={routeUrl} />
                <span>
                  <strong>16.1 km</strong>&nbsp;
                <span dangerouslySetInnerHTML={{ __html: t("accommodation.fromTheCastle") }} />
                  </span>
              </div>
              <div className='invisible'>nothing important</div>
              <div className="flex -md:flex-col items-center gap-6 justify-evenly">
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
              <div className="w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2626.446771733545!2d2.6762127!3d48.8306162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e605203860e737%3A0x8df1d29a3199ca7c!2sNovotel%20Marne-la-Vall%C3%A9e%20Coll%C3%A9gien!5e0!3m2!1sen!2spl!4v1737405300692!5m2!1sen!2spl"
                  width="600"
                  height="350"
                  className="border-none w-full min-h-[350px]"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6 shadow-around p-6 rounded-xl bg-secondary w-full max-w-[500px]">
              <div className="flex flex-col w-full h-full items-center justify-center gap-6 ">
                <img className="w-24 h-24" src={hotelUrl} />
                <h4 className="text-2xl font-alice">
                  <strong>Hôtel Abbaye du Golf</strong>
                </h4>
                <p className="text-center">
                  Frm des Hyverneaux
                  <br />
                  77150 Lésigny
                </p>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <img className="w-12 h-12 justify-self-center" src={routeUrl} />
                <span>
                  <strong>2.2 km</strong>&nbsp;
                  <span dangerouslySetInnerHTML={{ __html: t("accommodation.fromTheCastle") }} />
                  </span>
              </div>
              <p className='m-0 text-center' dangerouslySetInnerHTML={{ __html: t("accommodation.discount") }} />
              <div className="flex gap-6 justify-center">
                <Button asChild>
                  <a
                    href="https://www.hotelabbayedugolf.com"
                    referrerPolicy="no-referrer"
                    target="_blank"
                    className="flex gap-2 w-[150px]">
                    Link
                    <ExternalLink />
                  </a>
                </Button>
              </div>
              <div className="w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.6163097429026!2d2.6078544771369696!3d48.73192277131528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e608898f371c5d%3A0x552056a657aa816b!2sEspaces%20Vocation%20Abbaye%20du%20Golf!5e0!3m2!1sen!2spl!4v1739818096550!5m2!1sen!2spl"
                  width="600"
                  height="350"
                  className="border-none w-full min-h-[350px]"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="flex -md:flex-col -md:text-center items-center gap-4 p-6 -md:max-w-[500px] max-w-[1032px] text-sky-800 rounded-xl bg-sky-200">
          <TriangleAlert className="-md:w-[50px] -md:h-[50px] md:w-[1.25em] md:h-[1.25em] md:min-w-[20px] md:min-h-[20px]" />
          {t("accommodation.info")}
        </div>
      </div>
    </section>
  );
};
