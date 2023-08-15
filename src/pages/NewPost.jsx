import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArticleTemplate } from "../components/template";
import { articleReq, audioReq } from "../requests/article";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function NewPost() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [optionalField, setOptionalField] = useState(false);
  const audioFile = useRef(null);
  const [article, setArticle] = useState({
    title: "",
    bannerImg: "",
    category: "",
    details: "",
    description: "",
  });

  const handleChange = (data) => {
    setArticle({
      ...article,
      ...data,
    });
    if (data?.category) {
      if (data?.category === "podcast") {
        setOptionalField(true);
      } else if (data?.category !== "podcast") {
        setOptionalField(false);
      }
    }
  };

  const handleSubmitPodcast = async () => {
    /**
     * create a route in the api to handle the audio files in one side and automaticaly
     * resend the response to handle the post publication
     */
    const formData = new FormData();
    formData.append("file", audioFile?.current?.files[0]);
    const { data, ok } = await audioReq("POST", "upload", formData);
    if (!ok) return alert(data?.message || "An error occured!");
    const res = await articleReq("POST", "upload", {
      ...article,
      audiofile: data?.srcUrl,
    });
    if (!res?.ok) return alert(res?.data?.message || "An error occured!");
    navigate("/blog");
  };

  const nextStepOrSubmit = async () => {
    const { title, category, author } = article; 
    if (
      category === "podcast".toLowerCase().replace(" ", "-") &&
      audioFile?.current?.files.length !== 0
    ) {
      await handleSubmitPodcast();
    } else if (category !== "podcast".toLowerCase().replace(" ", "-")) {
      if (title === "" || category === "" || author === "") {
        alert("All fields are required!");
      } else setShowModal(true);
    }
  };

  return (
    <>
    <Helmet>
      <title>Add a new blog post</title>
    </Helmet>
      {showModal &&
        createPortal(
          <ArticleTemplate
            setShowModal={setShowModal}
            article={article}
            setArticle={setArticle}
          />,
          document.body
        )}
      <div className="add-new-job-title">
        <h1>Add a new article</h1>
        <p>
          Please fill these fields before continue the process. 
          This post can not be editable again. <br /> Accept the last prompt after checking the content of your post is correctly filled!
        </p>
      </div>
      <br />
      <br />
      <form action="">
        <div className="input-job-element">
          <p className="input-element-title">Article title</p>
          <input
            type="text"
            onChange={(e) => handleChange({ title: e.target?.value })}
            placeholder="Article title"
          />
        </div>
        <br />
        <br />
        <div className="input-job-element">
          <p className="input-element-title">Select a category</p>
          <select
            name=""
            id=""
            onChange={(e) =>
              handleChange({
                category: e.target?.value.toLowerCase().replace(" ", "-"),
              })
            }
          >
            <option value="" defaultChecked>
              Select a category
            </option>
            <option value="Podcast">Podcast</option>
            <option value="Blog post">Blog post</option>
            <option value="Press release">Press release</option>
          </select>
        </div>

        {optionalField && (
          <>
            <br />
            <div className="input-job-element">
              <p className="input-element-title">Description preview</p>
              <input
                type="text"
                onChange={(e) => handleChange({ description: e.target?.value })}
                placeholder="Description"
              />
            </div>
            <br />
            <div className="input-job-element">
              <p className="input-element-title">Upload an audio file</p>
              <input
                type="file"
                ref={audioFile}
                placeholder="Upload an audio file"
              />
            </div>
          </>
        )}
      </form>

      <div className="add-job-btn">
        <span className="btn btn_secondary" onClick={nextStepOrSubmit}>
          <span>Next</span>
        </span>
      </div>
    </>
  );
}
