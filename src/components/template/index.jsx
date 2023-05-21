import React, { useState } from "react";
import "./template.css";
import Section from "./elements/section";

export default function JobTemplate({ setShowModal }) {
  const modifyElement = (id) => {
    document.querySelector(`.${id}`).toggleAttribute("contenteditable");
  };

  const newParagraphs = (fn) => {
    fn();
  };

  const [content, setContent] = useState([
    <Section modifyElement={modifyElement} newParagraphs={newParagraphs} />,
  ]);

  const addSection = () => {
    setContent([
      ...content,
      <Section modifyElement={modifyElement} newParagraphs={newParagraphs} />,
    ]);
  };

  return (
    <section className="modal-root">
      <div className="modal-closer" onClick={() => setShowModal(false)} />
      <div className="container">
        <header>
          <div className="fluid-wrapper main-navigation bg_primary">
            <div className="offset-canva job-main-title">
              <h2 className="section--hero__title php_job">{"job?.title"}</h2>

              <div className="job_detail__banner">
                <div className="job_level_block">
                  <div className="level_title">Seniority Level</div>
                  <div className="level_year">{"job?.level"}</div>
                </div>
                <div className="job_time_block">
                  <div className="time_title">Employment type</div>
                  <div className="job_time">{"job?.time"}</div>
                </div>

                <div className="job_validity_block">
                  <div className="val_title">Validity</div>
                  <div className="val_year">{"job?.validity"}</div>
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
