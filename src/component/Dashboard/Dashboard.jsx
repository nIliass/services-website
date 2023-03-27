import Title from "../Title";
import Welcome from "./Welcome";
import Draft from "./Draft";
import Targets from "./Targets";
import Tickets from "./Tickets";
import News from "./News";
import Tasks from "./Tasks";
import Search from "./Search";
import Uploads from "./Uploads";
import Progress from "./Progress";
import Reminders from "./Reminders";
import Post from "./Post";
import Media from "./Media";
import Porjects from "./Projects";

export default function Dashboard() {
  return (
    <div>
      <Title>Dashboard</Title>
      <section
        className={
          "grid sm:grid-cols-[repeat(auto-fit,_minmax(500px,_1fr))] gap-3 sm:gap-6 mx-3 sm:mx-6 mt-8"
        }
      >
        <Welcome />
        <Draft />
        <Targets />
        <Tickets />
        <News />
        <Tasks />
        <Search />
        <Uploads />
        <Progress />
        <Reminders />
        <Post />
        <Media />
      </section>
      <Porjects />
    </div>
  );
}
