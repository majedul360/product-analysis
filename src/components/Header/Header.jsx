import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="header">
      <nav className={`${menuIsOpen && "active"}`}>
        <Link
          onClick={() => setMenuIsOpen(false)}
          to="/home"
          className="nav-link"
        >
          Home
        </Link>
        <Link
          onClick={() => setMenuIsOpen(false)}
          to="/reviews"
          className="nav-link"
        >
          Reviews
        </Link>
        <Link
          onClick={() => setMenuIsOpen(false)}
          to="/dashboard"
          className="nav-link"
        >
          Dashboard
        </Link>
        <Link
          onClick={() => setMenuIsOpen(false)}
          to="/blogs"
          className="nav-link"
        >
          Blogs
        </Link>
        <Link
          onClick={() => setMenuIsOpen(false)}
          to="/about"
          className="nav-link"
        >
          About
        </Link>
      </nav>
      <FontAwesomeIcon
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        className="hambarger-menu"
        icon={faBars}
      />
    </div>
  );
};

export default Header;
