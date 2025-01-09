import { cn } from "@/lib/utils";
import { useTranslation } from "@/translations/useTranslation";

export const Schedule = () => {
  const { t } = useTranslation();

  return (
    <section
      id="schedule"
      className="section container flex flex-col justify-around items-center text-center h-viewport-1/2 md:h-viewport">
      <ul className="grid -md:grid-rows-7 md:grid-rows-[1fr,1px,1fr] -md:grid-cols-[1fr,1px,1fr] md:grid-cols-7 items-center gap-x-8 gap-y-6">
        <li className={cn(`-md:col-start-1 md:col-start-1 -md:row-start-1 md:row-start-1`)}>
          <h4 className='font-medium'>{t(`schedule.weddingCeremony.title`)}</h4>
          <p>{t(`schedule.weddingCeremony.time`)}</p>
        </li>
        <img
          className="-md:col-start-3 md:col-start-1 -md:row-start-1 md:row-start-3 w-14 h-14 justify-self-center"
          src="src/assets/schedule-icons/rings.png"
        />

        <li className={cn(`-md:col-start-3 md:col-start-2 -md:row-start-2 md:row-start-3`)}>
          <h4 className='font-medium'>{t(`schedule.transferToWeddingVenue.title`)}</h4>
          <p>{t(`schedule.transferToWeddingVenue.time`)}</p>
        </li>
        <img
          className="-md:col-start-1 md:col-start-2 -md:row-start-2 md:row-start-1 w-14 h-14 justify-self-center"
          src="src/assets/schedule-icons/route.png"
        />

        <li className={cn(`-md:col-start-1 md:col-start-3 -md:row-start-3 md:row-start-1`)}>
          <h4 className='font-medium'>{t(`schedule.groupPhotos.title`)}</h4>
          <p>{t(`schedule.groupPhotos.time`)}</p>
        </li>
        <img
          className="-md:col-start-3 md:col-start-3 -md:row-start-3 md:row-start-3 w-14 h-14 justify-self-center"
          src="src/assets/schedule-icons/camera.png"
        />

        <li className={cn(`-md:col-start-3 md:col-start-4 -md:row-start-4 md:row-start-3`)}>
          <h4 className='font-medium'>{t(`schedule.welcomeCocktail.title`)}</h4>
          <p>{t(`schedule.welcomeCocktail.time`)}</p>
        </li>
        <img
          className="-md:col-start-1 md:col-start-4 -md:row-start-4 md:row-start-1 w-14 h-14 justify-self-center"
          src="src/assets/schedule-icons/champagne.png"
        />

        <li className={cn(`-md:col-start-1 md:col-start-5 -md:row-start-5 md:row-start-1`)}>
          <h4 className='font-medium'>{t(`schedule.dinner.title`)}</h4>
          <p>{t(`schedule.dinner.time`)}</p>
        </li>
        <img
          className="-md:col-start-3 md:col-start-5 -md:row-start-5 md:row-start-3 w-14 h-14 justify-self-center"
          src="src/assets/schedule-icons/dinner-table.png"
        />

        <li className={cn(`-md:col-start-3 md:col-start-6 -md:row-start-6 md:row-start-3`)}>
          <h4 className='font-medium'>{t(`schedule.cakeCutting.title`)}</h4>
          <p>{t(`schedule.cakeCutting.time`)}</p>
        </li>
        <img
          className="-md:col-start-1 md:col-start-6 -md:row-start-6 md:row-start-1 w-14 h-14 justify-self-center"
          src="src/assets/schedule-icons/wedding-cake.png"
        />

        <li className={cn(`-md:col-start-1 md:col-start-7 -md:row-start-7 md:row-start-1`)}>
          <h4 className='font-medium'>{t(`schedule.firstDance.title`)}</h4>
          <p>{t(`schedule.firstDance.time`)}</p>
        </li>
        <img
          className="-md:col-start-3 md:col-start-7 -md:row-start-7 md:row-start-3 w-14 h-14 justify-self-center"
          src="src/assets/schedule-icons/dance.png"
        />

        <div className="-md:col-start-2 md:col-span-7 -md:row-span-7 md:row-start-2 -md:border-l -md:h-full md:border-b border-black" />
      </ul>
    </section>
  );
};
