import { BiSolidSmile } from "react-icons/bi";
import { MdMenuBook } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";

import "./index.css";
import LoginForm from "../LoginForm";

const UserAcca = () => (
  <div className="user-container">
    <div className="container-left">
      <h1 className="user-heading">Become ACCA in 18 months</h1>
      <p className="user-paragraph">
        Acquire globally recognized accountancy qualification, ACCA (also called
        as Global CA), and get placed in top MNCs & Big4s.
      </p>
      <div className="user-containers">
        <div className="all-container">
          <div className="emoji-container">
            <BiSolidSmile className="emoji" />
            <h1 className="emoji-heading">3,11,705</h1>
          </div>
          <p className="emoji-paragraph">Registered Users</p>
        </div>
        <div className="all-container">
          <div className="emoji-container">
            <MdMenuBook className="emoji" />
            <h1 className="emoji-heading">92,608</h1>
          </div>
          <p className="emoji-paragraph">Courses Enrolled</p>
        </div>
        <div className="all-container">
          <div className="emoji-container">
            <IoLogoYoutube className="emoji" />
            <h1 className="emoji-heading">4,73,76,119</h1>
          </div>
          <p className="emoji-paragraph">Minutes Watched</p>
        </div>
        <div className="all-container">
          <div className="emoji-container">
            <MdPeopleAlt className="emoji" />
            <h1 className="emoji-heading">8Experts</h1>
          </div>
          <p className="emoji-paragraph">Faculty</p>
        </div>
      </div>
      <div className="button-container">
        <button type="button" className="left-button">
          DOWNLOAD BROCHURE
        </button>
        <div className="right-container">
          <p className="right-container-paragraph">SILVER LEARNING PARTNER</p>
          <p className="acca">ACCA</p>
        </div>
      </div>
    </div>
    <LoginForm />
  </div>
);

export default UserAcca;
