import { cn } from "@/lib/utils";
import { useTranslation } from "@/translations/useTranslation";
import routeUrl from "@/assets/schedule-icons/route.png";
import ringsUrl from "@/assets/schedule-icons/rings.png";
import cameraUrl from "@/assets/schedule-icons/camera.png";
import champagneUrl from "@/assets/schedule-icons/champagne.png";
import dinnerTableUrl from "@/assets/schedule-icons/dinner-table.png";
import weddingCakeUrl from "@/assets/schedule-icons/wedding-cake.png";
import danceUrl from "@/assets/schedule-icons/dance.png";
import busUrl from "@/assets/schedule-icons/bus.png";

export const Schedule = () => {
  const { t } = useTranslation();

  return (
    <section
      id="schedule"
      className="container flex flex-col justify-around items-center text-center h-full py-28 gap-12">
      <div className="flex flex-col w-full items-center gap-4">
        <h3 className="text-4xl font-medium font-PlayfairDisplay mb-2">
          {t("schedule.title")}
        </h3>
        <div className="border-[#e8ca9b] border-b-2 md:w-[30%] -md:w-[50%]" />
      </div>
      <ul className="grid -md:grid-rows-9 md:grid-rows-[1fr,1px,1fr] -md:grid-cols-[1fr,1px,1fr] md:grid-cols-9 items-center gap-x-8 gap-y-6">
        <li
          className={cn(
            `-md:col-start-1 md:col-start-1 -md:row-start-1 md:row-start-1`
          )}>
          <h4 className="font-medium text-sm">
            {t(`schedule.weddingCeremony.title`)}
          </h4>
          <p>{t(`schedule.weddingCeremony.time`)}</p>
        </li>
        <img
          className="-md:col-start-3 md:col-start-1 -md:row-start-1 md:row-start-3 w-14 h-14 justify-self-center"
          src={ringsUrl}
        />

        <li
          className={cn(
            `-md:col-start-3 md:col-start-2 -md:row-start-2 md:row-start-3`
          )}>
          <h4 className="font-medium text-sm">
            {t(`schedule.transferToWeddingVenue.title`)}
          </h4>
          <p>{t(`schedule.transferToWeddingVenue.time`)}</p>
        </li>
        <img
          className="-md:col-start-1 md:col-start-2 -md:row-start-2 md:row-start-1 w-14 h-14 justify-self-center"
          src={routeUrl}
        />

        <li
          className={cn(
            `-md:col-start-1 md:col-start-3 -md:row-start-3 md:row-start-1`
          )}>
          <h4 className="font-medium text-sm">
            {t(`schedule.groupPhotos.title`)}
          </h4>
          <p>{t(`schedule.groupPhotos.time`)}</p>
        </li>
        <img
          className="-md:col-start-3 md:col-start-3 -md:row-start-3 md:row-start-3 w-14 h-14 justify-self-center"
          src={cameraUrl}
        />

        <li
          className={cn(
            `-md:col-start-3 md:col-start-4 -md:row-start-4 md:row-start-3`
          )}>
          <h4 className="font-medium text-sm">
            {t(`schedule.welcomeCocktail.title`)}
          </h4>
          <p>{t(`schedule.welcomeCocktail.time`)}</p>
        </li>
        <img
          className="-md:col-start-1 md:col-start-4 -md:row-start-4 md:row-start-1 w-14 h-14 justify-self-center"
          src={champagneUrl}
        />

        <li
          className={cn(
            `-md:col-start-1 md:col-start-5 -md:row-start-5 md:row-start-1`
          )}>
          <h4 className="font-medium text-sm">{t(`schedule.dinner.title`)}</h4>
          <p>{t(`schedule.dinner.time`)}</p>
        </li>
        <img
          className="-md:col-start-3 md:col-start-5 -md:row-start-5 md:row-start-3 w-14 h-14 justify-self-center"
          src={dinnerTableUrl}
        />

        <li
          className={cn(
            `-md:col-start-3 md:col-start-6 -md:row-start-6 md:row-start-3`
          )}>
          <h4 className="font-medium text-sm">
            {t(`schedule.cakeCutting.title`)}
          </h4>
          <p>{t(`schedule.cakeCutting.time`)}</p>
        </li>
        <img
          className="-md:col-start-1 md:col-start-6 -md:row-start-6 md:row-start-1 w-14 h-14 justify-self-center"
          src={weddingCakeUrl}
        />

        <li
          className={cn(
            `-md:col-start-1 md:col-start-7 -md:row-start-7 md:row-start-1`
          )}>
          <h4 className="font-medium text-sm">
            {t(`schedule.firstDance.title`)}
          </h4>
          <p>{t(`schedule.firstDance.time`)}</p>
        </li>
        <img
          className="-md:col-start-3 md:col-start-7 -md:row-start-7 md:row-start-3 w-14 h-14 justify-self-center"
          src={danceUrl}
        />

        <li
          className={cn(
            `-md:col-start-3 md:col-start-8 -md:row-start-8 md:row-start-3`
          )}>
          <h4 className="font-medium text-sm">
            {t(`schedule.firstBus.title`)}
          </h4>
          <p>{t(`schedule.firstBus.time`)}</p>
        </li>
        <img
          className="-md:col-start-1 md:col-start-8 -md:row-start-8 md:row-start-1 w-14 h-14 justify-self-center"
          src={busUrl}
        />

        <li
          className={cn(
            `-md:col-start-1 md:col-start-9 -md:row-start-9 md:row-start-1`
          )}>
          <h4 className="font-medium text-sm">
            {t(`schedule.secondBus.title`)}
          </h4>
          <p>{t(`schedule.secondBus.time`)}</p>
        </li>
        <img
          className="-md:col-start-3 md:col-start-9 -md:row-start-9 md:row-start-3 w-14 h-14 justify-self-center"
          src={busUrl}
        />

        <div className="-md:col-start-2 md:col-span-9 -md:row-span-9 md:row-start-2 -md:border-l -md:h-full md:border-b border-black" />
      </ul>
    </section>
  );
};
