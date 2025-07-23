/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  // Date object
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
      return "just now";
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
      return `${years} years ago`;
    }
  }
  useEffect(() => {
    axios
      .get("http://localhost:3005/readBlog")
      .then((response) => {
        setBlogs(response);
      })
      .catch((error) => console.log(error));
  }, [blogs]);

  return (
    <Layout>
      <div
        className={`homeContainer mx-auto min-h-screen flex items-center md:items-start justify-center flex-col xl:flex-row md:py-14 p-7`}
      >
        <div className="recentCards w-full xl:w-8/12 gap-y-5 flex flex-col">
          <h1 className="mb-5 font-bold text-4xl px-4 text-center">
            <p className="uppercase font-semibold inline text-4xl text-teal-500">
              Recent Blogs
            </p>
          </h1>
          <div className="w-full cards grid grid-cols-1 xl:grid-cols-2 place-items-center overflow-y-auto py-5 gap-4 max-h-screen scrollbar-hide">
            {blogs.length === 0 ? (
              <div>No blog found</div>
            ) : (
              blogs.data.map((data, index) => {
                const uploadedTime = formatUploadedTime(data.date);
                return (
                  <div
                    key={index}
                    className="card bg-white bg-base-100 w-full xl:max-w-[28rem] shadow h-fit rounded"
                  >
                    <figure>
                      <img
                        src={`http://localhost:3005/Images/${data.image}`}
                        alt={data.title}
                        className="rounded-t xl:max-h-64 w-full"
                      />
                    </figure>
                    <div className="card-body p-6 px-3 rounded-lg flex flex-col gap-y-3">
                      <h2 className="card-title text-xl font-semibold font-serif text-slate-800">
                        {data.title}
                      </h2>
                      <p className="text-justify text-base min-h-24">
                        {data.content.slice(0, 200)}...{" "}
                        <Link to={`/Blog/${data._id}`}>
                          <button className="btn text-blue-500 text-base">
                            Read More!
                          </button>
                        </Link>
                      </p>
                      <div className="card-date flex-col justify-end">
                        <p className="w-full text-end text-slate-500 text-sm">
                          {uploadedTime}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="mostViewCard w-full xl:w-4/12 p-3 border-l border-slate-200">
          <h1 className="mb-10 px-4">
            <p className="uppercase font-semibold inline text-2xl text-teal-500">
              Most Viewed Cards
            </p>
          </h1>
          <div className="impCard px-10 flex flex-col gap-y-4 max-h-screen overflow-y-auto overflow-x-hidden scrollbar-hide">
            {blogs.length === 0 ? (
              <div>No blog found</div>
            ) : (
              blogs.data.slice(0, 3).map((data, index) => {
                const uploadedTime = formatUploadedTime(data.date);
                return (
                  <div
                    key={index}
                    className="card bg-base-100 xl:w-96 shadow rounded bg-white"
                  >
                    <figure>
                      <img
                        src={`http://localhost:3005/Images/${data.image}`}
                        alt={data.title}
                        className="rounded-t"
                      />
                    </figure>
                    <div className="card-body p-6 px-3 rounded-lg flex flex-col gap-y-3">
                      <h2 className="card-title text-xl font-semibold font-serif text-slate-800">
                        {data.title}
                      </h2>
                      <p className="text-justify text-base">
                        {data.content.slice(0, 200)}...{" "}
                        <Link
                          to={`/Blog/${data._id}`}
                          className="cursor-pointer text-blue-500"
                        >
                          Read more
                        </Link>
                      </p>
                      <div className="card-date flex-col justify-end">
                        <p className="w-full text-end text-slate-800 text-sm">
                          {uploadedTime}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
