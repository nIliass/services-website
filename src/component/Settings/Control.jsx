import { useRef } from "react";
import WidgetHeader from "../Dashboard/WidgetHeader";
import CheckBtn from "./CheckBtn";

export default function Control() {
  const msg = useRef(null);
  return (
    <div className="widget grid gap-6">
      <WidgetHeader
        title={"Site Control"}
        content={"Control The Website If There Is Maintenance"}
      />
      <div className="flex justify-between items-end">
        <div>
          <h3>Website Control</h3>
          <p className="text-gray-500 text-[0.83rem] mt-1">
            Open/Close Website And Type The Reason
          </p>
        </div>
        <CheckBtn />
      </div>
      <textarea
        className="w-full min-h-[160px] resize-none rounded-md border border-gray-300 text-[0.8rem] py-1.5 px-3 outline-none placeholder:text-gray-500 placeholder:transition placeholder:focus:opacity-0"
        ref={msg}
        placeholder={"Close Message Content"}
      ></textarea>
    </div>
  );
}
