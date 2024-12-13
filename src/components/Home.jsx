import React from "react";
import bgImg from "/bgImg.jpg";
import { IoMdAdd } from "react-icons/io";


const Home = () => {
  return (
    <div className="relative">
      <div className="absolute">
        <img
          className=" h-screen w-screen object-cover md:max-h-screen max-w-screen"
          src={bgImg}
        />
        <div className="absolute inset-0 bg-black/60 "></div>
      </div>
      <div className="relative ">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl md:text-4xl m-6 text-white ">
            Todo App
          </h1>

          <div
            className="md:w-[500px] md:h-[500px] w-[300px] h-[500px]
         bg-slate-900/50 rounded-2xl shadow-md shadow-slate-500"
          >
            <div className="relative flex flex-col  md:space-x-6 items-center my-2">
            <IoMdAdd className="absolute md:left-16 left-8 top-[38%]  text-xl " />
                <input className="outline-none border border-gray-600 my-4 bg-white text-black px-6 py-2 rounded-md
                 w-4/5 " type="text" placeholder="Add Task"  /> 
            </div>

            <div></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
