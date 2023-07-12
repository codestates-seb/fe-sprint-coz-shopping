import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">main</Link> /<Link to="/products/list">products list</Link> /
      <Link to="/bookmark">bookmark</Link>
    </header>
  );
}

export default Header;
