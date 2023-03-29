import { useState } from "react";
import Data from "./Data";
import Title from "../Title";

export default function Courses() {
  const [data, setData] = useState(Data);
  return (
    <div className="mx-3 sm:m-6">
      <Title>Courses</Title>
      <div
        className={
          "grid sm:grid-cols-[repeat(auto-fit,_minmax(275px,_1fr))] gap-3 sm:gap-5 mt-8"
        }
      >
        {data &&
          data.map(({ profile, cover, title, content, price, sales }, idx) => {
            return (
              <div
                className="widget flex flex-col relative p-0 overflow-hidden"
                key={idx}
              >
                <a
                  href="#"
                  className="inline-block absolute left-6 top-6 w-14 h-14 rounded-full overflow-hidden border-[3px] border-white"
                >
                  <img src={profile} alt="profile image" />
                </a>
                <img
                  src={cover}
                  alt="cover"
                  className="w-full h-64 object-cover "
                />
                <div className="pt-6 px-5 pb-10 border-b border-gray-200">
                  <h3 className="font-bold mb-3">{title}</h3>
                  <p className="text-sm text-gray-500 leading-6">{content}</p>
                </div>
                <div className="flex justify-between items-center relative py-5 px-4 text-sm text-gray-400">
                  <p className="flex items-center gap-2">
                    <i className="fa-regular fa-user"></i>
                    {sales}
                  </p>
                  <p className="flex items-center gap-1">
                    <i className="fa-solid fa-dollar-sign"></i>
                    {price}
                  </p>
                  <a
                    href="#"
                    className="btn m-0 absolute top-0 -translate-y-[50%] left-[50%] -translate-x-[50%]"
                  >
                    Course Info
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
