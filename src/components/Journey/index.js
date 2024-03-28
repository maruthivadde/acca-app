import LoginForm from "../LoginForm";

import "./index.css";

const Journey = () => (
  <div className="journey-container">
    <div className="journey-left-container">
      <h1 className="journey-heading">
        Kick off your ACCA Prep Journey with IndigoLearn
      </h1>
      <p className="journey-paragraph">
        Sign-in and get instant acccess to our FREE Courses
      </p>
      <div className="right-container">
        <p className="right-container-paragraph">SILVER LEARNING PARTNER</p>
        <p className="acca">ACCA</p>
      </div>
    </div>
    <LoginForm />
  </div>
);

export default Journey;
