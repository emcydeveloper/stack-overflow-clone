import "../Styles/home.css";
import { Link } from "react-router-dom";

export default function Header(loginId) {
  
  return (
    <div className="home-header">
      <h2>StackOverflow Clone</h2>
      {/* <h2>{loginId}</h2> */}
      <nav className="home-header-nav">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/questions">Questions</Link></li>
          <li><Link to="/searchtag">Search Tag</Link></li>
          <li><Link to="/company">Company</Link></li>
          <li><Link to="/userprofile">User Profile</Link></li>
        </ul>
      </nav>
    </div>
  );
}
