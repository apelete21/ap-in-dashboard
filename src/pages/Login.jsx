import React, { useContext, useRef } from "react";
import { ErrorParagraph } from "../components/ErrorParagraph";
import { AppContext } from "../Contexts/AppContext";
import { icons } from "../service/icons";
import { Helmet } from "react-helmet";
import { LoadingComp } from "../components/loading";
import { loginMethod } from "../requests/login";

export default function Login() {
  const { loginError, userLoadingState, setisUserLoggedIn, setUserLoadingState, isUserLoggedIn, setLoginError, setUser } =
    useContext(AppContext);
  const email = useRef("");
  const password = useRef("");

  const handleUserLogin = async (loginData) => {
    setUserLoadingState(true);
    const { user, token, ok, message } = await loginMethod(loginData);
    if (ok) {
      setUser(user);
      localStorage.setItem("user", token);
      // setTimeout(() => {
      setisUserLoggedIn(true);
      // }, 1000);
      // setTimeout(() => {
      //   setUserLoadingState(false);
      // }, 3000);
    } else {
      setLoginError(message);
    }
    // setTimeout(() => {
    //   setUserLoadingState(false);
    // }, 3000);
  };

  const HandleLogin = async (e) => {
    e.preventDefault();
    const loginData = {
      email: email.current?.value,
      password: password.current?.value,
    };
    await handleUserLogin(loginData);
  };

  return (
    <>
      <Helmet>
        <title>Login | Dashboard AP'IN</title>
      </Helmet>
      {(!isUserLoggedIn) ?
        <>
          {!userLoadingState ? (
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
                          ref={email}
                          // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                          // minLength={"5"}
                          placeholder="Email"
                          required
                        />
                      </div>

                      <div className="input-job-element">
                        <input
                          type="password"
                          ref={password}
                          placeholder="Password"
                          // minLength={"5"}
                          // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}"
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
          ) : <LoadingComp scale={.15} />}
        </>
        : <LoadingComp scale={0.15} />}
    </>
  );
}

