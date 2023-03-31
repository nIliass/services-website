import { Link } from "react-router-dom";
import { useState } from "react";
import { welcomData } from "./Data";

export default function Welcome() {
  const [data, setData] = useState(Object.entries(welcomData));

  return (
    <div className={"flex flex-col rounded-lg overflow-hidden"}>
      <header className={"flex justify-between px-5 py-4 bg-gray-75"}>
        <div>
          <h2 className={"text-2xl font-bold mt-2"}>Welcome</h2>
          <p className={"text-gray-500 mt-1"}>Elzero</p>
        </div>
        <img
          src="./imgs/welcome.png"
          alt="welcome wedget image"
          className={"hidden sm:block w-[40%] max-w-[200px]"}
        />
      </header>
      <div className={"flex flex-col justify-between flex-grow bg-white pb-5"}>
        <img
          src="./imgs/avatar.png"
          alt="profile image"
          className={
            "w-16 mx-auto sm:ml-5 border-4 border-white transform -translate-y-[50%] rounded-full"
          }
        />
        <ul
          className={
            " flex gap-5 flex-col sm:flex-row border-y-2 border-gray-100 py-5 px-4 text-center -mt-3"
          }
        >
          {data &&
            data.map((info, idx) => {
              return (
                <li className="basis-1/3" key={idx}>
                  <h3 className={"text-lg mb-2"}>{info[1]}</h3>
                  <p className={"text-gray-400 text-sm"}>{info[0]}</p>
                </li>
              );
            })}
        </ul>
        <Link
          to="profile"
          className={
            "block w-[fit-content] text-white bg-blue-600 hover:bg-blue-700 transition text-sm rounded-md py-1 px-3 mt-5 ml-auto mr-4"
          }
        >
          Profile
        </Link>
      </div>
    </div>
  );
}
