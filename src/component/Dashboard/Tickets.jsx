import { useState } from "react";
import WidgetHeader from "./WidgetHeader";
import { TicketsData } from "./Data";

export default function Tickets() {
  const [data, setData] = useState(TicketsData);
  return (
    <div className={"widget"}>
      <WidgetHeader
        title={"Tickets Statistics"}
        content={"Everything About Support Tickets"}
      />
      <div className={"grid sm:grid-cols-2 gap-5 mt-5"}>
        {data &&
          data.map(({ icon, stat, phase, color }, idx) => {
            return (
              <div
                className={
                  "flex flex-col text-center border border-gray-300 rounded-lg py-5"
                }
                key={idx}
              >
                <i className={`${icon} text-2xl`} style={{ color: color }}></i>
                <strong className={"text-2xl my-1"}>{stat}</strong>
                <h3>{phase}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}
