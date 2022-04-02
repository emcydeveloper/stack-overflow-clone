import Header from "./Header";

export default function UserProfile({userLogin}) {
  return (
    <div>

      <Header userLogin={userLogin}/>
      <h1>UserProfile - {userLogin}</h1>
    </div>
  );
}
