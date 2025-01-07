import { useTranslation } from '@/translations/useTranslation';

// TODO: find icons
const events = ['weddingCeremony', 'transferToWeddingVenue', 'groupPhotos', 'welcomeCocktail', 'dinner', 'cakeCutting', 'firstDance'] as const;

export const Timeline = () => {
  const { t } = useTranslation();

  const eventList = events.map((event, index) => (
    <li key={index}>
      <h4>{t(`timeline.${event}.title`)}</h4>
      <p>{t(`timeline.${event}.time`)}</p>
    </li>
  ));

  return (
    <section className="container flex flex-col justify-around items-center text-center h-viewport-1/2 md:h-viewport">
      <ul>
        {eventList}
      </ul>
    </section>
  );
};
