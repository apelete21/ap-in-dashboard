import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function NewPost() {

  const title = useRef();
  const author = useRef();
 
  return (
    <>
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
          <input type="text" ref={title} placeholder="Article title" required />
        </div>
        <br />
        <div className="input-job-element">
          <p className="input-element-title">Select a category</p>
          <select name="" id="" required>
            <option value="" default disabled>
              Select a category
            </option>
          </select>
        </div>
        <br />
        <div className="input-job-element">
          <p className="input-element-title">Author</p>
          <input type="text" ref={author} placeholder="Author" required />
        </div>
      </form>

      <div className="add-job-btn">
        <Link
          className="btn btn_secondary"
          to={`#`}
        >
          <span>Next</span>
        </Link>
      </div>
    </>
  );
}
