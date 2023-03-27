import { useState } from "react";
import WidgetHeader from "./WidgetHeader";

export default function Draft() {
  const [title, setTitle] = useState("");
  const [idea, setIdea] = useState("");
  return (
    <div className={"widget"}>
      <WidgetHeader
        title={"Quick Draft"}
        content={"Write A Draft For Your Ideas"}
      />
      <form action="" className={"flex flex-col space-y-5 mt-5"}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={"Title"}
          className={"input"}
        />
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder={"Your Thought"}
          className={"input resize-none min-h-[200px]"}
        ></textarea>
        <button className={"btn mr-0"}>Save</button>
      </form>
    </div>
  );
}
