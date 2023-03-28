import { useState } from "react";
import { backupData } from "./Data";
import WidgetHeader from "../Dashboard/WidgetHeader";

export default function BackUp() {
  const [data, setData] = useState(Object.values(backupData));
  return (
    <div className="widget">
      <WidgetHeader
        title={"Backup Manager"}
        content={"Control Backup Time And Location"}
      />
      <form action="" className="grid gap-6 mt-5">
        <div className="grid gap-3">
          {data &&
            data[0].map((time, idx) => {
              return (
                <label
                  className="flex items-center gap-3 cursor-pointer"
                  htmlFor={time}
                  key={idx}
                >
                  <input
                    className={"peer hidden"}
                    type="radio"
                    name="time"
                    id={time}
                    value={time}
                  />
                  <div className="grid place-items-center relative w-6 h-6 border-2 p-1 border-gray-500 rounded-full transition peer-checked:border-blue-500 before:absolute before:w-[calc(100%-6px)] before:h-[calc(100%-6px)] before:rounded-full before:bg-blue-500 before:transition before:scale-0 peer-checked:before:scale-100"></div>
                  <h3>{time}</h3>
                </label>
              );
            })}
        </div>
        <hr />
        <div className="grid gap-4 sm:grid-cols-3">
          {data &&
            data[1].map((server, idx) => {
              return (
                <label
                  className="relative block border-2 border-gray-200 rounded-lg text-center py-5 transtion hover:text-blue-500 hover:border-blue-500 cursor-pointer focus-within:border-blue-500 focus-within:text-blue-500"
                  htmlFor={server}
                  key={idx}
                >
                  <input
                    className={"absolute opacity-0"}
                    type="checkbox"
                    name="server"
                    id={server}
                    value={server}
                  />
                  <i className="fa-solid fa-server text-[1.05rem] mb-2"></i>
                  <h3>{server}</h3>
                </label>
              );
            })}
        </div>
      </form>
    </div>
  );
}
