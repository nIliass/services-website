import { useState } from "react";
import { newData } from "./Data";
import WidgetHeader from "./WidgetHeader";

export default function News() {
  const [data, setData] = useState(newData);
  const formatter = new Intl.RelativeTimeFormat(undefined, {
    numeric: "auto",
    style: "short",
  });

  function getTimeAgo(date) {
    let duration = (new Date(date) - new Date()) / 1000;
    const DIVISIONS = [
      { amount: 60, name: "seconds" },
      { amount: 60, name: "minutes" },
      { amount: 24, name: "hours" },
      { amount: 7, name: "days" },
      { amount: 4.34524, name: "weeks" },
      { amount: 12, name: "months" },
      { amount: Number.POSITIVE_INFINITY, name: "years" },
    ];
    for (let i = 0; i < DIVISIONS.length; i++) {
      const { amount, name } = DIVISIONS[i];
      if (Math.abs(duration) < amount) {
        return formatter.format(Math.round(duration), name);
      }
      duration /= amount;
    }
  }
  return (
    <div className="widget">
      <WidgetHeader title={"Latest News"} style={"mb-5"} />
      <div className={"grid gap-6"}>
        {data &&
          data.map(({ img, title, content, time }, idx) => {
            return (
              <div
                className={`flex flex-col gap-4 items-center sm:flex-row text-center ${
                  idx !== data.length - 1
                    ? "border-b border-b-gray-200 pb-6"
                    : ""
                }`}
                key={idx}
              >
                <img src={img} alt="news image" className={"w-28 rounded-lg"} />
                <div className="flex flex-col flex-grow sm:flex-row items-center justify-between gap-4 sm:text-left">
                  <div>
                    <h3 className={"text-black font-bold text-md mb-1"}>
                      {title}
                    </h3>
                    <p className={"text-gray-500 text-sm"}>{content}</p>
                  </div>
                  <p
                    className={
                      "small__container w-[fit-content] mx-auto sm:mx-0"
                    }
                  >
                    {getTimeAgo(time)}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
