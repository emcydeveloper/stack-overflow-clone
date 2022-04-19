// import { Switch, Route } from "react-router-dom";
import "../Styles/style.css";
import { useParams } from "react-router-dom";
import DisplayQuesAnswers from "./DisplayQuesAnswers";
import questionAnswersDB from "../DataSource/questionAnswersDB";

import Header from "./Header";

export default function Home() {
  const { loginId } = useParams();

  let questionAnswers = questionAnswersDB.questionAnswersDB;

  // console.log(questionAnswers);

  let getQuestionsAndAnswers = questionAnswers
    .filter((ques) => ques.type === "question")
    .map((question) =>
      questionAnswers.filter((aa) => question.questionID === aa.questionID)
    );
  // console.log(getQuestionsAndAnswers);
  //To get the answer count
  // let bb = questionAnswers.filter((ques) => ques.type === "answer")
  // //.map((question) => questionAnswers.filter((aa) => question.questionID === aa.questionID))
  // console.log(bb);

  // let getData = getQuestionsAndAnswers.map((a)=> a.map((get,i)=> {return <DisplayQuesAnswers key = {i} setVal = {get} />}))
  let getData = getQuestionsAndAnswers.map((a) => {
    return (
      <div className="user-que-ans">
        {a.map((get, i) => (
          <DisplayQuesAnswers key={i} setVal={get} />
        ))}
        <div className="user-que-ans-accessories">
            <div>like</div>
            <div>dislike</div>
            <button>answer</button>
        </div>
      </div>
    );
  });

  return (
    <div className="home-container">
      <Header userinfo={loginId} />
      <h1>Logged in successfully!! Welcome Home username - {loginId}</h1>
      {/* <BodyContent /> */}
      <div className="home-container-ques-ans">{getData}</div>
    </div>
  );
}
