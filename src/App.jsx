import { Route, Routes } from "react-router-dom";
import LayerContainer from "./component/LayerContainer";
import Dashboard from "./component/Dashboard/Dashboard";
import Settings from "./component/Settings/Settings";
import Profile from "./component/Profile/Profile";
import Porjects from "./component/Projects/Projects";
import Courses from "./component/Courses/Courses";
import Friends from "./component/Friends/Friends";
import Files from "./component/Files/Files";
import Plans from "./component/Plans/Plans";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayerContainer />}>
        <Route index element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="projects" element={<Porjects />} />
        <Route path="courses" element={<Courses />} />
        <Route path="friends" element={<Friends />} />
        <Route path="files" element={<Files />} />
        <Route path="plans" element={<Plans />} />
      </Route>
    </Routes>
  );
}

export default App;
