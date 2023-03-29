import { useState } from "react";
import { infoData } from "./Data";
import CheckBtn from "../Settings/CheckBtn";

export default function Info() {
  const [data, setData] = useState(infoData);
  return (
    <div className="widget p-0 md:flex">
      <div className="grid place-items-center content-center relative md:w-[245px] lg:w-[300px] pt-7 px-6 pb-5 before:absolute before:right-0 before:w-[1px] before:h-[75%] before:bg-gray-200">
        <img src="./imgs/avatar.png" alt="porfile image" className="w-32" />
        <h3 className="font-bold text-lg mt-3 mb-1">Osama Elzero</h3>
        <p className="text-gray-500 text-[1.05rem] mb-2.5">Level 20</p>
        <div
          className="relative w-44 h-1.5 rounded-full bg-gray-300 mb-4 overflow-hidden before:absolute before:bg-blue-500 before:h-full before:w-[var(--progress)]"
          style={{ "--progress": "65%" }}
        ></div>
        <div className="text-[1rem] flex gap-0.5 text-[#f59e0b] mb-2.5">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p className="text-sm text-gray-400">550 Rating</p>
      </div>
      <div className="flex-1">
        {data &&
          data.map((info, idx) => {
            return (
              <div
                className="[&:not(:last-child)]:border-b border-gray-200 transition hover:bg-gray-100 py-5 px-6"
                key={idx}
              >
                <h3 className="text-center md:text-left text-gray-500 text-[0.95rem] mb-2.5">
                  {info.typeInfo}
                </h3>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] place-items-center md:place-items-start gap-2.5 ">
                  {Object.entries(info.properties).map((property, idx) => {
                    return (
                      <p className="text-sm" key={idx}>
                        <span className="text-gray-400">{property[0]}:</span>{" "}
                        {property[1]}
                      </p>
                    );
                  })}
                  <CheckBtn w={"14px"} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
