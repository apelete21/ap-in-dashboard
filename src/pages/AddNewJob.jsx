import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { JobTemplate } from "../components/template";
import { postJob } from "../requests/jobs";
import { AppContext } from "../Contexts/AppContext";
import { Helmet } from "react-helmet";

export default function AddNewJob() {
  const { setStatusMessage } = useContext(AppContext);

  const [showModal, setShowModal] = useState(false);
  const [job, setJob] = useState({
    title: "",
    category: "",
    location: "",
    enterprise: "",
    worktime: "",
    worktype: "",
    level: "",
    validity: "",
    description: "",
    details: "",
  });

  const handleChange = (value) => {
    setJob({
      ...job,
      ...value,
    });
  };

  const handleSubmit = async ({details}) => {
    const { data, ok } = await postJob({...job, details});
    if (ok) {
      setStatusMessage(data?.message);
      setShowModal(false);
    } else {
      alert(data?.message || "Failed!");
    }
    window.location = "/jobs"
  };

  const openTemplate = () => {
    if (
      job.title === "" ||
      job.category === "" ||
      job.description === "" ||
      job.enterprise === "" ||
      job.level === "" ||
      job.location === "" ||
      job.validity === "" ||
      job.worktime === "" ||
      job.worktype === ""
    )
      return alert("All fields are required!");
    setShowModal(true);
  };

  return (
    <>
    <Helmet>
      <title>Add a new job post</title>
    </Helmet>
      <>
        {showModal &&
          createPortal(
            <JobTemplate
              setShowModal={setShowModal}
              job={job}
              setJob={setJob}
              handleSubmit={handleSubmit}
            />,
            document.body
          )}
      </>
      <div className="add-new-job">
        <div className="add-new-job-title">
          <h1>Add a new job</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. ipsum
            dolor.
          </p>
        </div>

        <div className="add-new-job-form">
          <form action="">
            <div className="input-job-element">
              <p className="input-element-title">Job title</p>
              <input
                type="text"
                placeholder="Job title"
                onChange={(e) => handleChange({ title: e.target?.value })}
              />
            </div>
            <div className="input-job-element">
              <p className="input-element-title">Enterprise Name</p>
              <input
                type="text"
                placeholder="Enterprise Name"
                onChange={(e) => handleChange({ enterprise: e.target?.value })}
              />
            </div>
            <div className="input-job-element">
              <p className="input-element-title">Select a category</p>
              <select
                onChange={(e) => {
                  handleChange({ category: e.target.value });
                }}
              >
                <option defaultChecked>Select a category</option>
                <option value="Accountancy, Banking & Finance">Accountancy, Banking & Finance</option>
                <option value="Business, consultin & management">Business, consultin & management</option>
                <option value="Charity and volontary work">Charity and volontary work</option>
                <option value="Energy and utilities">Energy and utilities</option>
                <option value="Engeneering and manufacturing">Engeneering and manufacturing</option>
                <option value="Environment and agriculture">
                  Environment and agriculture
                </option>
                <option value="Healthcare">
                  Healthcare
                </option>
                <option value="Hospitality and events management">
                  Hospitality and events management
                </option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Law">
                  Law
                </option>
                <option value="Leisure, sport and tourism">
                  Leisure, sport and tourism
                </option>
                <option value="Marketting, advertising a,d PR">
                  Marketting, advertising a,d PR
                </option>
                <option value="Media and internet">
                  Media and internet
                </option>
                <option value="Property and contruction">
                  Property and contruction
                </option>
                <option value="Public services and administration">
                  Public services and administration
                </option>
                <option value="Recruiment and HR">
                  Recruiment and HR
                </option>
                <option value="Retail">
                  Retail
                </option>
                <option value="Sales">
                  Sales
                </option>
                <option value="Science and Pharmaceuticals">
                  Science and Pharmaceuticals
                </option>
                <option value="Social care">
                  Social care
                </option>
                <option value="Teacher training and education">
                  Teacher training and education
                </option>
                <option value="Transport and Logistics">
                  Transport and Logistics
                </option>
              </select>
            </div>
            <div className="input-job-element">
              <p className="input-element-title">Employment type</p>
              <select
                onChange={(e) => handleChange({ worktime: e.target?.value })}
              >
                <option defaultChecked>Select a time</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
            </div>
            <div className="input-job-element">
              <p className="input-element-title">Work Type</p>
              <select
                onChange={(e) => handleChange({ worktype: e.target?.value })}
              >
                <option defaultChecked>Select a type</option>
                <option value="On Site">On Site</option>
                <option value="Remote">Remote</option>
                <option value="Hybride">Hybride</option>
              </select>
            </div>
            <div className="input-job-element">
              <p className="input-element-title">Job location</p>
              <input
                type="text"
                placeholder="Job location"
                onChange={(e) => handleChange({ location: e.target?.value })}
              />
            </div>
            <div className="input-job-element">
              <p className="input-element-title">Seniority Level</p>
              <select
                onChange={(e) => handleChange({ level: e.target?.value })}
              >
                <option defaultChecked>Select a level</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Seniority Level">Seniority Level</option>
              </select>
            </div>
            <div className="input-job-element">
              <p className="input-element-title">Validity</p>
              <input
                type="date"
                onChange={(e) =>
                  handleChange({ validity: e?.target?.valueAsDate })
                }
              />
            </div>
            <div className="input-job-element">
              <p className="input-element-title">Description</p>
              <input
                type="text"
                placeholder="Here goes the description..."
                onChange={(e) => handleChange({ description: e.target?.value })}
              />
            </div>
          </form>
        </div>

        <div className="add-job-btn">
          <span className="btn btn_secondary" onClick={openTemplate}>
            <span>Next</span>
          </span>
        </div>
      </div>
    </>
  );
}
