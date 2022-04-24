import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Questions from "./Components/Questions";
import Signup from "./Components/Signup";
import SearchTag from "./Components/SearchTag";
import UserProfile from "./Components/UserProfile";
import Company from "./Components/Company";


function App() {
  
  let [questionAndAnswers,setQuestionAndAnswers] = useState([
    {type:"question",createdBy:1,questionID:1,createdOn:"20/4/2022",value:"What is my Name"},
    {type:"answer",createdBy:2,questionID:1,createdOn:"21/4/2022",value:"Your name is ganesh"},
    {type:"question",createdBy:1,questionID:2,createdOn:"4/4/2022",value:"What is my role"},
    {type:"answer",createdBy:2,questionID:2,createdOn:"14/4/2022",value:"developer"},
    {type:"answer",createdBy:2,questionID:1,createdOn:"22/4/2022",value:"Your name is Kanna"},
    {type:"answer",createdBy:3,questionID:1,createdOn:"20/4/2022",value:"Your name is Ganesh Kanna"},
    {type:"question",createdBy:2,questionID:3,createdOn:"1/4/2022",value:"What is my role 2"},
    {type:"answer",createdBy:3,questionID:3,createdOn:"9/4/2022",value:"Your role is React Developer"},
])


  return (
    <div className="App">

      <Switch>
      <Route path="/home"><Home questionAndAnswers={questionAndAnswers} setQuestionAndAnswers={setQuestionAndAnswers} /></Route>
      <Route exact path="/login"><Login /></Route>
      <Route exact path="/questions"><Questions questionAndAnswers={questionAndAnswers} setQuestionAndAnswers={setQuestionAndAnswers} /></Route>
      <Route exact path="/signup"><Signup /></Route>
      <Route exact path="/searchtag"><SearchTag /></Route>
      <Route exact path="/company"><Company /></Route>
      <Route exact path="/userprofile"><UserProfile /></Route>
      <Route exact path="/"><Login /></Route>
      </Switch>
    </div>
  );
}

export default App;
