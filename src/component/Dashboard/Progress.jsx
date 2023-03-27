import { useState } from "react";
import { progressData } from "./Data";
import WidgetHeader from "./WidgetHeader";

export default function Progress() {
  const [data, setData] = useState(progressData);
  return (
    <div className="widget">
      <WidgetHeader title={"Last Project Progress"} style={"mb-5"} />
      <ul className="before:absolute before:left-[15px] before:-z-10 before:w-0.5 before:h-full before:bg-blue-600 grid gap-4 relative isolate">
        {data &&
          data.map(({ phase, state }, idx) => {
            return (
              <li className="flex items-center gap-3 bg-white" key={idx}>
                <div
                  className={`w-8 h-8 border-2 border-blue-600 rounded-full ${
                    state === "pending"
                      ? ""
                      : `relative after:absolute after:w-6 after:h-6 after:inset-[50%] after:-translate-x-[50%] after:-translate-y-[50%] after:rounded-full after:bg-blue-600 ${
                          state === "working on it"
                            ? "after:animate-changeColor"
                            : ""
                        }`
                  }`}
                ></div>
                <p className="flex-grow">{phase}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
