import "../Styles/question.css";
import questionDB from "../DataSource/questionsDB";
import answerDB from "../DataSource/answersDB";
import Header from "./Header";
import { useState } from "react";

export default function Question({ userLogin }) {
  // let userLogin = parseInt(userLogin);
  let [myQuestion, setMyQuestion] = useState(
    {
      questionedBy: userLogin,
      questionID: [],
      question: [],
    },
  );

  let userQuestions = questionDB.data.questionsData;
  let answered = questionDB.data.answersData;

  let newData=[];
  let newData2=[];

  let get = userQuestions.map((ques) => {
    if (ques.updatedby === parseInt(userLogin)) {
      newData = [...newData,ques.questionid]
      newData2 = [...newData2,ques.question]
      // setMyQuestion(function(){
     
        
      // })
      console.log(ques.questionid);
      console.log(ques.question);
  
    }
    return "";
  });

  // setMyQuestion(function(){
  //   // myQuestion = {...myQuestion,questionedBy:userLogin,...questionID,newData}
  //   // myQuestion.questionID=[...myQuestion.questionID,newData]
  //   // myQuestion.question=[...myQuestion.question,newData]
  // })
  console.log(newData)
  console.log(newData2)
  

  return (
    <div className="questions">
      <Header userLogin={userLogin} />
      <h1>questions - {userLogin}</h1>
      <button className="askquestion">Add a Question</button>
      <div>{newData2}</div>
    </div>
  );
}
