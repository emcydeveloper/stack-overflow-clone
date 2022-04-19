import "../Styles/style.css";
import DisplayQuestions from "./DisplayQuestions"
import DisplayAnswers from "./DisplayAnswers"


export default function DisplayQuesAnswers({setVal}){
    // console.log(setVal);
    let { type, createdBy, createdOn, value } = setVal
    // console.log(type, createdBy, createdOn, value,"inside dispaly ans")
    return(
        <>
        
        {type === "question" &&  <DisplayQuestions questionData = {setVal}/> }
        {type === "answer" &&  <DisplayAnswers answerData = {setVal}/> }
        {/* <h1>testing</h1> */}

         </>
        )
}