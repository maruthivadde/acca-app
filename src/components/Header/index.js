import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { IoReorderThreeSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

import "./index.css";

const Header = () => (
  <nav className="nav-container">
    <div className="indigo-container">
      <h1 className="headings">
        <IoReorderThreeSharp />
        IndigoLearn
      </h1>
    </div>
    <div className="buy-courses-container">
      <h1 className="headings">
        BUY COURSES <FaCaretDown />
      </h1>
      <h1 className="headings">
        PROGRAMS <FaCaretDown />
      </h1>
      <h1 className="headings">FREE RESOURCES</h1>
    </div>
    <button type="button" className="button-logo">
      <FaUserCircle />
      Log In/Sing Up
    </button>
  </nav>
);

export default Header;
