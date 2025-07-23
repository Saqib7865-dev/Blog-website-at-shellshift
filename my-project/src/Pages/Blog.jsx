import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Blog = () => {
  const [Blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    document.body.style.overflowY = "auto";
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
    setLoading(true);
    try {
      setTimeout(() => {
        axios
          .get(`http://localhost:3005/readBlog/${id}`)
          .then((response) => setBlog(response.data))
          .catch((error) => {
            throw new error();
          });
      }, [500]);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  if (loading && !Blog) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center text-2xl text-teal-500">
        Loading...
      </div>
    );
  } else if (Blog) {
    return (
      <div className="w-screen min-h-screen py-20 flex flex-col gap-y-14 overflow-x-hidden">
        <h1 className="mb-5 font-bold text-4xl px-4 text-center">
          <p className="uppercase font-semibold inline text-4xl text-teal-500">
            {Blog.title}
          </p>
        </h1>
        <div className="image w-full flex items-center justify-center">
          <img
            src={`http://localhost:3005/Images/${Blog.image}`}
            alt={Blog.title}
            className="rounded w-8/12 shadow-lg"
          />
        </div>
        <div className="description px-10 flex flex-col gap-y-2">
          <h2 className="font-semibold text-2xl text-zinc-700">Description</h2>
          <p className="text-zinc-600 min-h-20 py-5 text-justify">
            {Blog.content}
          </p>
          <span className="text-slate-500 text-sm text-end pr-16">
            {formatUploadedTime(Blog.date)}
          </span>
        </div>
        <button
          className="text-start bg-teal-500 w-fit mx-10 px-6 py-2 text-white font-semibold rounded shadow"
          onClick={() => history.back()}
        >
          Back
        </button>
      </div>
    );
  } else {
    return (
      <p
        className="min-h-screen w-screen flex items-center justify-center text-4xl font-semibold text-teal-500"
        onClick={() => console.log("Blog: ", Blog)}
      >
        Blog not found
      </p>
    );
  }
};

export default Blog;
