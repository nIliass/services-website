import { useState } from "react";
import { remindersData } from "./Data";
import WidgetHeader from "./WidgetHeader";

export default function Reminders() {
  const [data, setData] = useState(remindersData);
  return (
    <div className="widget">
      <WidgetHeader title={"Reminders"} style={"mb-5"} />
      <ul className="grid gap-4">
        {data &&
          data.map(({ title, time, color }, idx) => {
            return (
              <li className="flex gap-4" key={idx}>
                <div
                  className="relative w-12 h-14 border-r-2 border-r-[color:var(--color)] after:absolute after:top-[50%] after:left-1.5 after:-translate-y-[50%] after:rounded-full after:w-5 after:h-5 after:bg-[var(--color)]"
                  style={{ "--color": color }}
                ></div>
                <div className="flex-grow">
                  <h3 className="font-bold mb-1.5">{title}</h3>
                  <p className="text-sm text-gray-500">{time}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
