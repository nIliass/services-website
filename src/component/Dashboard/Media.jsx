import { useState } from "react";
import { mediaData } from "./Data";
import WidgetHeader from "./WidgetHeader";

export default function Media() {
  const [data, setData] = useState(mediaData);
  return (
    <div className="widget">
      <WidgetHeader title={"Social Media Stats"} style={"mb-5"} />
      <ul className="grid gap-3">
        {data &&
          data.map(({ icon, content, btn, color }, idx) => {
            return (
              <li className="flex" style={{ "--brand-color": color }} key={idx}>
                <div className="grid place-items-center text-white bg-[var(--brand-color)] w-14 h-14 transition hover:rotate-3">
                  <i className={icon}></i>
                </div>
                <div className="flex flex-grow justify-between items-center relative px-3 after:absolute after:left-0 after:w-full after:h-full after:bg-[var(--brand-color)] after:opacity-10 after:-z-10 isolate">
                  <p className="text-[var(--brand-color)] text-md">{content}</p>
                  <button
                    className="bg-[var(--brand-color)] text-white text-sm px-2 py-1
                  rounded-md"
                  >
                    {btn}
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
