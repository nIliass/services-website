import { useState } from "react";
import { activitesData } from "./Data";
import WidgetHeader from "../Dashboard/WidgetHeader";

export default function Activities() {
  const [data, setData] = useState(activitesData);
  return (
    <div className="widget">
      <WidgetHeader
        title={"Latest Activities"}
        content={"Latest Activities Done By The User"}
      />
      <div className="text-center md:text-left mt-3">
        {data &&
          data.map(({ icon, title, content, time, date }, idx) => {
            return (
              <div
                className="flex flex-col md:flex-row items-center gap-2 [&:not(:last-child)]:border-b border-gray-200 pt-4 [&:not(:last-child)]:pb-4"
                key={idx}
              >
                <img
                  src={icon}
                  alt="activity image"
                  className="w-16 mx-auto md:m-0"
                />
                <div className="flex flex-col md:flex-row justify-between flex-1 gap-1">
                  <div className="flex flex-col justify-center gap-1">
                    <h3 className="text-[1.05rem]">{title}</h3>
                    <p className="text-gray-500">{content}</p>
                  </div>
                  <div className="flex flex-col justify-center gap-1 md:text-right">
                    <p>{time}</p>
                    <p className="text-gray-500">{date}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
