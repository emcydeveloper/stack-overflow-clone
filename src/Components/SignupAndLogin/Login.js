import SignupHeader from "./SignupHeader";
import userInfo from "../DataSource/UserInfo.js";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const successLogin = useHistory();

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
      if (user.username === getUserName.username) {
        setvalidation({
          isuser: true,
          userId: user.id,
          userName: user.username,
        });
        // successLogin("/",{loginId:1} )
        console.log(successLogin);
        // successLogin('/',{loginId: user.id})
        successLogin.push("/user/" + user.id);
      }
      return "";
    });
  }

  return (
    <div className="login-conintainer">
      <SignupHeader />
      <div className="login">
        <h1>welcome</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User name"
            onChange={handleChange}
            name="username"
            value={loginUser.username}
          />
          <button>Login</button>
        </form>
        <h1>
          {validation.isuser ? "Login Successfull!!" : "Invalid username"}
        </h1>
      </div>
    </div>
  );
}
