import Header from "./Header";

export default function Question({userLogin}) {
  return (
    <div>
      {" "}
      <Header userLogin={userLogin}/>
      <h1>questions - {userLogin}</h1>
    </div>
  );
}
