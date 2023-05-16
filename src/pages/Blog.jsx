import React, { useState } from "react";
import { icons } from "../service/icons";
import PostCard from "../components/blog/PostCard";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([1, 2, 3, 4, 5, 6]);
  const [error, setError] = useState();
  return (
    <>
      <br />
      <div className="job-list-title">
        <h1>List of Posts</h1>
      </div>
      <br />

      <div className="quotes-search-bar-container">
        <form>
          <div className="quotes-search-bar">
            <input type="text" placeholder="Rechercher" />
            <button>
              <img src={icons.searchIcon} alt="search icon" />
            </button>
          </div>
        </form>
      </div>

      <div className="jobs-available-number">
        {<p>{posts?.length || 0} Posts available</p>}
        {error && <p> {error} </p>}
      </div>
      <div>
        {posts?.length !== 0 &&
          posts?.map((e, i) => {
            return <PostCard key={i} data={e} />;
          })}
      </div>
      <div className="add-application-btn">
        <Link className="btn cs_btn btn_secondary" to={"/blog/new_post"}>
          <span className="">
            <img src={icons.feather} alt="" />
          </span>
          <span>Add a new post</span>
        </Link>
      </div>
    </>
  );
}
