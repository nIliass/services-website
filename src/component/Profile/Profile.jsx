import Title from "../Title";
import Info from "./Info";
import Skills from "./Skills";
import Activities from "./Activities";

export default function Settings() {
  return (
    <div className="mx-3 sm:m-6">
      <Title>Profile</Title>
      <section className={"grid gap-3 sm:gap-6 mt-8"}>
        <Info />
        <div className="grid gap-6 lg:grid-cols-[33%_1fr]">
          <Skills />
          <Activities />
        </div>
      </section>
    </div>
  );
}
