import { useState } from "react";
import Data from "./Data";
import Title from "../Title";

export default function Porjects() {
  const [data, setData] = useState(Data);
  return (
    <div className="mx-3 sm:m-6">
      <Title>Projects</Title>
      <div
        className={
          "grid sm:grid-cols-[repeat(auto-fit,_minmax(500px,_1fr))] gap-3 sm:gap-6 mt-8"
        }
      >
        {data &&
          data.map(
            (
              { name, description, team, skills, progress, price, date },
              idx
            ) => {
              return (
                <div className="widget relative" key={idx} data-date={date}>
                  <span className="absolute right-2.5 top-2.5 text-sm text-gray-400">
                    {date}
                  </span>
                  <div>
                    <h3>{name}</h3>
                    <p className="text-gray-400 text-[0.9rem] mt-1.5">
                      {description}
                    </p>
                  </div>
                  <div className="flex">
                    {team.map((member, idx) => {
                      return (
                        <a
                          href=""
                          className="relative hover:z-10 [&:not(:first-child)]:-ml-4 mt-10 mb-5"
                          key={idx}
                        >
                          <img
                            src={member}
                            alt="member image"
                            className="w-10 rounded-full border-2 border-white"
                          />
                        </a>
                      );
                    })}
                  </div>
                  <ul className="flex flex-wrap md:justify-end gap-3 py-5 border-y border-gray-100">
                    {skills.map((skill, idx) => {
                      return (
                        <li className="small__container" key={idx}>
                          {skill}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-col justify-between md:flex-row items-center gap-2.5 pt-5">
                    <div
                      className={`relative w-[300px] h-2 bg-gray-200 rounded-full before:absolute before:w-[calc(var(--progress)_*_1%)] before:h-full ${
                        progress < 50
                          ? "before:bg-[#f44336]"
                          : progress === 100
                          ? "before:bg-[#0075ff]"
                          : "before:bg-[#22c55e]"
                      } before:rounded-full`}
                      style={{ "--progress": progress }}
                    ></div>
                    <p className="text-gray-400 text-[0.95rem]">$ {price}</p>
                  </div>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
}
