import Header from "./Header";

export default function SearchTag() {
  let  userLogin = 1;
  return (
    <div>
      <Header userLogin={userLogin}/>
      <h1>SearchTag - {userLogin}</h1>
    </div>
  );
}
