import { useState } from "react";
import { plansData, Features } from "./data";
import Title from "../Title";

export default function Plans() {
  const [plans, setPlan] = useState(plansData);
  const [features, setFeatures] = useState(Features);
  return (
    <div className="mx-3 sm:m-6">
      <Title>Plans</Title>
      <div
        className={
          "grid sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-3 sm:gap-6 mt-8"
        }
      >
        {plans &&
          plans.map(({ type, price, color, allowedF }, idx) => {
            return (
              <div
                className="bg-white p-5"
                style={{ "--color": color }}
                key={idx}
              >
                <div className="flex flex-col items-center justify-center relative isolate text-center text-white h-36 border-[3px] border-[var(--color)] after:absolute after:-z-10 after:w-full after:h-full after:bg-[var(--color)] after:border-[3px] after:border-white">
                  <h3 className="text-[1.65rem] font-bold">{type}</h3>
                  <p className="before:content-['$'] before:absolute before:-left-5 before:-top-1.5 before:text-2xl relative text-5xl">
                    {price.toFixed(2)}
                  </p>
                </div>
                <ul className="mt-3 mb-5">
                  {features &&
                    features.map((feature, idx) => {
                      return (
                        <li
                          className="flex items-center gap-1.5 border-b border-gray-200 py-3"
                          key={idx}
                        >
                          <i
                            className={`fa-solid fa-fw fa-${
                              allowedF[feature]
                                ? "check text-[#22c55e]"
                                : "xmark text-[#f44336]"
                            } text-[1.1rem]`}
                          ></i>
                          <p className="flex-1 text-[0.95rem]">{feature}</p>
                          <a href="#">
                            <i className="fa-solid fa-circle-info text-gray-500 text-sm"></i>
                          </a>
                        </li>
                      );
                    })}
                </ul>
                <a
                  href="#"
                  className="btn m-0 py-0.5 bg-[var(--color)] border-2 border-[var(--color)] hover:bg-white hover:text-[var(--color)]"
                >
                  Join
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}
