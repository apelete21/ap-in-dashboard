import "./template.css";
import React, { useState } from "react";
import Section from "./elements/job/section";
import moment from "moment";
import { cleanJobDOM } from "./methods";
import { createPortal } from "react-dom";
import { PromptPopUp } from "./elements/prompt";
import { Title } from "./elements/blog/title";
import { Paragraph } from "./elements/blog/paragraph";

export function JobTemplate({ job, setJob, setShowModal, handleSubmit }) {
  const [content, setContent] = useState([<Section />]);
  const [submitPrompt, setSubmitPrompt] = useState(false);

  const addSection = () => {
    setContent([...content, <Section />]);
  };

  const publishJob = () => {
    setSubmitPrompt(true);
  };

  const Submit = () => {
    // DOM cleaning function twice
    cleanJobDOM();
    cleanJobDOM();

    let details = "";
    const elementsList = document.querySelector(".detailsContainer").childNodes;
    elementsList.forEach((element, index) => {
      details = details + element.outerHTML;
    });
    setJob({
      ...job,
      details,
    });
    handleSubmit({ details });
  };

  return (
    <>
      {submitPrompt &&
        createPortal(
          <PromptPopUp setSubmitPrompt={setSubmitPrompt} Submit={Submit} />,
          document.body
        )}
      <section className="modal-root">
        <div className="modal-closer" onClick={() => setShowModal(false)} />
        <div className="container">
          <span
            className="btn modal-btn btn-closer"
            onClick={() => setShowModal(false)}
          >
            close
          </span>
          <span className="btn modal-btn btn-submit" onClick={publishJob}>
            submit
          </span>
          <header className="bg-red">
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
                    <div className="job_time">{job?.worktime || "any"}</div>
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
    </>
  );
}

/********************************************
 ********************************************
 ********************************************/

export const ArticleTemplate = ({ article, setArticle, setShowModal }) => {
  const [content, setContent] = useState([
    <>
      <Title />
      <Paragraph />
    </>,
  ]);

  const addItem = (Item) => {
    setContent([...content, Item]);
  };

  const publishJob = () => {
    cleanJobDOM();
    console.log(document.querySelector(".detailsContainer").outerHTML);
  };
  return (
    <>
      <section className="modal-root">
        <div className="modal-closer" onClick={() => setShowModal(false)} />
        <div className="container">
          <span
            className="btn modal-btn btn-closer"
            onClick={() => setShowModal(false)}
          >
            close
          </span>
          <span className="btn modal-btn btn-submit" onClick={publishJob}>
            submit
          </span>
          <header className="bg-white">
            <div className="fluid-wrapper main-navigation">
              <>
                <div class="offset-canva story-main-title">
                  <h2 class="section--hero__title">
                    {article ? article?.title : "No title specified!"}
                  </h2>
                  <div class="news_details">
                    <div class="author_details">
                      <div class="author_title">Author:</div>
                      <div class="author_name">
                        {article ? article?.author : "Anonymous"}
                      </div>
                    </div>
                    <div class="date_details">
                      <div class="date_title">Date:</div>
                      <div class="date_name">{moment().format("LL")}</div>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </header>
          <div className="editor offset-canva">
            <div className="editor-pane">
              <div className="paragraph-pane">
                <div className="section">
                  <span className="label" onClick={() => addItem(<Title/>)}>
                    Title
                  </span>
                </div>
                <div className="section">
                  <span className="label" onClick={() => addItem(<Paragraph/>)}>
                    Paragraph
                  </span>
                </div>
                <div className="section">
                  <span className="label" onClick={() => {}}>
                    Image
                  </span>
                </div>
              </div>
            </div>
          </div>
          <section className="offset-canva detailsContainer">
            <div className="news--text-block">{content}</div>
          </section>
        </div>
      </section>
    </>
  );
};
