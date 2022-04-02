import { useParams } from "react-router-dom";

import Header from "./Header";

export default function Home() {
  const { loginId } = useParams();
  console.log(loginId);

  return (
    <div>
      
      <Header />
      <h1>Logged in successfully!! Welcome to home page !!!!!</h1>
    </div>
  );
}
