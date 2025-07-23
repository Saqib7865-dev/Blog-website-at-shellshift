/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    axios
      .get("http://localhost:3005/readBlog")
      .then((response) => setBlogs(response))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

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
  return (
    <Layout>
      <div className={`BlogsContainer mx-auto py-7 flex`}>
        <div className="recentCards p-3 ">
          <h1 className="mb-5 font-serif font-bold text-4xl px-4">
            <p className="inline text-teal-400">All Blogs</p>
          </h1>

          <div className="w-full cards gap-3 px-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-5">
            {blogs.length === 0 ? (
              <div>No record found</div>
            ) : (
              blogs.data.map((data, index) => {
                const uploadedTime = formatUploadedTime(data.date);
                return (
                  <div
                    key={index}
                    className="card bg-base-100 w-full shadow rounded bg-white"
                  >
                    <figure>
                      <img
                        src={`http://localhost:3005/Images/${data.image}`}
                        alt={data.title}
                        className="xl:h-64 rounded-t w-full"
                      />
                    </figure>
                    <div className="card-body py-6 px-3 rounded-lg flex flex-col gap-y-3">
                      <h2 className="card-title text-xl font-semibold font-serif text-slate-800">
                        {data.title}
                      </h2>
                      <p className="text-justify text-base min-h-16">
                        {data.content.slice(0, 20)}...{" "}
                        <Link
                          to={`/blog/${data._id}`}
                          className="cursor-pointer text-blue-500"
                        >
                          Read more
                        </Link>
                      </p>
                      <div className="card-date flex-col justify-end">
                        <p className="w-full text-end text-slate-400 text-sm">
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
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded shadow-lg max-w-md w-full mx-4">
            <div className="card bg-base-100 rounded shadow">
              <figure>
                <img
                  src={modalData.Image}
                  alt={modalData.title}
                  className="max-h-96 rounded-t"
                />
              </figure>
              <div className="card-body p-4">
                <h1 className="mb-2">
                  <p className="uppercase font-semibold inline text-xl text-teal-500">
                    Recent Blogs
                  </p>
                </h1>
                <p className="min-h-24 overflow-hidden mb-4 text-base text-zinc-800 text-justify">
                  {modalData.content?.slice(0, 200)}...
                </p>

                <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2">
                  <button
                    className="btn btn-dark bg-zinc-700 text-white font-semibold px-4 py-2 rounded text-sm"
                    onClick={handleClose}
                  >
                    Close
                  </button>

                  <Link
                    to={`/blog/${modalData.id}`}
                    className="btn btn-success bg-teal-500 text-white font-semibold px-4 py-2 rounded text-sm"
                  >
                    Read full Blog
                  </Link>
                </div>

                <div className="mt-4 text-end text-sm text-zinc-700 font-normal">
                  {modalData.uploadedTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MyBlogs;
