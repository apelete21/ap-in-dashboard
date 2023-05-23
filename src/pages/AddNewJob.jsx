import React, { useState } from "react";
import { createPortal } from "react-dom";
import JobTemplate from "../components/jobTemplate";

export default function AddNewJob() {
  const [showModal, setShowModal] = useState(false);
  const [job, setJob] = useState({
    title: "",
    category: "",
    enterprise: "",
    time: "",
    level: "",
    validity: "",
    lowParagraph: "",
    details: "",
  });

  const handleChange = (value) => {
    setJob({
      ...job,
      ...value,
    });
    console.log(value);
  };

  return (
    <>
      <>
        {showModal &&
          createPortal(
            <JobTemplate setShowModal={setShowModal} job={job} setJob={setJob} />,
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
                onChange={(e) => handleChange({ category: e.target?.value })}
              >
                <option value={null} defaultChecked>
                  Select a category
                </option>
                <option value="Process improvment">Process improvement</option>
                <option value="SEO">SEO</option>
                <option value="Hosting solution">Hosting solution</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Graphic design">Graphic design</option>
                <option value="Branding and packaging">
                  Branding and packaging
                </option>
              </select>
            </div>
            <div className="input-job-element">
              <p className="input-element-title">Employment type</p>
              <select onChange={(e) => handleChange({ time: e.target?.value })}>
                <option defaultChecked>Select a type</option>
                <option value="Entry Level">Full Time</option>
              </select>
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
                onChange={(e) => handleChange({ lowParagraph: e.target?.value })}
              />
            </div>
          </form>
        </div>

        <div className="add-job-btn">
          <span
            className="btn btn_secondary"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <span>Next</span>
          </span>
        </div>
      </div>
    </>
  );
}
