import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <header className="header">
      <div id="logo">
        <Link to="/">mkct</Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Add a Blog</Link>
      </div>
    </header>
  );
};

export default Nav;
