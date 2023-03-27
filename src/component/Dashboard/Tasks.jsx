import { useState } from "react";
import { tasksData } from "./Data";
import WidgetHeader from "./WidgetHeader";

export default function Tasks() {
  const [data, setData] = useState(tasksData);
  const handleDelete = (e) => {
    const parent = e.target.closest("li");
    const h3 = parent.querySelector("h3");
    const p = parent.querySelector("p");
    h3.className += " text-gray-400 line-through";
    p.className = "text-gray-300 line-through";
    e.target.className += " text-gray-300 hover:text-gray-300";
  };
  return (
    <div className="widget">
      <WidgetHeader title={"Latest Tasks"} style={"mb-5"} />
      <ul className="grid gap-4">
        {data &&
          data.map(({ title, content }, idx) => {
            return (
              <li
                className={`flex items-center justify-between ${
                  idx !== data.length - 1
                    ? "border-b border-b-gray-200 pb-4"
                    : ""
                }`}
                key={idx}
              >
                <div className="">
                  <h3 className={`font-bold text-[0.95rem] mb-0.5`}>{title}</h3>
                  <p className={`text-gray-500`}>{content}</p>
                </div>
                <button onClick={handleDelete}>
                  <i className="fa-regular fa-trash-can transition duration-250 hover:text-red-500"></i>
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
