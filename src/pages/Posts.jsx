import React, { useContext, useEffect, useState } from "react";
import { icons } from "../service/icons";
import PostCard from "../components/blog/PostCard";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Contexts/AppContext";
import { articleReq } from "../requests/article";
import { LoadingComp } from "../components/loading";
import { Helmet } from "react-helmet";

export default function Posts() {
  const { setStatusMessage } = useContext(AppContext);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  const deletePost = async (title) => {
    setIsLoading(true);
    try {
      const { data, ok } = await articleReq("POST", `delete/${title}`);
      if (ok) {
        setStatusMessage(data?.message);
        navigate("/blog")
      }
    } catch (error) {
      setStatusMessage(error?.message);
    }
  };

  useEffect(() => {
    (async () => {
      if (isLoading) {
        try {
          const { data, ok } = await articleReq("GET", "");
          if (ok) {
            setPosts(data);
          }
        } catch (error) {
          setError(true);
        }
      }
      setIsLoading(false);
    })();
  }, [posts, isLoading, setStatusMessage]);

  return (
    <>
      <Helmet>
        <title>Lists of blog posts</title>
      </Helmet>
      <br />
      <div className="job-list-title">
        <h1>List of Posts</h1>
      </div>
      <br />

      <div className="quotes-search-bar-container">
        <form onClick={e => e.preventDefault()}>
          <div className="quotes-search-bar">
            <input type="text" placeholder="Rechercher" onChange={e => setSearch(e?.target?.value)} />
            <button>
              <img src={icons.searchIcon} alt="search icon" />
            </button>
          </div>
        </form>
      </div>

      {!isLoading ? (<>
        <div className="jobs-available-number">
          <p>{posts?.length || 0} Posts available</p>
          {error && <p> {error} </p>}
        </div>
        <div>
          {posts?.length !== 0 &&
            posts?.filter((element) => {
              if (search === "") {
                return element;
              }
              if (search?.toLowerCase() !== "" && element.title?.toLowerCase().search(search?.toLowerCase()) !== -1) {
                return element;
              }
            })?.map((e, i) => {
              return <PostCard key={i} item={e} deletePost={deletePost} />;
            })}
        </div></>
      ) : (
        <LoadingComp scale={0.3} />
      )}
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
