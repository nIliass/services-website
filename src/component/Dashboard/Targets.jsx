import { useState } from "react";
import { targetData } from "./Data";
import WidgetHeader from "./WidgetHeader";

export default function Targets() {
  const [data, setData] = useState(targetData);
  return (
    <div className={"widget"}>
      <WidgetHeader title={"Yearly Targets"} content={"Targets Of The Year"} />
      <div className={"mt-5 space-y-5"}>
        {data &&
          data.map(({ title, stat, progress, icon, color }, idx) => {
            return (
              <div
                className={"flex items-center gap-4"}
                style={{ "--color": color }}
                key={idx}
              >
                <div
                  className={`before:absolute before:w-full before:h-full before:bg-[color:var(--color)] before:opacity-40 before:-z-10 relative flex items-center justify-center w-20 h-20 isolate`}
                >
                  <i className={`${icon} text-[color:var(--color)]`}></i>
                </div>
                <div className={"flex-grow"}>
                  <h3 className={"text-gray-500 text-sm mb-1"}>{title}</h3>
                  <p className={"font-bold mb-3"}>{stat}</p>
                  <div className={`bg-gray-100 w-full h-1`}>
                    <div
                      className={
                        "before:absolute before:right-0 before:translate-x-[50%] before:-translate-y-[9px] before:border-[7px] before:border-transparent before:border-t-[var(--color)] relative bg-[var(--color)] h-full after:content-[attr(data-progress)] after:absolute after:top-0 after:right-0 after:translate-x-[50%] after:-translate-y-8 after:bg-[var(--color)] after:px-1.5 after:py-1 after:rounded-md after:text-xs after:text-white"
                      }
                      style={{ width: progress }}
                      data-progress={progress}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
