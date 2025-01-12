import { cn } from "@/lib/utils";
import { useTranslation } from "@/translations/useTranslation";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

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
      <div className="flex flex-col w-1/4 max-w-[250px] gap-10 text-md">
        <span className="font-alice">{t("common.days")}</span>
        <span className="text-xl">{Math.max(0, diff.days)}</span>
      </div>
      <div className="flex flex-col w-1/4 max-w-[250px] gap-10 text-md">
        <span className="font-alice">{t("common.hours")}</span>
        <span className="text-xl">{Math.max(0, diff.hours)}</span>
      </div>
      <div className="flex flex-col w-1/4 max-w-[250px] gap-10 text-md">
        <span className="font-alice">{t("common.minutes")}</span>
        <span className="text-xl">{Math.max(0, diff.minutes)}</span>
      </div>
      <div className="flex flex-col w-1/4 max-w-[250px] gap-10 text-md">
        <span className="font-alice">{t("common.seconds")}</span>
        <span className="text-xl">{Math.max(0, Math.round(diff.seconds))}</span>
      </div>
    </div>
  );

  return (
    <section
      className={cn(
        "section relative container flex flex-col items-center justify-center gap-[200px] text-center"
      )}>
      <div className="flex flex-col items-center gap-20">
        <h1 className="font-calligrapher text-5xl md:text-8xl">
          {`Gabriela ${t("common.and")} Francis`}
        </h1>
        <h3 className="text-xl">{t("common.date")}</h3>
      </div>
      {countDown}
    </section>
  );
};
