import Header from "./Header";

export default function SearchTag({userLogin}) {
  return (
    <div>
      <Header userLogin={userLogin}/>
      <h1>SearchTag - {userLogin}</h1>
    </div>
  );
}
