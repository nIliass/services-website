import { useState } from "react";
import Aside from "./Aside";
import { Outlet } from "react-router-dom";

export default function LayerContainer() {
  const [search, setSearch] = useState("");
  return (
    <div className={"flex"}>
      <Aside />
      <section className={"flex-grow bg-gray-25"}>
        <header className={"flex justify-between px-5 py-3.5 bg-white"}>
          <form
            action=""
            className={`flex items-center gap-2 ${
              search ? "w-48" : "w-40"
            } transition-all duration-500 px-3 py-1.5 border border-gray-300 rounded-xl`}
            onSubmit={(e) => e.preventDefault()}
          >
            <i
              className={`fa-solid fa-magnifying-glass text-gray-400 text-md`}
            ></i>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={"Type A Keyword"}
              className={"w-full outline-none text-xs placeholder:text-xs"}
            />
            <button
              className={`opacity-0 transition ${search ? "opacity-100" : ""}`}
              onClick={() => setSearch("")}
            >
              <i className={"fa-solid fa-xmark text-sm text-blue-900"}></i>
            </button>
          </form>
          <div className={"flex items-center gap-3.5"}>
            <button
              className={
                "before:block before:absolute before:-top-0.5 before:-right-1.5 before:w-2.5 before:h-2.5 before:bg-red-primary before:rounded-full relative text-xl"
              }
            >
              <i className="fa-regular fa-bell"></i>
            </button>
            <a href="#" className={"inline-block w-8"}>
              <img src="./imgs/avatar.png" alt="profile image" />
            </a>
          </div>
        </header>
        <Outlet />
      </section>
    </div>
  );
}
