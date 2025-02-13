import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { createClient } from "contentful";
import "./header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerData, setHeaderData] = useState(null);
  const [error, setError] = useState(null); // Add error state

  // Contentful API Client
  const client = createClient({
    space: "9b3lonhnb5ls",  // Replace with your Contentful Space ID
    environment: "master",
    accessToken: "rQl4ijlf6w6nQgpDtrrS8ttff1Og_FcyjUUPpQkGGjM",  // Replace with your Contentful Access Token
  });

  useEffect(() => {
    client
      .getEntry("4Bpk2XDXoTYHh1ujcz5L0G")  // Entry ID here
      .then((entry) => {
        setHeaderData(entry.fields);  // Directly access the fields object
      })
      .catch((error) => {
        setError("Error fetching asset: " + error.message);  // Handle any errors
      });
  }, []);

  if (error) return <div>{error}</div>;
  if (!headerData) return <div>Loading...</div>;

  // Render navigation item with children (sub-menu)
  const renderNavItem = (item) => {
    if (item.fields.children && item.fields.children.length > 0) {
      return (
        <div key={item.sys.id} className="nav-item">
          <span>{item.fields.label}</span>
          <div className="sub-menu">
            {item.fields.children.map((child, index) => (
              <NavLink key={index} to={child.fields.url} className="sub-nav-link">
                {child.fields.label}
              </NavLink>
            ))}
          </div>
        </div>
      );
    }
    return (
      <NavLink key={item.sys.id} to={item.fields.url} className="nav-link">
        {item.fields.label}
      </NavLink>
    );
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        {/* Logo from Contentful */}
        <img
          src={`https:${headerData.logo.fields.file.url}`}  // Add 'https:' to the URL
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
          {headerData.navigationMenu.map(renderNavItem)} {/* Render navigation items */}
        </nav>

        {/* Call to Action */}
        {headerData.cta && (
          <div className="cta">
            <NavLink to={headerData.cta.fields.url} className="cta-link">
              {headerData.cta.fields.label}
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
