/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
const MyModal = ({ title, content, date, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <button className="btn text-blue-500" onClick={handleOpen}>
        Read More!
      </button>
      <dialog
        className="modal z-50 absolute top-2/4 left-2/4 transform translate-x-[-50%] translate-y-[-50%] rounded-lg p-6"
        open={isOpen}
      >
        <div className="card bg-base-100 relative rounded-lg shadow-xl py-4">
          <figure className="w-[100%] flex justify-center">
            <img src={image} alt="image" className="w-32" />
          </figure>
          <div className="card-body p-3">
            <h2 className="card-title font-bold mb-2">{title}</h2>
            <p className="pt-2 h-24 overflow-hidden mb-2">
              {content.slice(0, 150)}...{" "}
            </p>

            <form method="dialog">
              <button
                className="btn btn-dark border rounded-md px-4 py-2 bg-zinc-700  text-white font-bold"
                onClick={handleClose}
              >
                Close
              </button>

              <Link
                to="/my-blogs"
                className="btn btn-success bg-teal-500  text-white ml-2 font-bold px-4 py-2 border rounded-md mt-1 inline-block "
              >
                Read full Blog
              </Link>

              <div className="card-date  m-3 text-center  border ml-65  font-semibold inline  text-zinc-700 px-5 ">
                {date}
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

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
      <div className={`homeContainer mx-auto py-7 flex`}>
        <div className="recentCards w-8/12 p-3 ">
          <h1 className="mb-5 font-serif  font-bold text-2xl px-4">
            <p className="cursor-pointer hover:text-teal-500  inline">
              Recent Blogs
            </p>
          </h1>
          <div className="w-full cards flex justify-evenly flex-wrap h-screen overflow-y-scroll py-5">
            {blogs.length === 0 ? (
              <div>No blog found</div>
            ) : (
              blogs.data.map((data, index) => {
                const uploadedTime = formatUploadedTime(data.date);
                return (
                  <div
                    key={index}
                    className="card bg-base-100 w-96 shadow-xl py-4"
                  >
                    <figure>
                      <img
                        src={`http://localhost:3005/Images/${data.image}`}
                        alt="Shoes"
                        className="rounded-lg"
                      />
                    </figure>
                    <div className="card-body p-3 rounded-lg">
                      <h2 className="card-title">{data.title}</h2>
                      <p className="pt-2">
                        {data.content.slice(0, 20)}...{" "}
                        <MyModal
                          title={data.title}
                          content={data.content}
                          image={`http://localhost:3005/Images/${data.image}`}
                          date={uploadedTime}
                        />
                      </p>
                      <div className="card-date text-end">
                        <p className="w-full end px-5 pt-3">{uploadedTime}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div className="mostViewCard w-4/12 h-screen p-3 overflow-y-scroll">
          <h1 className="mb-5 font-serif font-bold text-2xl px-5">
            Most Viewed Card
          </h1>
          <div className="impCard px-10">
            {blogs.length === 0 ? (
              <div>No blog found</div>
            ) : (
              blogs.data.slice(0, 3).map((data, index) => {
                const uploadedTime = formatUploadedTime(data.date);
                return (
                  <div
                    key={index}
                    className="card bg-base-100 w-96 shadow-xl py-4"
                  >
                    <figure>
                      <img
                        src={`http://localhost:3005/Images/${data.image}`}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body p-3">
                      <h2 className="card-title">{data.title}</h2>
                      <p className="pt-2">
                        {data.content.slice(0, 100)}
                        <MyModal
                          title={data.title}
                          content={data.content}
                          image={`http://localhost:3005/Images/${data.image}`}
                          date={uploadedTime}
                        />
                      </p>
                      <div className="card-date text-end">
                        <p className="w-full end px-5 pt-3 text-zinc-700">
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
