import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "../service/icons";
import JobCard from "../components/JobCard";
import { allJobs } from "../requests/jobs";
import { allApplications } from "../requests/applications";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      if (isDataLoading) {
        const response = await allJobs();
        if (response?.ok) {
          setJobs(response.data);
        } else {
          setError("Something went wrong");
        }
        setIsDataLoading(false);
      }
    };
    getData();
  }, [jobs, isDataLoading]);

  

  return (
    <>
      <div className="list-of-jobs">
        <div className="job-list-title">
          <h1>List of jobs</h1>
        </div>

        <div className="jobs-search-bar">
          <form action="#">
            <div className="quotes-search-bar">
              <div className="search-bar-icon">
                <img src={icons.searchDark} alt="search icon" />
              </div>
              <input type="text" placeholder="Rechercher" />
              <button type="submit">Search</button>
            </div>
          </form>
        </div>

        <div className="jobs-available-number">
          {jobs?.length !== 0 && <p>{jobs?.length} Jobs available</p>}
          {error && <p> {error} </p>}
        </div>

        <div className="jobs-list-container">
          {jobs?.map((element, index) => {
            return <JobCard data={element} key={index} />;
          })}

          <div className="add-application-btn">
            <Link className="btn cs_btn btn_secondary" to={"/jobs/new"}>
              <span className="">
                <img src={icons.feather} alt="" />
              </span>
              <span>Add a new job</span>
            </Link>
          </div>
        </div>

        <div className="quote-pagination-controller">
          <div className="pagination-back-btn">
            <img src={icons.chevronLeft} alt="" />
          </div>
          <div className="controller-pages-number">
            <span className="selected">1</span>
            <span>2</span>
            <span>3</span>
            <span>...</span>
            <span>14</span>
          </div>
          <div className="pagination-forward-btn">
            <img src={icons.chevronRight} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
