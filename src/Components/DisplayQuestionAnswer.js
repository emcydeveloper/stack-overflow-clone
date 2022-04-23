import { Fragment } from "react";
import { useState } from "react";
import "./style.css";

export default function DisplayQuestionAnswer({ questionId,getInfo, addAnswer }) {
  let userID = 1;

  let [textAreaValue, setTextAreaValue] = useState("");
  let [textAreaVisible, setTextAreaVisible] = useState(false);

  let handletexAreaVisisble = () => {setTextAreaVisible((prevState) => !prevState);setTextAreaValue("");};
  let handleGetAnswer = (event) => {setTextAreaValue(event.target.value);};
  let handleSubmitAnswer = () => {
    addAnswer({
      type: "answer",
      createdBy: userID,
      questionID: questionId,
      createdOn: "date",
      value: textAreaValue,
    });
    setTextAreaVisible((prevState) => !prevState);
    setTextAreaValue("");
  };

  // useEffect(()=>console.log(textAreaValue),[textAreaValue])
  //{type:"question",createdBy:1,questionID:1,createdOn:"date",value:"What is my Name"}

  return (
    <div className="display-ques-ans">
      {getInfo.map((getValue, i) => (
        <Fragment key={i}>

          {getValue.type === "question" && (
            <div className="display-ques-ans-ques">
              <div className="ques-info">Created By:-{getValue.createdBy} Created on:-{getValue.createdOn}</div>
              <div className="ques">{getValue.type}:-{getValue.value}</div>
            </div>
          )}

          {getValue.type === "answer" && (
            <div className="display-ques-ans-ans">
              <div className="ans">{getValue.value}</div>
              <div className="ans-info">Answered by:-{getValue.createdBy} Answered on:-{getValue.createdOn}</div>
            </div>
          )}

        </Fragment>
      ))}
      <div className="display-ques-ans-actions">
        {textAreaVisible && (<textarea className="display-ques-ans-txtarea" value={textAreaValue} onChange={handleGetAnswer}></textarea>)}
        {!textAreaVisible && (<button onClick={handletexAreaVisisble}>Answer</button>)}
        <div className="display-ques-ans-submit">
          {textAreaVisible && (<button onClick={handleSubmitAnswer}>Submit</button>)}
          {textAreaVisible && (<button onClick={handletexAreaVisisble}>Cancel</button>)}
        </div>
      </div>
    </div>
  );
}
