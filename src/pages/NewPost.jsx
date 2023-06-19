import React, { useState } from "react";
import { createPortal } from "react-dom";
import { ArticleTemplate } from "../components/template";

export default function NewPost() {
  const [showModal, setShowModal] = useState(false);
  const [article, setArticle] = useState({
    title: "",
    bannerImg: "",
    category: "",
    author: "",
    details: "",
  });

  const handleChange = (data) => {
    setArticle({
      ...article,
      ...data,
    });
  };

  const handleShowModal = () => {
    const {title, category, author} = article
    if (title === "" || category === "" || author === "" ) {
      alert("All fields are required!");
    } else setShowModal(true);
  };

  return ( 
    <>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. ipsum
          dolor.
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
        <div className="input-job-element">
          <p className="input-element-title">Select a category</p>
          <select
            name=""
            id=""
            onChange={(e) => handleChange({ category: e.target?.value.toLowerCase().replace(" ", "-") })}
          >
            <option value="" defaultChecked>
              Select a category
            </option>
            <option value="SEO">Podcast</option>
            <option value="Hosting solution">Blog post</option>
            <option value="E-commerce">Press release</option>
          </select>
        </div>
        <br />
        <div className="input-job-element">
          <p className="input-element-title">Author</p>
          <input
            type="text"
            onChange={(e) => handleChange({ author: e.target?.value })}
            placeholder="Author"
          />
        </div>
      </form>

      <div className="add-job-btn">
        <span className="btn btn_secondary" onClick={handleShowModal}>
          <span>Next</span>
        </span>
      </div>
    </>
  );
}
