

export default function DisplayAnswers({answerData}){
    
    let { type, createdBy, createdOn, value } = answerData

    return(
        <div className="display-ans">
        <h2>{value}</h2>
        <div className="display-ans-accessories">
            <div>like</div>
            <div>dislike</div>
            <div>answered by: {createdBy}</div>
            <div>answered on: {createdOn}</div>

        </div>
        </div>
        )
}