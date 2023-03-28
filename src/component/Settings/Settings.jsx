import Title from "../Title";
import Control from "./Control";
import General from "./General";
import Security from "./Security";
import Social from "./Social";
import Widgets from "./Widgets";
import BackUp from "./BackUp";

export default function Settings() {
  return (
    <div className="mx-3 sm:m-6">
      <Title>Settings</Title>
      <section
        className={
          "grid sm:grid-cols-[repeat(auto-fit,_minmax(500px,_1fr))] gap-3 sm:gap-6 mt-8"
        }
      >
        <Control />
        <General />
        <Security />
        <Social />
        <Widgets />
        <BackUp />
      </section>
    </div>
  );
}
