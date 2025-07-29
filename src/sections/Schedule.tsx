import { Heart } from 'lucide-react';
import burgerUrl from '@/assets/schedule-icons/burger.png';
import busUrl from '@/assets/schedule-icons/bus.png';
import cameraUrl from '@/assets/schedule-icons/camera.png';
import champagneUrl from '@/assets/schedule-icons/champagne.png';
import danceUrl from '@/assets/schedule-icons/dance.png';
import dinnerTableUrl from '@/assets/schedule-icons/dinner-table.png';
import ringsUrl from '@/assets/schedule-icons/rings.png';
import routeUrl from '@/assets/schedule-icons/route.png';
import weddingCakeUrl from '@/assets/schedule-icons/wedding-cake.png';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/translations/useTranslation';

export const Schedule = () => {
  const { t } = useTranslation();

  return (
    <section
      id="schedule"
      className="container flex flex-col justify-around items-center text-center h-full py-28 gap-12"
    >
      <div className="flex flex-col w-full items-center gap-4">
        <h3 className="text-4xl font-medium font-PlayfairDisplay mb-2">{t('schedule.title')}</h3>
        <div className="flex items-center justify-center w-full">
          <div className="h-[1px] bg-[#e8ca9b] md:w-[15%] -md:w-[25%]"></div>
          <Heart className="mx-2 text-[#e8ca9b] h-5 w-5" />
          <div className="h-[1px] bg-[#e8ca9b] md:w-[15%] -md:w-[25%]"></div>
        </div>
      </div>
      <ul className="grid -md:grid-rows-9 md:grid-rows-[1fr,1px,1fr] -md:grid-cols-[1fr,1px,1fr] md:grid-cols-10 items-center gap-x-8 gap-y-6">
        <li className={cn(`-md:col-start-1 md:col-start-1 -md:row-start-1 md:row-start-1`)}>
          <h4 className="font-medium text-sm">{t(`schedule.weddingCeremony.title`)}</h4>
          <p>{t(`schedule.weddingCeremony.time`)}</p>
        </li>
        <img
          className="-md:col-start-3 md:col-start-1 -md:row-start-1 md:row-start-3 w-14 h-14 justify-self-center"
          src={ringsUrl}
          alt="Wedding rings icon"
        />

        <li className={cn(`-md:col-start-3 md:col-start-2 -md:row-start-2 md:row-start-3`)}>
          <h4 className="font-medium text-sm">{t(`schedule.transferToWeddingVenue.title`)}</h4>
          <p>{t(`schedule.transferToWeddingVenue.time`)}</p>
        </li>
        <img
          className="-md:col-start-1 md:col-start-2 -md:row-start-2 md:row-start-1 w-14 h-14 justify-self-center"
          src={routeUrl}
          alt="Route/transportation icon"
        />

        <li className={cn(`-md:col-start-1 md:col-start-3 -md:row-start-3 md:row-start-1`)}>
          <h4 className="font-medium text-sm">{t(`schedule.groupPhotos.title`)}</h4>
          <p>{t(`schedule.groupPhotos.time`)}</p>
        </li>
        <img
          className="-md:col-start-3 md:col-start-3 -md:row-start-3 md:row-start-3 w-14 h-14 justify-self-center"
          src={cameraUrl}
          alt="Camera icon for group photos"
        />

        <li className={cn(`-md:col-start-3 md:col-start-4 -md:row-start-4 md:row-start-3`)}>
          <h4 className="font-medium text-sm">{t(`schedule.welcomeCocktail.title`)}</h4>
          <p>{t(`schedule.welcomeCocktail.time`)}</p>
        </li>
        <img
          className="-md:col-start-1 md:col-start-4 -md:row-start-4 md:row-start-1 w-14 h-14 justify-self-center"
          src={champagneUrl}
          alt="Champagne glass icon for welcome cocktail"
        />

        <li className={cn(`-md:col-start-1 md:col-start-5 -md:row-start-5 md:row-start-1`)}>
          <h4 className="font-medium text-sm">{t(`schedule.dinner.title`)}</h4>
          <p>{t(`schedule.dinner.time`)}</p>
        </li>
        <img
          className="-md:col-start-3 md:col-start-5 -md:row-start-5 md:row-start-3 w-14 h-14 justify-self-center"
          src={dinnerTableUrl}
          alt="Dinner table icon"
        />

        <li className={cn(`-md:col-start-3 md:col-start-6 -md:row-start-6 md:row-start-3`)}>
          <h4 className="font-medium text-sm">{t(`schedule.cakeCutting.title`)}</h4>
          <p>{t(`schedule.cakeCutting.time`)}</p>
        </li>
        <img
          className="-md:col-start-1 md:col-start-6 -md:row-start-6 md:row-start-1 w-14 h-14 justify-self-center"
          src={weddingCakeUrl}
          alt="Wedding cake icon"
        />

        <li className={cn(`-md:col-start-1 md:col-start-7 -md:row-start-7 md:row-start-1`)}>
          <h4 className="font-medium text-sm">{t(`schedule.firstDance.title`)}</h4>
          <p>{t(`schedule.firstDance.time`)}</p>
        </li>
        <img
          className="-md:col-start-3 md:col-start-7 -md:row-start-7 md:row-start-3 w-14 h-14 justify-self-center"
          src={danceUrl}
          alt="Dancing couple icon for first dance"
        />

        <li className={cn(`-md:col-start-3 md:col-start-8 -md:row-start-8 md:row-start-3`)}>
          <h4 className="font-medium text-sm">{t(`schedule.snack.title`)}</h4>
          <p>{t(`schedule.snack.time`)}</p>
        </li>
        <img
          className="-md:col-start-1 md:col-start-8 -md:row-start-8 md:row-start-1 w-14 h-14 justify-self-center"
          src={burgerUrl}
          alt="Food/snack icon"
        />

        <li className={cn('-md:col-start-1 md:col-start-9 -md:row-start-9 md:row-start-1')}>
          <h4 className="font-medium text-sm">{t(`schedule.firstBus.title`)}</h4>
          <p>{t(`schedule.firstBus.time`)}</p>
        </li>
        <img
          className="-md:col-start-3 md:col-start-9 -md:row-start-9 md:row-start-3 w-14 h-14 justify-self-center"
          src={busUrl}
          alt="Bus icon for first departure"
        />

        <li className={cn(`-md:col-start-3 md:col-start-10 -md:row-start-10 md:row-start-3`)}>
          <h4 className="font-medium text-sm">{t(`schedule.secondBus.title`)}</h4>
          <p>{t(`schedule.secondBus.time`)}</p>
        </li>
        <img
          className="-md:col-start-1 md:col-start-10 -md:row-start-10 md:row-start-1 w-14 h-14 justify-self-center"
          src={busUrl}
          alt="Bus icon for second departure"
        />

        <div className="-md:col-start-2 md:col-span-10 -md:row-span-10 md:row-start-2 -md:border-l -md:h-full md:border-b border-black" />
      </ul>
    </section>
  );
};
