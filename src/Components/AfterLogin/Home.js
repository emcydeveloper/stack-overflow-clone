// import { Switch, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import BodyContent from "./BodyContent";


import Header from "./Header";

export default function Home({userLogin , setUserLogin}) {
  const { loginId } = useParams();
  setUserLogin(loginId)
  console.log(loginId);

  return (
    <div className="home-container">
      <h1>{loginId}</h1>
      <Header userinfo={loginId} />
      <BodyContent />
     
    </div>
  );
}
