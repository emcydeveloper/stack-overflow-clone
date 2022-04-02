import { Link } from "react-router-dom";
import "../Styles/header.css";

export default function SignupHeader() {
  return (
    <div className="header">
      <h2>StackOverflow Clone</h2>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
