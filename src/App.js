import { Switch, Route } from "react-router-dom";
import Signup from "./Components/SignupAndLogin/Signup";
import Login from "./Components/SignupAndLogin/Login";
import Home from "./Components/AfterLogin/Home";
import Questions from "./Components/AfterLogin/Questions";
import SearchTag from "./Components/AfterLogin/SearchTag";
import Comapny from "./Components/AfterLogin/Company";
import UserProfile from "./Components/AfterLogin/UserProfile";



function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/user/:loginId" ><Home /></Route>
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/signup"><Signup /></Route>
        <Route exact path="/"><Login /></Route>
        <Route exact path="/questions"><Questions /></Route>
        <Route exact path="/searchtag"><SearchTag /></Route>
        <Route exact path="/company"><Comapny /></Route>
        <Route exact path="/userprofile"><UserProfile /></Route>
      </Switch>
    </div>
  );
}

export default App;
