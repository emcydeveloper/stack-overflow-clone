

export default function DisplayQuestions({questionData}){
    let { type, createdBy, createdOn, value } = questionData

    return(
        <div className="display-ques">
        <h1>{createdBy} : {value}</h1>
        
        </div>
        )
}