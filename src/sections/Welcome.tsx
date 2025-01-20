import { cn } from "@/lib/utils";
import { useTranslation } from "@/translations/useTranslation";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import churchUrl from "@/assets/church.png";
import castleUrl from "@/assets/castle.png";

const weddingDate = DateTime.fromObject({
  year: 2025,
  month: 8,
  day: 14,
  hour: 14,
});
const dateDiff = weddingDate.diffNow(["days", "hours", "minutes", "seconds"]);

export const Welcome = () => {
  const { t } = useTranslation();
  const [diff, setDiff] = useState(dateDiff);

  useEffect(() => {
    const interval = setInterval(() => {
      setDiff(weddingDate.diffNow(["days", "hours", "minutes", "seconds"]));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const countDown = (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-1/4 max-w-[250px] gap-10 text-xl">
        <span className="font-alice">{t("common.days")}</span>
        <span className="text-2xl">{Math.max(0, diff.days)}</span>
      </div>
      <div className="flex flex-col w-1/4 max-w-[250px] gap-10 text-xl">
        <span className="font-alice">{t("common.hours")}</span>
        <span className="text-2xl">{Math.max(0, diff.hours)}</span>
      </div>
      <div className="flex flex-col w-1/4 max-w-[250px] gap-10 text-xl">
        <span className="font-alice">{t("common.minutes")}</span>
        <span className="text-2xl">{Math.max(0, diff.minutes)}</span>
      </div>
      <div className="flex flex-col w-1/4 max-w-[250px] gap-10 text-xl">
        <span className="font-alice">{t("common.seconds")}</span>
        <span className="text-2xl">
          {Math.max(0, Math.round(diff.seconds))}
        </span>
      </div>
    </div>
  );

  return (
    <>
      <section
        className={cn(
          "section relative flex items-center bg-background-2-flowers bg-cover bg-no-repeat md:bg-center"
        )}>
          <div className='container flex flex-col items-center justify-center gap-[200px] text-center'>

        <div className="flex flex-col items-center gap-20">
          <h2 className="font-calligrapher text-7xl md:text-8xl font-medium">
            {`Gabriela ${t("common.and")} Francis`}
          </h2>
          <h3 className="text-2xl font-alice">{t("common.date")}</h3>
        </div>
        {countDown}
          </div>
      </section>

      <section className="flex flex-col bg-[#f3f3f3] py-14 gap-12">
      <div className='flex flex-col items-center gap-4'>
        <h3 className='text-4xl font-medium font-PlayfairDisplay mb-2'>{t("welcome.title")}</h3>
        <div className="border-[#e8ca9b] border-b-2 md:w-[30%] -md:w-[50%]" />
      </div>
        <div className="container grid grid-cols-2 items-center -md:grid-cols-1 -md:gap-8 md:gap-20">
          <div className="flex flex-col gap-6 shadow-around p-8 rounded-xl bg-white h-fit">
            <p>{t("welcome.heading")}</p>
            <p>{t("welcome.p1")}</p>
            {/* <p>{t("welcome.hereYouWillFind")}</p>
            <ol>
              <li dangerouslySetInnerHTML={{ __html: t("welcome.bullet1") }} />
              <li dangerouslySetInnerHTML={{ __html: t("welcome.bullet2") }} />
              <li dangerouslySetInnerHTML={{ __html: t("welcome.bullet3") }} />
              <li dangerouslySetInnerHTML={{ __html: t("welcome.bullet4") }} />
              <li dangerouslySetInnerHTML={{ __html: t("welcome.bullet5") }} />
            </ol> */}
            <p>{t("welcome.p2")}</p>
            <p>{t("welcome.greeting")}</p>
            <p>Gabriela & Francis</p>
          </div>
          <div className="relative grid grid-cols-12">
            <img
              src={churchUrl}
              className="aspect-square w-[350px] row-start-1 col-start-1 col-span-8 rounded-lg shadow-around"
            />
            <img
              src={castleUrl}
              className="aspect-[3/2] w-[400px] mt-[70%] row-start-1 col-start-6 col-span-7 rounded-lg shadow-around"
            />
          </div>
        </div>
      </section>
    </>
  );
};
