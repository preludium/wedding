import { cn } from "@/lib/utils";
import { useTranslation } from "@/translations/useTranslation";

export const Schedule = () => {
  const { t } = useTranslation();

  return (
    <section
      id="schedule"
      className="section container flex flex-col justify-around items-center text-center h-viewport-1/2 md:h-viewport">
      <ul className="grid grid-rows-[1fr,1px,1fr] grid-cols-7 items-center gap-6">
        <li className={cn(`col-start-1 row-start-1`)}>
          <h4>{t(`schedule.weddingCeremony.title`)}</h4>
          <p>{t(`schedule.weddingCeremony.time`)}</p>
        </li>

        <li className={cn(`col-start-2 row-start-3`)}>
          <h4>{t(`schedule.transferToWeddingVenue.title`)}</h4>
          <p>{t(`schedule.transferToWeddingVenue.time`)}</p>
        </li>

        <li className={cn(`col-start-3 row-start-1`)}>
          <h4>{t(`schedule.groupPhotos.title`)}</h4>
          <p>{t(`schedule.groupPhotos.time`)}</p>
        </li>

        <li className={cn(`col-start-4 row-start-3`)}>
          <h4>{t(`schedule.welcomeCocktail.title`)}</h4>
          <p>{t(`schedule.welcomeCocktail.time`)}</p>
        </li>

        <li className={cn(`col-start-5 row-start-1`)}>
          <h4>{t(`schedule.dinner.title`)}</h4>
          <p>{t(`schedule.dinner.time`)}</p>
        </li>

        <li className={cn(`col-start-6 row-start-3`)}>
          <h4>{t(`schedule.cakeCutting.title`)}</h4>
          <p>{t(`schedule.cakeCutting.time`)}</p>
        </li>

        <li className={cn(`col-start-7 row-start-1`)}>
          <h4>{t(`schedule.firstDance.title`)}</h4>
          <p>{t(`schedule.firstDance.time`)}</p>
        </li>

        <div className='col-span-7 row-start-2 border-b border-black'/>
      </ul>
    </section>
  );
};
