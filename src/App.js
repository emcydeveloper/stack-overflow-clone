
import Signup from "./Components/SignupAndLogin/Signup";
import Login from "./Components/SignupAndLogin/Login";
import Home from "./Components/AfterLogin/Header";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      

      <Switch>
        <Route path="/user/:loginId" ><Home /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/signup"><Signup /></Route>
        <Route path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
