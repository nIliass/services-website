import { useState } from "react";
import { uploadData } from "./Data";
import WidgetHeader from "./WidgetHeader";

export default function Uploads() {
  const [data, setData] = useState(uploadData);
  return (
    <div className="widget">
      <WidgetHeader title={"Latest Uploads"} style={"mb-5"} />
      <ul className="grid gap-3">
        {data &&
          data.map(({ fileName, owner, size, file }, idx) => {
            return (
              <li
                className={`flex items-center gap-3 ${
                  idx !== data.length - 1
                    ? "border-b border-b-gray-200 pb-4"
                    : ""
                }`}
                key={idx}
              >
                <img src={file} alt="file image" className="w-11" />
                <div className="mr-auto">
                  <h3 className="text-sm sm:text-[1rem]">{fileName}</h3>
                  <p className="text-gray-400 text-sm sm:text-[1rem]">
                    {owner}
                  </p>
                </div>
                <p className="bg-gray-100 px-1.5 py-1 text-sm rounded-md">
                  {size}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
