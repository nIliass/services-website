import { useState } from "react";
import { projectsData } from "./Data";
import WidgetHeader from "./WidgetHeader";

export default function Porjects() {
  const [data, setData] = useState(projectsData);
  return (
    <div className="grid widget m-3 sm:m-6">
      <WidgetHeader title={"Projects"} style={"mb-5"} />
      <div className="overflow-x-auto">
        <table className="border-l-[1px] border-t-[1px] border-gray-100 w-full min-w-[1000px] text-left">
          <thead className="bg-gray-100">
            <tr className="row">
              <th className="cell">Name</th>
              <th className="cell">Finish Date</th>
              <th className="cell">Client</th>
              <th className="cell">Price</th>
              <th className="cell">Team</th>
              <th className="cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map(({ name, date, client, price, team, status }, idx) => {
                return (
                  <tr className="row" key={idx}>
                    <td className="cell">{name}</td>
                    <td className="cell">{date}</td>
                    <td className="cell">{client}</td>
                    <td className="cell">{`$${price}`}</td>
                    <td className="cell flex">
                      {team &&
                        team.map((member, idx) => {
                          return (
                            <img
                              src={member}
                              alt={"member image"}
                              className={`w-8 border-[1px] border-white rounded-full ${
                                idx ? "-ml-4" : ""
                              }`}
                              key={idx}
                            />
                          );
                        })}
                    </td>
                    <td className="cell">
                      <p
                        className={`inline-block ${
                          status === "Completed"
                            ? "bg-[#22c55e]"
                            : status === "In Progress"
                            ? "bg-[#0075ff]"
                            : status === "Rejected"
                            ? "bg-[#f44336]"
                            : "bg-[#f59e0b]"
                        } text-xs text-white px-3 py-1.5 rounded-md`}
                      >
                        {status}
                      </p>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
