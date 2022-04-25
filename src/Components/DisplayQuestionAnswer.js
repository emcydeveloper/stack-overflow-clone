import { Fragment } from "react";
import { useState } from "react";
import "./style.css";

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


export default function DisplayQuestionAnswer({
  questionId,
  getInfo,
  addAnswer,
}) {
  let userID = 1;

  let [textAreaValue, setTextAreaValue] = useState("");
  let [textAreaVisible, setTextAreaVisible] = useState(false);
  let [votes, setVotes] = useState(0);
  

  let handletexAreaVisisble = () => {
    setTextAreaVisible((prevState) => !prevState);
    setTextAreaValue("");
  };
  let handleGetAnswer = (event) => {
    setTextAreaValue(event.target.value);
  };
  let handleSubmitAnswer = () => {
    addAnswer({
      type: "answer",
      createdBy: userID,
      questionID: questionId,
      createdOn: `${new Date(Date.now()).getDate()}/${
        new Date(Date.now()).getMonth() + 1
      }/${new Date(Date.now()).getFullYear()}`,
      value: textAreaValue,
    });
    setTextAreaVisible((prevState) => !prevState);
    setTextAreaValue("");
  };
  let handleLikeCount = () => {
    setVotes((prevState) => prevState + 1);
  };
  let handleDislikeCount = () => {
    setVotes((prevState) => prevState - 1);
  };

  // useEffect(()=>console.log(textAreaValue),[textAreaValue])
  //{type:"question",createdBy:1,questionID:1,createdOn:"date",value:"What is my Name"}

  return (
    <div className="display-ques-ans">
      {getInfo.map((getValue, i) => (
        <Fragment key={i}>
          {getValue.type === "question" && (
            <div className="display-ques-ans-ques">
              <div className="display-ques-ans-votes"><KeyboardArrowUpOutlinedIcon onClick={handleLikeCount} />{votes}<KeyboardArrowDownOutlinedIcon onClick={handleDislikeCount} /></div>
              
              <div className="ques">
                <p>{getValue.value}</p>
                <div className="ques-info">Submitted on {getValue.createdOn} by {getValue.createdBy}</div>
                </div>
              
              {/* {getValue.type}:- */}
            </div>
          )}

          {getValue.type === "answer" && (
            <div className="display-ques-ans-ans">
              <div className="ans">
                <p>{getValue.value}</p>
              </div>
              
              <div className="ans-info">Submitted on {getValue.createdOn} by {getValue.createdBy}</div>
              
            </div>
          )}
        </Fragment>
      ))}
      <div className="display-ques-ans-actions">
        {textAreaVisible && (
          <textarea
            className="display-ques-ans-txtarea"
            value={textAreaValue}
            onChange={handleGetAnswer}
          ></textarea>
        )}
        {!textAreaVisible && (
          <button onClick={handletexAreaVisisble}>Answer</button>
        )}
        <div className="display-ques-ans-submit">
          {textAreaVisible && (
            <button onClick={handleSubmitAnswer}>Submit</button>
          )}
          {textAreaVisible && (
            <button onClick={handletexAreaVisisble}>Cancel</button>
          )}
        </div>
      </div>
    </div>
  );
}
