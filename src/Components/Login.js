import SignupHeader from "./SignupHeader";
// import userInfo from "../DataSource/UserInfo.js";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const successLogin = useHistory();
  let [getData,setGetData]=useState([])


  useEffect(function(){
    fetch("https://6248a7b220197bb4626b9de5.mockapi.io/userinfo")
    .then(res => res.json())
    .then(data => setGetData(data))
  },[])



  const [loginUser, setLoginUser] = useState({userName:""});
  const [validation, setvalidation] = useState({
    isuser: false,
    userId: null,
    userName: "",
  });

  function handleChange(event) {
    console.log(event.target.value);
    const { name, value } = event.target;
    setLoginUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault(event);
    UserValidate(loginUser);
  }

  function UserValidate(getUserName) {
    
    getData.find((user) => {
      if (user.username === getUserName.userName) {
        setvalidation({
          isuser: true,
          userId: user.id,
          userName: user.username,
        });
        // successLogin("/",{loginId:1} )
        console.log(successLogin);
        // successLogin('/',{loginId: user.id})
        // successLogin.push("/user/" + user.id);
        successLogin.push("/home");
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
            name="userName"
            value={loginUser.userName}
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
