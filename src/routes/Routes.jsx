import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Head from "../components/Headers/Head";
import Aside from "../components/Aside";
import Home from "../pages/Home";
import Nav from "../components/Nav";
import QuoteRequests from "../pages/QuoteRequests";
import Jobs from "../pages/Jobs";
import Newsletters from "../pages/Newsletters";
import Posts from "../pages/Posts";
import AddNewJob from "../pages/AddNewJob";
import ApplicationList from "../pages/ApplicationList";
import Login from "../pages/Login";
import { AppContext } from "../Contexts/AppContext";
import LoginHead from "../components/Headers/LoginHead";
import ErrorBoundary from "../components/Error/ErrorBoundary";
import Message from "../components/Message";
import ApplicationDetails from "../pages/ApplicationDetails";
import NewPost from "../pages/NewPost";

function AppRoutes() {
  const { isUserLoggedIn, statusMessage, JobApp } = useContext(AppContext);

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
        <ErrorBoundary>
          <Head />
          {JobApp !== null && <ApplicationDetails />}
          <div className="main_wrapper">
            <Aside />

            <div className="main">
              <Nav />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quote-requests" element={<QuoteRequests />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/jobs/new" element={<AddNewJob />} />
                <Route path="/jobs/:title" element={<ApplicationList />} />
                <Route path="/newsletters" element={<Newsletters />} />
                <Route path="/blog" element={<Posts />} />
                <Route path="/blog/new_post" element={<NewPost />} />
              </Routes>
            </div>
          </div>
          {statusMessage && <Message data={statusMessage} />}
        </ErrorBoundary>
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

export default AppRoutes;
