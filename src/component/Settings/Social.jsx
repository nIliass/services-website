import { useState } from "react";
import { socialData } from "./Data";
import WidgetHeader from "../Dashboard/WidgetHeader";

export default function Social() {
  const [data, setData] = useState(socialData);
  return (
    <div className="widget">
      <WidgetHeader
        title={"Social Info"}
        content={"Social Media Information"}
      />
      <form action="" className="grid gap-3 mt-5">
        {data &&
          data.map(({ name, icon }, idx) => {
            return (
              <div
                className="group flex items-center bg-gray-75 border-[1px] border-gray-400 rounded-md"
                key={idx}
              >
                <i
                  className={`${icon} w-9 text-center text-gray-500 group-focus-within:text-black transition`}
                ></i>
                <input
                  type="text"
                  className="flex-1 bg-transparent border-l-[1px] border-gray-400 px-3 py-2 outline-none placeholder:text-[0.8rem] placeholder:text-gray-500 placeholder:transition placeholder:focus:opacity-0"
                  placeholder={`${name} Username`}
                />
              </div>
            );
          })}
      </form>
    </div>
  );
}
