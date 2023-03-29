import LayerContainer from "./component/LayerContainer";
import Dashboard from "./component/Dashboard/Dashboard";
import Settings from "./component/Settings/Settings";
import Profile from "./component/Profile/Profile";
import Porjects from "./component/Projects/Projects";
import Courses from "./component/Courses/Courses";
import Friends from "./component/Friends/Friends";

function App() {
  return (
    <>
      <LayerContainer>
        {/* <Dashboard /> */}
        {/* <Settings /> */}
        {/* <Profile /> */}
        {/* <Porjects /> */}
        {/* <Courses /> */}
        <Friends />
      </LayerContainer>
    </>
  );
}

export default App;
