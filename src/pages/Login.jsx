import React, { useContext, useRef } from "react";
import ErrorParagraph from "../components/ErrorParagraph";
import { AppContext } from "../Contexts/AppContext";
import { icons } from "../service/icons";

export default function Login() {
  const { UserLogin, loginError, userLoadingState } = useContext(AppContext);
  const email = useRef("");
  const password = useRef("");

  const HandleLogin = (e) => {
    e.preventDefault();

    const loginData = {
      email: email.current?.value,
      password: password.current?.value,
    };
    UserLogin(loginData);
  };

  return (
    <>
      <div className="body_wrapper login_page">
        <div className="img_container"></div>
        {userLoadingState ? <div className="main_content">
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
                  ref={email}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  minLength={"5"}
                  placeholder="Email"
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
        </div> : <h2
          style={{
            height: "100%",
            width: "100%",
            display: "grid",
            padding: "1rem",
            alignContent: 'center',
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img src={icons.loader} alt="Loader" />
        </h2> }
      </div>
    </>
  );
}
