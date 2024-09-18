/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Layout from "../components/Layout";
import { data } from "../data/data";
const MyModal = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // Modal state

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button className="btn text-blue-500" onClick={handleOpen}>
        Read More!
      </button>
      <dialog
        id="my_modal_4"
        className="modal fixed top-1/4 left-1/4 right-1/4 bottom-1/4 bg-white rounded-lg p-6"
        open={isOpen}
      >
        <div className="modal-box bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-bold text-lg text-center">{title}</h3>
          <p className="py-4 text-center">{content}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary" onClick={handleClose}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

const Home = () => {
  return (
    <Layout>
      <div className="homeContainer mx-auto py-7 flex">
        <div className="recentCards w-8/12 p-3 ">
          <h1 className="mb-5 font-serif font-bold text-2xl px-4">
            Recent Cards
          </h1>
          <div className="cards flex justify-evenly flex-wrap items-center overflow-y-scroll h-screen py-5">
            {data.slice(0, 6).map((data, index) => {
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
                    <div className="card-date flex-col justify-end">
                      <p className="w-full text-end px-5 pt-3">{data.date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mostViewCard w-4/12 h-screen p-3">
          <h1 className="mb-5 font-serif font-bold text-2xl px-5">
            Most Viewed Card
          </h1>
          <div className="impCard flex justify-center flex-col h-screen items-center">
            {data.slice(0, 1).map((data, index) => {
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
