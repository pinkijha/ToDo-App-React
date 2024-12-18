import React from "react";
import bgImg from "/bgImg.jpg";
import NavigateButton from "./HeaderBtn/NavigateButton";
import TaskContainer from "./TaskContainer";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import All from "./All";
import InputField from "./InputField";

const Home = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute">
        <img
          className=" h-screen w-screen object-cover  md:max-h-screen"
          src={bgImg}
        />
        <div className="absolute inset-0 bg-black/60 "></div>
      </div>

      {/* Heading Mobile Screen */}
      <div
        className={`md:hidden absolute ${
          isMenuOpen ? "" : "left-2 space-x-2 justify-between"
        }   flex z-20 `}
      >
        <div className="md:hidden">
          {" "}
          <Navbar className="" />
        </div>
        <div></div>
        {isMenuOpen ? (
          ""
        ) : (
          <h1 className="font-bold text-2xl md:text-4xl mt-6   text-white ">
            Todo App
          </h1>
        )}
      </div>

      <div className="relative flex flex-col items-center">
        {/* Heading  */}
        <div className="hidden md:flex justify-between">
          <div className="md:hidden">
            {" "}
            <Navbar  />
          </div>
          <div>
            <h1 className="font-bold text-2xl md:text-4xl m-6 text-white ">
              Todo App
            </h1>
          </div>
        </div>

        <div
          className="relative flex flex-col items-center md:w-[900px] md:h-[600px] 
         md:bg-slate-900/50 md:rounded-2xl shadow-md md:shadow-slate-500"
        >
          {/* input field */}
          <div className="relative">
            <InputField/>
          </div>
          {/* navigate buttons */}
          <div className="md:block hidden">
            <NavigateButton />
          </div>

          {/* task container */}
          <div className="">
            <TaskContainer />
          </div>
          
        </div>
      </div>
      
        {/* routing  */}
          <Routes>
            <Route path='/all' element={<All />} />
          </Routes>
    </div>
  );
};

export default Home;
