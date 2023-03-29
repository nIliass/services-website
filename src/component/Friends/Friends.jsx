import { useState } from "react";
import Data from "./data";
import Title from "../Title";

export default function Friends() {
  const [data, setData] = useState(Data);
  return (
    <div className="mx-3 sm:m-6">
      <Title>Friends</Title>
      <div
        className={
          "grid sm:grid-cols-[repeat(auto-fit,_minmax(275px,_1fr))] gap-3 sm:gap-5 mt-8"
        }
      >
        {data &&
          data.map(
            (
              {
                profile,
                name,
                job,
                friends,
                projects,
                articles,
                joined,
                phone,
                email,
                vip,
              },
              idx
            ) => {
              return (
                <div className="widget relative p-0" key={idx}>
                  <div className="flex gap-2 absolute left-3 top-3">
                    <a
                      href={`tel:+${phone}`}
                      className="grid place-items-center bg-gray-100 w-8 h-8 text-[0.8rem] rounded-full cursor-pointer transition duration-500 hover:text-white hover:bg-blue-500"
                    >
                      <i className="fa-solid fa-phone"></i>
                    </a>
                    <a
                      href={`mailto:${email}`}
                      className="grid place-items-center bg-gray-100 w-8 h-8 text-[0.8rem] rounded-full cursor-pointer transition duration-500 hover:text-white hover:bg-blue-500"
                    >
                      <i className="fa-regular fa-envelope"></i>
                    </a>
                  </div>
                  <div className="grid place-items-center pt-7 pb-4">
                    <img
                      src={profile}
                      alt="profile image"
                      className="w-24 rounded-full mb-3"
                    />
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-sm text-gray-400 mt-1">{job}</p>
                  </div>
                  <div className="flex items-center justify-between border-y border-gray-200 py-4 px-3">
                    <ul className="grid gap-1.5">
                      <li className="flex items-center gap-2 text-sm">
                        <i className="fa-regular fa-face-smile fa-fw"></i>
                        <p>{friends} Friend</p>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <i className="fa-solid fa-code-commit fa-fw"></i>
                        <p>{projects} Projects</p>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <i className="fa-regular fa-newspaper fa-fw"></i>
                        <p>{articles} Articles</p>
                      </li>
                    </ul>
                    {vip && (
                      <div className="uppercase text-[2.5rem] font-bold mr-2 text-[#f59e0b] opacity-25">
                        vip
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-center pt-3 px-4 pb-4">
                    <p className="text-[0.8rem] text-gray-400">
                      Joined {joined}
                    </p>
                    <div className="flex gap-1.5">
                      <button className="btn m-0 text-[0.8rem]">Profile</button>
                      <button className="btn m-0 text-[0.8rem] bg-[#f44336] hover:bg-[#e74135]">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
}
