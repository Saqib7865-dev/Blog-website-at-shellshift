/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/readBlog")
      .then((response) => {
        setBlogs(response);
        console.log("Blogs are: ", blogs);
      })
      .catch((error) => console.log(error));
  }, [blogs]);
  return (
    <div className={`homeContainer mx-auto py-7 flex`}>
      <div className="recentCards w-8/12 p-3 ">
        <h1 className="mb-5 font-serif  font-bold text-2xl px-4">
          <p className="cursor-pointer hover:text-teal-500 inline">
            Recent Blogs
          </p>
        </h1>
        <div className=" container w-full cards d-flex justify-evenly flex-wrap items-center overflow-y-scroll h-screen py-5">
          {blogs.length === 0 ? (
            <>
              <div>No record found</div>
              <Link to="/create" className="btn btn-success ms-3">
                Create Blog +
              </Link>
            </>
          ) : (
            blogs.data.map((data, index) => {
              return (
                <div className="card" key={index} style={{ width: "18rem" }}>
                  <Link className="btn btn-success" to="/create">
                    Add +
                  </Link>
                  {/* <img src="..." className="card-img-top" alt="..." /> */}
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.content}</p>
                    <Link to="/Update" className="btn btn-primary">
                      Update
                    </Link>
                    <button className="btn btn-danger ms-2">Delete</button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
