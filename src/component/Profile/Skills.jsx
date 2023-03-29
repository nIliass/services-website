import { useState } from "react";
import { skillsData } from "./Data";
import WidgetHeader from "../Dashboard/WidgetHeader";

export default function Skills() {
  const [data, setData] = useState(Object.values(skillsData));
  return (
    <div className="widget">
      <WidgetHeader title={"My Skills"} content={"Complete Skills List"} />
      <div className="mt-2.5">
        {data &&
          data.map((skills, idx) => {
            return (
              <ul
                className="[&:not(:last-child)]:border-b border-b-gray-200 flex justify-center gap-2 py-4"
                key={idx}
              >
                {skills.map((skill, idx) => {
                  return (
                    <li className="small__container" key={idx}>
                      {skill}
                    </li>
                  );
                })}
              </ul>
            );
          })}
      </div>
    </div>
  );
}
