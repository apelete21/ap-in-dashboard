import React, { useState } from "react";
import "./template.css";
import Section from "./elements/section";

export default function JobTemplate({ setShowModal }) {
  const modifyElement = (element, id) => {
    console.log(id, element);
    if (element === "title") {
      document.querySelector(`.s-${id}`).toggleAttribute("contenteditable");
    }
    if (element === "paragraph") {
      document.querySelector(`.p-${id}`).toggleAttribute("contenteditable");
    }
    return;
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
      <Section
        modifyElement={modifyElement}
        newParagraphs={newParagraphs}
      />,
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
            <div className="header-pane">
              <div className="h1tag">
                <span className="label">H1</span>
              </div>
              <div className="h2tag">
                <span className="label">H2</span>
              </div>
              <div className="h3tag">
                <span className="label">H3</span>
              </div>
            </div>
            <div className="paragraph-pane">
              <div className="section">
                <span className="label" onClick={addSection}>
                  section
                </span>
              </div>
              <div className="paragraph">
                <span className="label" onClick={newParagraphs}>
                  paragraph
                </span>
              </div>
            </div>
            <div className="list-pane">
              <div className="list">
                <span className="label">list</span>
              </div>
            </div>
          </div>
        </div>
        <section className="offset-canva detailsContainer">{content}</section>
      </div>
    </section>
  );
}
