import { useState } from "react";

export default function CheckBtn({ w, size }) {
  const [isChecked, setChecked] = useState(true);
  return (
    <button
      className={`${
        isChecked ? "bg-blue-600" : "bg-gray-300"
      } transition p-1 w-20 rounded-full`}
      onClick={() => setChecked(!isChecked)}
    >
      <div
        className={`grid place-items-center relative text-gray-400 text-${
          size || "sm"
        } bg-white p-0.5 w-[${w || "24px"}] h-[${
          w || "24px"
        }] rounded-full transition-all ${
          isChecked
            ? `ml-[calc(100%_-_${w || "24px"})] rotate-0`
            : "ml-0 rotate-180"
        }`}
      >
        <i
          className={`fa-solid fa-xmark absolute ${
            !isChecked ? "opacity-1" : "opacity-0"
          }`}
        ></i>
        <i
          className={`fa-solid fa-check absolute ${
            isChecked ? "opacity-1" : "opacity-0"
          }`}
        ></i>
      </div>
    </button>
  );
}
