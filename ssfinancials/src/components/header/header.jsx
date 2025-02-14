import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { createClient } from "contentful";
import "./header.scss";

const SPACE_ID = "9b3lonhnb5ls"; // Replace with your Space ID
const ACCESS_TOKEN = "rQl4ijlf6w6nQgpDtrrS8ttff1Og_FcyjUUPpQkGGjM"; // Replace with your Access Token
const GRAPHQL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master`;


function Header({headerdata}) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Render navigation item with children (sub-menu)
  // Render navigation item with children (sub-menu)
  const renderNavItem = (item) => {
    return (
      <div key={item.label} className="nav-item">
        <NavLink to={item.url} className="nav-link">
          {item.label}
        </NavLink>
        {/* Render dropdown for child pages if they exist */}
        {item.childrenCollection?.items?.length > 0 && (
          <div className="dropdown">
            {item.childrenCollection.items.map((child, index) => (
              <NavLink key={index} to={child.url} className="dropdown-item">
                {child.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        {/* Logo from Contentful */}
        <img
          src={`${headerdata.logo.url}`}  // Add 'https:' to the URL
          alt="Logo"
          className="header__logo"
        />

        {/* Mobile Menu Toggle */}
        <div className="header__mobile-icons" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg className="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <g transform="translate(20.464 -51.66) rotate(45)">
                <rect width="48" height="6" transform="translate(32 48)"></rect>
                <rect width="48" height="6" transform="translate(53 75) rotate(-90)"></rect>
              </g>
            </svg>
          ) : (
            <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <g transform="translate(-32 -27)">
                <rect width="48" height="6" transform="translate(32 34)"></rect>
                <rect width="48" height="6" transform="translate(32 48)"></rect>
                <rect width="48" height="6" transform="translate(32 62)"></rect>
              </g>
            </svg>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
          {headerdata.navigationMenuCollection.items.map((item, index) => renderNavItem(item))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
