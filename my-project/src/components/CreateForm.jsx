import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title == "" && content == "") {
      alert("Please fill in the form");

      return;
    } else {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("title", title);
      formData.append("content", content);

      axios
        .post("http://localhost:3005/createBlog", formData)
        .then((response) => {
          setTitle("");
          setContent("");
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
      <form
        action="post"
        className={`formContainer container mx-auto p-4 min-w-[80vw] min-h-[80vh]`}
      >
        <h3 className="font-bold text-2xl mb-5">Create Blog</h3>
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
            value={content}
            className="w-full border rounded-md px-3 py-2 h-[55vh] outline-none"
            placeholder="Enter Content"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="textarea"
            className="block text-gray-700 font-bold mb-2"
          >
            Upload blog thumbnail:
          </label>
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </div>
        <Link
          to="/private/crud"
          className={`btn bg-red-400 hover:bg-red-500 px-4 py-2 rounded-md mr-2 text-white`}
        >
          Close
        </Link>
        <button
          type="submit"
          className="btn bg-green-400 hover:bg-green-500 px-4 py-2 rounded-md mr-2 text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateForm;
