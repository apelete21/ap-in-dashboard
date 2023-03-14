import React, { useContext, useRef } from "react";
import ErrorParagraph from "../components/ErrorParagraph";
import { AppContext } from "../Contexts/AppContext";
import { icons } from "../service/icons";

export default function Login() {
  const { UserLogin, loginError } = useContext(AppContext);
  const username = useRef("");
  const password = useRef("");

  const HandleLogin = (e) => {
    e.preventDefault();

    const loginData = {
      username: username.current?.value,
      password: password.current?.value,
    };
    UserLogin({ ...loginData });
  };

  return (
    <>
      <div className="body_wrapper login_page">
        <div className="img_container"></div>
        <div className="main_content">
          <div className="logo_box">
            <img className="logo" src={icons.lgDark} alt="" />
          </div>
          <div className="login_form_container">
            <div className="form_intro">
              <h1>Login</h1>
              <p>
                Enter your credentials to access your administration dashboard
              </p>
            </div>
            <form onSubmit={HandleLogin}>
              <div className="input-job-element">
                <input
                  type="text"
                  ref={username}
                  pattern=".{5,}"
                  minLength={"5"}
                  placeholder="Identifer"
                  required
                />
              </div>

              <div className="input-job-element">
                <input
                  type="password"
                  ref={password}
                  placeholder="Password"
                  minLength={"5"}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}"
                  required
                />
              </div>

              <button className="btn btn_secondary submit_btn">Login</button>
            </form>
            <ErrorParagraph error={loginError} />
          </div>
        </div>
      </div>
    </>
  );
}
