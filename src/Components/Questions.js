
import { useState } from "react";
import DisplayQuestionAnswer from "./DisplayQuestionAnswer";
import Header from "./Header";

export default function Questions({questionAndAnswers,setQuestionAndAnswers}){

    let loginId = 1;

    let [textAreaValue, setTextAreaValue] = useState("");
    let [textAreaVisible, setTextAreaVisible] = useState(false);

    let userQuestions = questionAndAnswers.filter((getQues)=>getQues.type==="question"&&getQues.createdBy===loginId)
    let userQuesAndAns = userQuestions.map((quesId)=> {return questionAndAnswers.filter((getInfo)=>getInfo.questionID===quesId.questionID)})

    let handleAddAnswer = (add) => {setQuestionAndAnswers((prevState)=>[...prevState,add])}
    let handletexAreaVisisble = ()=>{setTextAreaVisible((prevState)=>!prevState)}
    let handleGetQuestion = (event) => {setTextAreaValue(event.target.value);};
    let handleSubmitQuestion = () => {
        handleAddAnswer({type:"question",createdBy:loginId,createdOn:"date",value:textAreaValue});
        //{type:"question",createdBy:1,questionID:1,createdOn:"date",value:"What is my Name"}
        setTextAreaVisible((prevState) => !prevState);
        setTextAreaValue("");
      };

    return(
        <div className="questions">
            <Header userinfo={loginId} />
            {/* <button>Post your Questions</button> */}
            <div className="post-questions">
            {!textAreaVisible && <button onClick={handletexAreaVisisble}>Ask Questions</button>}

            {textAreaVisible && 
            <div>
                <textarea className="display-ques-ans-txtarea" onChange={handleGetQuestion} value={textAreaValue}></textarea>
                <div className="postActions">
                <button onClick={handleSubmitQuestion}>Post</button>
                <button onClick={handletexAreaVisisble}>Cancel</button>
                </div>
            </div>}

            </div>
            <h1>questions</h1>
            {userQuesAndAns.map((getDetails, i)=> <DisplayQuestionAnswer key={i} questionId={getDetails[0].questionID} getInfo={getDetails} addAnswer={handleAddAnswer} />)}
        </div>
    )
}