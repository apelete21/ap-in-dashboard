import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function NewPost() {

  const [showModal, setShowModal] = useState(false);

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
          <input type="text" ref={title} placeholder="Article title" />
        </div>
        <br />
        <div className="input-job-element">
          <p className="input-element-title">Select a category</p>
          <select name="" id="">
            <option value="" defaultChecked>
              Select a category
            </option>
            <option value="Process improvment">Design Marketing</option>
            <option value="SEO">SEO</option>
            <option value="Hosting solution">Hosting solution</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Graphic design">Graphic design</option>
            <option value="Branding and packaging">
              Branding and packaging
            </option>
          </select>
        </div>
        <br />
        <div className="input-job-element">
          <p className="input-element-title">Author</p>
          <input type="text" ref={author} placeholder="Author" />
        </div>
      </form>

      <div className="add-job-btn">
        <Link className="btn btn_secondary" to={`#`}>
          <span>Next</span>
        </Link>
      </div>
    </>
  );
}
