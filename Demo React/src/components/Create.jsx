import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const Navigator = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3005/createBlog", { title, content })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setTitle("");
    setContent("");
    Navigator('/')
  };
  return (
    <div className="container">
      <div className="mb-3 ">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Blog Title
        </label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Blog Content Content
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div>
        <input
          type="submit"
          value="Create Blog"
          className="btn btn-success"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Create;
