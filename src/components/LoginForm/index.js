import { useState } from "react";

import { MdVerified } from "react-icons/md";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isClick, setIsClick] = useState(false);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onSubmitButton = () => {
    setMessage("Submit Success");
    setIsClick(true);
  };

  return (
    <>
      {isClick && name.length > 0 ? (
        <div className="success-container">
          <MdVerified className="success-emoji" />
          <h2 className="success-heading">{message}</h2>
        </div>
      ) : (
        <form className="form-group form-container" onSubmit={onSubmitButton}>
          <h2 className="login-heading">Aspiring to be an ACCA?</h2>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
            value={name}
            onChange={onChangeName}
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control mt-3"
            value={email}
            onChange={onChangeEmail}
          />
          <input
            type="number"
            placeholder="Enter Mobile Number*"
            className="form-control mt-3"
          />
          <button type="submit" className="call-back-button mt-3">
            Request Call Back
          </button>
        </form>
      )}
    </>
  );
};

export default LoginForm;
