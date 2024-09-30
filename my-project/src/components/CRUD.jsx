/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CRUD = () => {
  const [blogs, setBlogs] = useState([]);
  const handleDelete = (id) => {
    let flag = prompt(
      "Are you sure you want to delete this blog (Yes/No)?",
      "Yes"
    );
    console.log(flag);
    if (flag === "Yes") {
      axios
        .delete(`http://localhost:3005/deleteBlog/${id}`)
        .then((response) => console.log(response))
        .catch((err) => console.log(err.message));
    } else {
      return;
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3005/readBlog")
      .then((response) => setBlogs(response))
      .catch((err) => console.log(err));
  }, []);
  function formatUploadedTime(isoTimestamp) {
    const uploadedDate = new Date(isoTimestamp);
    const currentTime = new Date();
    const timeDiff = currentTime - uploadedDate;

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
      return "Just now";
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else if (days < 7) {
      return `${days} days ago`;
    } else if (weeks < 4) {
      return `${weeks} weeks ago`;
    } else if (months < 12) {
      return `${months} months ago`;
    } else {
      // If more than a week has passed, display the uploaded date
      return uploadedDate.toLocaleDateString();
    }
  }
  const navigator = useNavigate();
  function handleLogout() {
    localStorage.removeItem("loggedIn");
    navigator("/login");
  }
  return (
    <div className={`CRUDContainer mx-auto py-7 flex`}>
      <div className="recentCards p-3 ">
        <h1 className="mb-5 font-serif  font-bold text-2xl px-4">
          <p className="cursor-pointer hover:text-teal-500  inline">
            All Blogs
          </p>
        </h1>
        <Link
          to="/createBlog"
          className="min-w-[100px] inline-block mt-1 py-5  px-5 btn bg-green-400 font-bold text-white"
        >
          Create a new blog
        </Link>
        <div className="w-full cards gap-4 flex justify-evenly flex-wrap items-center py-5">
          {blogs.length === 0 ? (
            <div>No record found</div>
          ) : (
            blogs.data.map((item, index) => {
              const uploadedTime = formatUploadedTime(item.date);

              return (
                <div
                  key={index}
                  className="card bg-base-100 w-96 shadow-xl py-4"
                >
                  <figure>
                    <img
                      src={`http://localhost:3005/Images/${item.image}`}
                      alt="image"
                    />
                  </figure>
                  <div className="card-body p-3">
                    <h2 className="card-title font-bold text-2xl">
                      {item.title}
                    </h2>
                    <p className="pt-2 text-justify my-1">
                      {item.content.slice(0, 100)}
                    </p>
                    <div className="card-date text-end ">
                      <p className="w-full end px-5 pt-3">{uploadedTime}</p>
                    </div>
                    <div className="mt-2">
                      <Link
                        to={`/updateBlog/${item._id}`}
                        className="btn bg-green-400 px-4 py-2 rounded-md mr-2"
                      >
                        Update
                      </Link>
                      <button
                        className="btn bg-red-400 px-4 py-2 rounded-md mr-2"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <button
          onClick={handleLogout}
          className="min-w-[100px] inline-block mt-1 py-5  px-5 btn bg-green-400 font-bold text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default CRUD;
