import { Button } from "@/components/ui/button";
import { useTranslation } from "@/translations/useTranslation";
import { ExternalLink } from "lucide-react";

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

        <div className="md:max-w-[70%] shadow-around p-8 rounded-xl bg-white h-fit">
          <div className="flex flex-col gap-4">
            <p>{t("common.dearGuests")},</p>
            <p dangerouslySetInnerHTML={{ __html: t("accommodation.p1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("accommodation.p2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("accommodation.p3") }} />
            <p dangerouslySetInnerHTML={{ __html: t("accommodation.p4") }} />
            <div className="flex justify-evenly">
              <Button asChild>
                <a
                  href="https://www.booking.com/Share-32tzk7"
                  referrerPolicy="no-referrer"
                  target="_blank"
                  className="flex gap-2 w-[150px]">
                  <ExternalLink />
                  Booking
                </a>
              </Button>
              <Button asChild>
                <a
                  href="https://all.accor.com/hotel/0385/index.fr.shtml"
                  referrerPolicy="no-referrer"
                  target="_blank"
                  className="flex gap-2 w-[150px]">
                  <ExternalLink />
                  All
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
