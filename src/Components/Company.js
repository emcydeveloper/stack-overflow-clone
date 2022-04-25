import Header from "./Header";

export default function Comapny() {
  let userLogin = 1;
  let hiringInfo = [
    { companyName: "Zoho", hiringFor: "React Developer", noOfOpening: 10,jobDescription:["Should be a Developer","Should be a good good Developer"] },
    { companyName: "Google", hiringFor: "MERN Developer", noOfOpening: 100,jobDescription:["Should be a Developer1","Should be a good good Developer1"] },
  ];
  // let getCompany = hiringInfo.map((a)=>{return a})
  return (
    <div className="company">
      <Header userLogin={userLogin} />
      <h1>Comapny - {userLogin}</h1>
      <div className="company-content">
        {hiringInfo.map((getCompany,i) => (
          <div key={i} className="company-content-info">
            <div>{getCompany.companyName}</div>
            <div>{getCompany.hiringFor}</div>
            <p>
              <span>{getCompany.noOfOpening}</span>
            </p>
            <div className="jobDescriptions">
              <ul>
                {/* {console.log(getCompany.jobDescription.forEach((a)))} */}
              {getCompany.jobDescription.map((jd,i)=><li key={i}>{jd}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
