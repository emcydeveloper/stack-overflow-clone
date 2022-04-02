import "../Styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <h2>StackOverflow Clone</h2>
      <nav className="header-nav">
        <h5>User Profile</h5>
        <h5>Questions</h5>
        <h5>Search Tag</h5>
        <h5>Company</h5>
      </nav>
    </div>
  );
}
