import { useState } from "react";
import { FilesData, statis } from "./data";
import Title from "../Title";

export default function Files() {
  const [statics, setStatics] = useState(statis);
  const [files, setfiles] = useState(FilesData);

  return (
    <div className="mx-3 sm:m-6">
      <Title>Files</Title>
      <div className="flex flex-col md:items-start md:flex-row-reverse gap-5 mt-8">
        <div className="widget md:w-[260px]">
          <h3 className="text-center md:text-left font-bold text-2xl">
            Files Statistics
          </h3>
          <ul className="grid gap-4 mt-5">
            {statics &&
              statics.map(({ type, total, size, icon, iconColor }, idx) => {
                return (
                  <li
                    className="flex items-center gap-3 border border-gray-200 px-3 py-2.5"
                    key={idx}
                  >
                    <i
                      className={`${icon} grid place-items-center relative isolate text-base text-[var(--color)] w-10 h-10 after:absolute after:-z-10 after:w-full after:h-full after:bg-[var(--color)] after:opacity-30`}
                      style={{ "--color": iconColor }}
                    ></i>
                    <div className="flex justify-between items-center flex-1">
                      <div>
                        <h4 className="text-[0.84rem]">{type}</h4>
                        <p className="text-[0.8rem] text-gray-500 mt-1">
                          {total}
                        </p>
                      </div>
                      <p className="text-[0.8rem] text-gray-500">{size}</p>
                    </div>
                  </li>
                );
              })}
          </ul>
          <a href="#" className="group btn px-4 py-2 mx-auto mt-5">
            <i className="fa-solid fa-angles-up mr-2 group-hover:animate-upDown"></i>
            <span>Upload</span>
          </a>
        </div>
        <div
          className={
            "grid sm:grid-cols-[repeat(auto-fit,_minmax(199px,_1fr))] flex-1 gap-3 sm:gap-5"
          }
        >
          {files &&
            files.map(({ name, onwer, size, date, icon }, idx) => {
              return (
                <div className="widget group p-0 relative" key={idx}>
                  <img
                    src={icon}
                    alt="files image"
                    className="w-16 mx-auto mt-6 transition group-hover:rotate-3"
                  />
                  <h3 className="text-center text-sm mt-4">{name}</h3>
                  <p className="text-[0.8rem] text-gray-400 ml-2.5 mt-2.5 mb-2.5">
                    {onwer}
                  </p>
                  <div className="flex justify-between items-center text-[0.8rem] text-gray-400 border border-gray-200 p-2.5">
                    <p>{date}</p>
                    <p>{size}</p>
                  </div>
                  <a href="#" className="absolute top-2 left-3 text-gray-500">
                    <i className="fa-solid fa-download"></i>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
