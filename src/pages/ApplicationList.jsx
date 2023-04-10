import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { icons } from "../service/icons";
import JobCard from "../components/JobCard";
import { getOneJob } from "../requests/jobs";
import ApplicationsTable from "../components/ApplicationsTable";

export default function ApplicationList() {
  const { title } = useParams();

  const [job, setJob] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      if (isDataLoading) {
        const response = await getOneJob(title);
        if (response.ok) {
          setJob(response.data);
          return setIsDataLoading(false);
        } else {
          setError("Something went wrong");
        }
        setIsDataLoading(false);
      }
    };
    getData();
  }, [job, isDataLoading, title]);

  return (
    <>
      <div className="list-of-application">
        {job !== {} ? (
          <JobCard className="mb-5" data={job} isDataLoading={isDataLoading} />
        ) : (
          <div> {error} </div>
        )}

        <ApplicationsTable setIsDataLoading={setIsDataLoading} isDataLoading={isDataLoading} jobId={job._id} />

        <div className="add-application-btn">
          <Link className="btn cs_btn btn_secondary" to="/jobs/new">
            <span className="">
              <img src={icons.feather} alt="" />
            </span>
            <span>Add a new job</span>
          </Link>
        </div>
      </div>
    </>
  );
}