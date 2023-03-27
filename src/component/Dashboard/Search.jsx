import { useState } from "react";
import { searchData } from "./Data";
import WidgetHeader from "./WidgetHeader";

export default function Search() {
  const [data, setData] = useState(searchData);
  return (
    <div className="widget">
      <WidgetHeader title={"Top Search Items"} style={"mb-5"} />
      <ul className="grid gap-6">
        <li className="flex justify-between items-center text-gray-500">
          <h3>Keyword</h3>
          <h3>Search Count</h3>
        </li>
        {data &&
          data.map(({ keyword, count }, idx) => {
            return (
              <li className={"flex justify-between items-center"} key={idx}>
                <h4>{keyword}</h4>
                <p className="bg-gray-100 px-1.5 py-1 text-sm rounded-md">
                  {count}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
