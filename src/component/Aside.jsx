import { useState } from "react";
import { NavLink } from "react-router-dom";
import navData from "./navData";

export default function Aside() {
  const [data, setData] = useState(navData);
  return (
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
          data.map(({ title, icon, path }, idx) => {
            return (
              <li className={"list-none"} key={idx}>
                <NavLink
                  to={path}
                  className={
                    "md:flex md:items-center md:gap-2.5 px-2.5 md:pl-3 md:pr-12 py-1.5 md:py-2.5 hover:bg-gray-100 rounded-md transition duration-300 duration-250"
                  }
                  style={({ isActive }) => {
                    return isActive ? { background: "rgb(243 244 246)" } : {};
                  }}
                >
                  <i className={`${icon} text-sm`}></i>
                  <span className={"hidden md:block text-sm"}>{title}</span>
                </NavLink>
              </li>
            );
          })}
      </nav>
    </aside>
  );
}
