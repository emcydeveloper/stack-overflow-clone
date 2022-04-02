import { useParams } from "react-router-dom";
import BodyContent from "./BodyContent";

import Header from "./Header";

export default function Hometest() {
  // const { loginId } = useParams();
  // console.log(loginId);

  return (
    <div className="home-container">
      <Header />
      <BodyContent />
      
    </div>
  );
}
