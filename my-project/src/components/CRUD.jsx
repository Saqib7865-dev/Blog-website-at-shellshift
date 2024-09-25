/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";

const CRUD = () => {
  const [blogs, setBlogs] = useState([]);
  const [createBlog, setCreateBlog] = useState(false);
  const [update, setUpdate] = useState(false);
  const [updateableData, setUpdateableData] = useState([]);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3005/deleteBlog/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3005/readBlog")
      .then((response) => setBlogs(response))
      .catch((err) => console.log(err));
  }, [blogs]);
  return (
    <div className={`CRUDContainer mx-auto py-7 flex`}>
      <div className="recentCards p-3 ">
        <h1 className="mb-5 font-serif  font-bold text-2xl px-4">
          <p className="cursor-pointer hover:text-teal-500  inline">
            All Blogs
          </p>
        </h1>
        <button
          className="min-w-[100px] py-5  px-5 btn bg-green-400 font-bold text-white"
          onClick={() => setCreateBlog(true)}
        >
          Create a new blog
        </button>
        <div className="w-full cards gap-4 flex justify-evenly flex-wrap items-center py-5">
          {blogs.length === 0 ? (
            <div>No record found</div>
          ) : (
            blogs.data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card bg-base-100 w-96 shadow-xl py-4"
                >
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body p-3">
                    <h2 className="card-title font-bold text-2xl">{item.title}</h2>
                    <p className="pt-2 text-justify my-1">{item.content}</p>
                    <div className="card-date text-end ">
                      <p className="w-full end px-5 pt-3">{item.date}</p>
                    </div>
                    <div className="mt-2">
                      <button
                        className="btn bg-green-400 px-4 py-2 rounded-md mr-2"
                        onClick={() => {
                          setUpdate(true);
                          setUpdateableData(item);
                        }}
                      >
                        Update
                      </button>
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
          <div className={`${createBlog ? "block" : "hidden"} formDiv`}>
            <Form
              blogTitle="Create Blog"
              setFormDisplay={setCreateBlog}
            />
          </div>
          {/* <div className={`${update ? "block" : "hidden"} formDiv`}>
            <Form
              blogTitle="Update Blog"
              setFormDisplay={setUpdate}
              updateBlog={update}
              updateableData={updateableData}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CRUD;
