import "../Styles/style.css";
import questionAnswersDB from "../DataSource/questionAnswersDB";
import Header from "./Header";
import DisplayQuesAnswers from "./DisplayQuesAnswers";

export default function Question() {
  let userLogin = 1;
  let questionAnswers = questionAnswersDB.questionAnswersDB;

  // console.log(questionAnswers);

  let getQuestionsAndAnswers = questionAnswers
    .filter((ques) => ques.type === "question" && ques.createdBy === 1)
    .map((question) =>
      questionAnswers.filter((aa) => question.questionID === aa.questionID)
    )

  // let getData = getQuestionsAndAnswers.map((a)=> a.map((get,i)=> {return <DisplayQuesAnswers key = {i} setVal = {get} />}))
  let getData = getQuestionsAndAnswers.map((a,i) => {
    return (
      <div key={i} className="user-que-ans">
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

  // console.log(getData);

  // console.log(getQuestions);

  //<DisplayQuestions question={res.value} updatedby={res.createdBy} />
  return (
    <>
      <Header userLogin={userLogin} />
      <h1>questions - {userLogin}</h1>
      <button className="askquestion">Add a Question</button>
      {/* {getQuestions} */}
      {/* {getAnswers} */}
      {getData}
    </>
  );
}
