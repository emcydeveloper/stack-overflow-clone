import Header from "./Header";

export default function Comapny({userLogin}) {
  return (
    <div>
      <Header userLogin={userLogin}/>
      <h1>Comapny - {userLogin}</h1>
    </div>
  );
}
