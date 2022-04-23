import Header from "./Header";
import DisplayQuestionAnswer from "./DisplayQuestionAnswer";


export default function Home({questionAndAnswers,setQuestionAndAnswers}) {
    let loginId = 1;

    let allQuestions = questionAndAnswers.filter((getQues)=>getQues.type==="question")
    let allQuesAndAns = allQuestions.map((quesId)=> {return questionAndAnswers.filter((getInfo)=>getInfo.questionID===quesId.questionID)})


    let handleAddAnswer = (addAnswer) => {setQuestionAndAnswers((prevState)=>[...prevState,addAnswer])}
  //setQuestionAndAnswers((preState)=>[...preState,addAnswer])


  return (
  <div className="home">
      <Header userinfo={loginId} />
      <div className="home-ques-ans">
      {allQuesAndAns.map((getDetails, i)=> <DisplayQuestionAnswer key={i} questionId={getDetails[0].questionID} getInfo={getDetails} addAnswer={handleAddAnswer} />)}
      </div>
  </div>
  );
}
