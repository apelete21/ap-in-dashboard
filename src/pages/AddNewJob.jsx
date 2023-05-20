import React, { useState } from "react";
import { createPortal } from "react-dom";
import JobTemplate from "../components/template";
import { Section } from "../components/template/elements/section";

export default function AddNewJob() {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState([<Section />]);
  console.log(content);
  return (
    <>
      <>
        {showModal &&
          createPortal(
            <>
              <JobTemplate
                setShowModal={setShowModal}
                content={content}
                setContent={setContent}
              />
            </>,
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
              <input type="text" placeholder="Job title" />
            </div>
            <div className="input-job-element">
              <p className="input-element-title">Select a category</p>
              <select name="" id="">
                <option value="" default>
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
              <select name="" id="">
                <option defaultChecked disabled>
                  Select a type
                </option>
                <option value="Entry Level">Full Time</option>
              </select>
            </div>
            <div className="input-job-element">
              <p className="input-element-title">Seniority Level</p>
              <select name="" id="">
                <option defaultChecked disabled>
                  Select a level
                </option>
                <option value="Entry Level">Entry Level</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Seniority Level">Seniority Level</option>
              </select>
            </div>
            <div className="input-job-element">
              <p className="input-element-title">Validity</p>
              <input type="date" />
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
