/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Layout from "../components/Layout";
import { data } from "../data/data";
import { Link } from "react-router-dom";
const MyModal = ({ title, content, date }) => {
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
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <Layout>
      <div className={`homeContainer mx-auto py-7 flex`}>
        <div className="recentCards w-8/12 p-3 ">
          <h1 className="mb-5 font-serif  font-bold text-2xl px-4">
            <p className="cursor-pointer hover:text-teal-500  inline">
              Recent Blogs
            </p>
          </h1>
          <div className="w-full cards flex justify-evenly flex-wrap items-center overflow-y-scroll h-screen py-5">
            {data.slice(0, 6).map((data, index) => {
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
                    <h2 className="card-title">{data.title}</h2>
                    <p className="pt-2">
                      {data.content.slice(0, 20)}...{" "}
                      <MyModal
                        title={data.title}
                        content={data.content}
                        date={data.date}
                      />
                    </p>
                    <div className="card-date flex-col justify-end">
                      <p className="w-full end px-5 pt-3">{data.date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mostViewCard w-4/12 h-screen p-3 overflow-y-scroll">
          <h1 className="mb-5 font-serif font-bold text-2xl px-5">
            Most Viewed Card
          </h1>
          <div className="impCard px-10">
            {data.slice(0, 3).map((data, index) => {
              return (
                <div
                  key={index}
                  className="card bg-base-100 w-96 shadow-xl cursor-pointer py-4"
                >
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body p-3">
                    <h2 className="card-title">{data.title}</h2>
                    <p className="pt-2">
                      {data.content.slice(0, 20)}...{" "}
                      <MyModal title={data.title} content={data.content} />
                    </p>
                    <div className="card-date justify-end">
                      <p className="w-full text-end px-5 pt-3">{data.date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
