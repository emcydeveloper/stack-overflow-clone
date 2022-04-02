import { useState } from "react";
import userInfo from "../DataSource/UserInfo.js";

export default function Login() {
  const [loginUser, setLoginUser] = useState("");
  const [validation, setvalidation] = useState({
    isuser: false,
    userId: null,
    userName: "",
  });

  function handleChange(event) {
    console.log(event.target.value);
    const { name, value } = event.target;
    setLoginUser((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault(event);

    UserValidate(loginUser);
  }

  function UserValidate(getUserName) {
    let getData = userInfo.data.users;
    getData.map((user) => {
      user.username === getUserName.username &&
        setvalidation({
          isuser: true,
          userId: user.id,
          userName: user.username,
        });
      return "";
    });
  }

  return (
    <div className="login">
      <h1>welcome</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="username"
          value={loginUser.username}
        />
        <button>Submit</button>
      </form>
      <h1>{validation.isuser ? "Login Successfull!!":"Invalid username"}</h1>
    </div>
  );
}
