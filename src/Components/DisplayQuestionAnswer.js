import { Fragment } from "react";
import { useState } from "react";
import "./style.css";

export default function DisplayQuestionAnswer({ questionId,getInfo, addAnswer }) {
  let userID = 1;

  let [textAreaValue, setTextAreaValue] = useState("");
  let [textAreaVisible, setTextAreaVisible] = useState(false);
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(like);

  let handletexAreaVisisble = () => {setTextAreaVisible((prevState) => !prevState);setTextAreaValue("");};
  let handleGetAnswer = (event) => {setTextAreaValue(event.target.value);};
  let handleSubmitAnswer = () => {
    addAnswer({
      type: "answer",
      createdBy: userID,
      questionID: questionId,
      createdOn: `${new Date(Date.now()).getDate()}/${new Date(Date.now()).getMonth()+1}/${new Date(Date.now()).getFullYear()}`,
      value: textAreaValue,
    });
    setTextAreaVisible((prevState) => !prevState);
    setTextAreaValue("");
  };
  let handleLikeCount = ()=>{setLike((prevState)=>prevState+1)}
  let handleDislikeCount = ()=>{setDislike((prevState)=>prevState-1)}

  // useEffect(()=>console.log(textAreaValue),[textAreaValue])
  //{type:"question",createdBy:1,questionID:1,createdOn:"date",value:"What is my Name"}

  return (
    <div className="display-ques-ans">
      {getInfo.map((getValue, i) => (
        <Fragment key={i}>

          {getValue.type === "question" && (
            <div className="display-ques-ans-ques">
               <div className="ques-info">
                <div><p>Created by:-</p><span>{getValue.createdBy}</span></div> 
                <div><span>{like}</span><p><button onClick={handleLikeCount}>Like</button></p></div>
                <div><span>{dislike}</span><p><button onClick={handleDislikeCount}>Dislike</button></p></div>
                <div><p>Created on:-</p><span>{getValue.createdOn}</span></div>
                
              </div>

             {/* <div className="ques-info">Created By:-{getValue.createdBy} Created on:-{getValue.createdOn}</div> */}
              <div className="ques">{getValue.value}</div>
              {/* {getValue.type}:- */}
            </div>
          )}

          {getValue.type === "answer" && (
            <div className="display-ques-ans-ans">
              <div className="ans"><p>{getValue.value}</p></div>
              <div className="ans-info">
                <div><p>Answered by:-</p><span>{getValue.createdBy}</span></div> 
                {/* <div><span>{count}</span><p><button onClick={handleLikeCount}>Like</button></p></div>
                <div><span>{count}</span><p><button onClick={handleDislikeCount}>Dislike</button></p></div> */}
                <div><p>Answered on:-</p><span>{getValue.createdOn}</span></div>
                
              </div>
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
