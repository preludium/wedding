import { cn } from "@/lib/utils";
import { useTranslation } from "@/translations/useTranslation";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import photo from "@/assets/gabi_francis.jpg";
import { Heart } from "lucide-react";

const weddingDate = DateTime.fromObject({
  year: 2025,
  month: 8,
  day: 14,
  hour: 14,
});
const dateDiff = weddingDate.diffNow(["days", "hours", "minutes", "seconds"]);

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/70 backdrop-blur-sm border border-[#e8ca9b] rounded-lg shadow-md w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
        <span className="text-2xl md:text-3xl font-medium text-slate-800">
          {Math.round(value)}
        </span>
      </div>
      <span className="mt-2 font-alice text-sm md:text-base text-slate-700">
        {label}
      </span>
    </div>
  );
}

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
        <CountdownItem
          value={Math.max(0, diff.days)}
          label={t("common.days")}
        />
      </div>
      <div className="flex flex-col w-1/4 max-w-[250px] gap-10 text-xl">
        <CountdownItem
          value={Math.max(0, diff.hours)}
          label={t("common.hours")}
        />
      </div>
      <div className="flex flex-col w-1/4 max-w-[250px] gap-10 text-xl">
        <CountdownItem
          value={Math.max(0, diff.minutes)}
          label={t("common.minutes")}
        />
      </div>
      <div className="flex flex-col w-1/4 max-w-[250px] gap-10 text-xl">
        <CountdownItem
          value={Math.max(0, diff.seconds)}
          label={t("common.seconds")}
        />
      </div>
    </div>
  );

  return (
    <>
      <section
        className={cn(
          "section relative flex items-center bg-background-3-flowers bg-cover bg-no-repeat md:bg-center"
        )}>
        <div className="container flex flex-col items-center justify-center gap-[200px] text-center">
          <div className="flex flex-col items-center gap-6">
            <h1 className="font-dancingScript text-6xl md:text-8xl -md:hidden">
              {`Gabriela ${t("common.and")} Francis`}
            </h1>
            <h1 className="font-dancingScript text-6xl md:text-8xl md:hidden">
              Gabriela<br/>
              {t("common.and")}<br/>
              Francis
            </h1>
            <div className="-md:w-[40%] md:w-[15%] h-1 bg-[#e8ca9b]"></div>
            <h3 className="text-2xl">{t("common.date")}</h3>
          </div>
          {countDown}
        </div>
      </section>

      <section className="flex flex-col bg-[#fcfcfc] py-28 gap-12">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-4xl font-medium font-PlayfairDisplay mb-2">
            {t("welcome.title")}
          </h3>
          <div className="flex items-center justify-center w-full">
            <div className="h-[1px] bg-[#e8ca9b] md:w-[15%] -md:w-[25%]"></div>
            <Heart className="mx-2 text-[#e8ca9b] h-5 w-5" />
            <div className="h-[1px] bg-[#e8ca9b] md:w-[15%] -md:w-[25%]"></div>
          </div>
        </div>
        <div className="container grid grid-cols-2 items-center -md:grid-cols-1 gap-6">
          <div className="flex flex-col gap-6 shadow-around-sm p-8 rounded-xl bg-secondary h-fit">
            <p>{t("welcome.heading")}</p>
            <p>{t("welcome.p1")}</p>
            <p>{t("welcome.p2")}</p>
            <p>{t("welcome.greeting")}</p>
            <p>Gabriela & Francis</p>
          </div>
          <div className='flex'>
            <img src={photo} className="aspect-[4/3] max-h-[376px] rounded-lg shadow-around-sm"
            />
            </div>
        </div>
      </section>
    </>
  );
};
