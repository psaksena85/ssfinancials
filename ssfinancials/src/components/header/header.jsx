import { NavLink } from "react-router-dom";
import './header.scss'; 

function Header() {
  return (
    <header>
      <div className="wrapper">
        <h1>SS Financials</h1>
        <nav>
          <NavLink to="/" style={linkStyle}>Home</NavLink> |
          <NavLink to="/products" style={linkStyle}>Products</NavLink> |
          <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  margin: "0 10px",
  fontSize: "18px",
};

export default Header;
