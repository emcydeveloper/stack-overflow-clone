import Header from "./Header";

export default function Comapny() {
  let  userLogin = 1;
  return (
    <div>
      <Header userLogin={userLogin}/>
      <h1>Comapny - {userLogin}</h1>
    </div>
  );
}
