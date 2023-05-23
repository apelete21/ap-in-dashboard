import React, { useState } from "react";
import "./template.css";
import Section from "./elements/section";
import moment from "moment";
import { cleanDOM } from "./methods";

export default function JobTemplate({ job, setJob, setShowModal }) {
  const [content, setContent] = useState([
    <Section />,
  ]);

  const addSection = () => {
    setContent([
      ...content,
      <Section />,
    ]);
  };

  const publishJob = () => {
    cleanDOM()
    // document.querySelector(".do")
  }

  return (
    <section className="modal-root">
      <div className="modal-closer" onClick={() => setShowModal(false)} />
      <div className="container">
        <span
          className="btn modal-btn btn-closer"
          onClick={() => setShowModal(false)}
        >
          close
        </span>
        <span
          className="btn modal-btn btn-submit"
          onClick={publishJob}
        >
          submit
        </span>
        <header>
          <div className="fluid-wrapper main-navigation bg_primary">
            <div className="offset-canva job-main-title">
              <h2 className="section--hero__title php_job">
                {job?.title || "any"}
              </h2>

              <div className="job_detail__banner">
                <div className="job_level_block">
                  <div className="level_title">Seniority Level</div>
                  <div className="level_year">{job?.level || "any"}</div>
                </div>
                <div className="job_time_block">
                  <div className="time_title">Employment type</div>
                  <div className="job_time">{job?.time || "any"}</div>
                </div>

                <div className="job_validity_block">
                  <div className="val_title">Validity</div>
                  <div className="val_year">
                    {moment(job?.validity)?.format("ll") || "any"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="editor offset-canva">
          <div className="editor-pane">
            <div className="paragraph-pane">
              <div className="section">
                <span className="label" onClick={addSection}>
                  Add a new section
                </span>
              </div>
            </div>
          </div>
        </div>
        <section className="offset-canva detailsContainer">{content}</section>
      </div>
    </section>
  );
}
