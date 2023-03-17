import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Head from "../components/Headers/Head";
import Aside from "../components/Aside";
import Home from "../pages/Home";
import Nav from "../components/Nav";
import QuoteRequests from "../pages/QuoteRequests";
import Jobs from "../pages/Jobs";
import Newsletters from "../pages/Newsletters";
import Blog from "../pages/Blog";
import AddNewJob from "../pages/AddNewJob";
import ApplicationList from "../pages/ApplicationList";
import Login from "../pages/Login";
import { AppContext } from "../Contexts/AppContext";
import LoginHead from "../components/Headers/LoginHead";

function AdminRoutes() {
  const { isUserLoggedIn } = useContext(AppContext);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  if (isUserLoggedIn) {
    return (
      <>
        <Head />

        <div className="main_wrapper">
          <Aside />

          <div className="main">
            <Nav />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quote-requests" element={<QuoteRequests />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobs/new" element={<AddNewJob />} />
              <Route path="/jobs/applications" element={<ApplicationList />} />
              <Route path="/newsletters" element={<Newsletters />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
      <LoginHead />
      <Routes>
        <Route path={"*"} element={<Login />} />
      </Routes>
      </>
    );
  }
}

export default AdminRoutes;
