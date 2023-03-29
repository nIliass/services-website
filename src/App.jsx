import LayerContainer from "./component/LayerContainer";
import Dashboard from "./component/Dashboard/Dashboard";
import Settings from "./component/Settings/Settings";
import Profile from "./component/Profile/Profile";
import Porjects from "./component/Projects/Projects";

function App() {
  return (
    <>
      <LayerContainer>
        {/* <Dashboard /> */}
        {/* <Settings /> */}
        {/* <Profile /> */}
        <Porjects />
      </LayerContainer>
    </>
  );
}

export default App;
