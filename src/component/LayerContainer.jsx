import { useState } from "react";
import navData from "./navData";

export default function LayerContainer({ children }) {
  const [data, setData] = useState(navData);
  const [search, setSearch] = useState("");

  return (
    <div className={"flex"}>
      <aside
        className={
          "self-stretch relative z-10 px-2.5 md:px-4 pt-2 bg-white shadow-3xl shadow-black-100 text-center"
        }
      >
        <h2
          className={
            "before:hidden md:before:block before:absolute before:-bottom-4 before:w-20 before:h-0.5 before:bg-black flex justify-center relative font-bold text-sm md:text-xl mb-4 md:mt-4 md:mb-10 after:hidden md:after:block after:absolute after:-bottom-[1.41rem] after:w-4 after:h-4 after:bg-black after:rounded-full after:border-2 after:border-solid after:border-white"
          }
        >
          Elzero
        </h2>
        <nav className={"grid gap-4 md:gap-1"}>
          {data &&
            data.map(({ title, icon }, idx) => {
              return (
                <li className={"list-none"} key={idx}>
                  <a
                    href="#"
                    className={
                      "md:flex md:items-center md:gap-2.5 px-2.5 md:pl-3 md:pr-12 py-1.5 md:py-2.5 hover:bg-gray-100 rounded-md transition duration-300 duration-250"
                    }
                  >
                    <i className={`${icon} text-sm`}></i>
                    <span className={"hidden md:block text-sm"}>{title}</span>
                  </a>
                </li>
              );
            })}
        </nav>
      </aside>
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
        {children}
      </section>
    </div>
  );
}
