import React, { useState } from "react";
import axios from "axios";
const Form = ({ blogTitle, setFormDisplay, updateBlog, updateableData }) => {
  const [title, setTitle] = useState(
    `${updateableData ? updateableData.title : "Title not visible"}`
  );
  const [content, setContent] = useState(
    `${updateableData ? updateableData.content : "Content not visible"}`
  );
  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    if (title == "" && content == "") {
      alert("Please fill in the form");
      return;
    } else {
      axios.put(`http://localhost:3005/updateBlog/${updateableData._id}`, {
        title,
        content,
      });
      setFormDisplay(false);
    }
  };
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (title == "" && content == "") {
      alert("Please fill in the form");

      return;
    } else {
      axios
        .post("http://localhost:3005/createBlog", { title, content })
        .then((response) => {
          console.log(response);
          setTitle("");
          setContent("");
          setFormDisplay(false);
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
        <h3 className="font-bold text-2xl mb-5">{blogTitle}</h3>
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
            Textarea
          </label>
          <textarea
            id="textarea"
            value={content}
            className="w-full border rounded-md px-3 py-2 h-[55vh] outline-none"
            placeholder="Enter Content"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button
          type="button"
          className={`btn bg-red-400 px-4 py-2 rounded-md mr-2`}
          onClick={() => setFormDisplay(false)}
        >
          Close
        </button>
        <button
          type="submit"
          className="btn bg-green-400 px-4 py-2 rounded-md mr-2"
          onClick={updateBlog ? handleUpdateSubmit : handleCreateSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
