import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Customlink from "../customLink/CustomLink";
import "./Header.css";
const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="header">
      <nav className={`${menuIsOpen && "active"}`}>
        <Customlink
          onClick={() => setMenuIsOpen(false)}
          to="/home"
          className="nav-link"
        >
          Home
        </Customlink>
        <Customlink
          onClick={() => setMenuIsOpen(false)}
          to="/reviews"
          className="nav-link"
        >
          Reviews
        </Customlink>
        <Customlink
          onClick={() => setMenuIsOpen(false)}
          to="/dashboard"
          className="nav-link"
        >
          Dashboard
        </Customlink>
        <Customlink
          onClick={() => setMenuIsOpen(false)}
          to="/blogs"
          className="nav-link"
        >
          Blogs
        </Customlink>
        <Customlink
          onClick={() => setMenuIsOpen(false)}
          to="/about"
          className="nav-link"
        >
          About
        </Customlink>
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
