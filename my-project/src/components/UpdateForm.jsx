import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
const updateForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3005/readBlogById?id=${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let currentDate = new Date().getTime();
    axios
      .put(`http://localhost:3005/updateBlog/${id}`, {
        title,
        content,
        date: currentDate,
      })
      .then((response) => {
        alert("Updated");
        navigate("/crud");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <form
        action="post"
        className={`formContainer container mx-auto p-4 min-w-[80vw] min-h-[80vh] shadow`}
      >
        <h3 className="font-bold text-2xl mb-5">Update Blog</h3>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>

          <input
            type="text"
            id="title"
            className="w-full border rounded-md px-3 py-2 outline-none"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="textarea"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="textarea"
            className="w-full border rounded-md px-3 py-2 h-[55vh] outline-none resize-none"
            placeholder="Enter Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <Link
          to="/private/crud"
          className={`btn bg-red-400 px-4 py-2 rounded-md mr-2 text-white`}
        >
          Close
        </Link>
        <button
          type="submit"
          className="btn bg-green-400 px-4 py-2 rounded-md mr-2 text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default updateForm;
