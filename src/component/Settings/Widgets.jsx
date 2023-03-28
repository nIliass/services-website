import { useState } from "react";
import { WidgetsData } from "./Data";
import WidgetHeader from "../Dashboard/WidgetHeader";

export default function Widgets() {
  const [data, setData] = useState(WidgetsData);
  return (
    <div className="widget">
      <WidgetHeader title={"Widgets Control"} content={"Show/Hide Widgets"} />
      <form action="" className="grid gap-3 mt-5">
        {data &&
          data.map((widget, idx) => {
            return (
              <label
                className="group flex items-center gap-4 cursor-pointer"
                htmlFor={`widget-${idx + 1}`}
                key={idx}
              >
                <input
                  type="checkbox"
                  id={`widget-${idx + 1}`}
                  className="hidden peer"
                />
                <div className="grid place-items-center text-xs text-white relative w-5 h-5 border-2 border-gray-500 rounded-[0.25rem] transition group-hover:border-blue-600 peer-checked: peer-checked:border-blue-600 isolate before:absolute before:w-full before:h-full before:bg-blue-600 before:transition before:scale-0 peer-checked:before:scale-100 before:-z-10 rotate-180 peer-checked:rotate-0">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3>{widget}</h3>
              </label>
            );
          })}
      </form>
    </div>
  );
}
