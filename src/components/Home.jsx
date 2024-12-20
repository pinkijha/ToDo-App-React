import React from "react";
import bgImg from "/bgImg.jpg";
import NavigateButton from "./HeaderBtn/NavigateButton";
import InputField from "./InputField";
import { Outlet } from "react-router-dom";
import Heading from "./HeaderBtn/Heading";

const Home = () => {

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute ">
        <img
          className="md:h-screen md:w-screen md:block hidden md:object-cover md:max-h-screen"
          src={bgImg}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Heading Mobile Screen */}
      <Heading/>

      {/* Main Content */}
      <div className="relative flex flex-col items-center">
        {/* Heading */}
        <div className="hidden md:flex justify-between">
          <h1 className="font-bold text-2xl md:text-4xl m-6 text-white">
            Todo App
          </h1>
        </div>

        {/* Content Container */}
        <div
          className="relative flex flex-col items-center md:w-[900px] md:h-[600px] 
          md:bg-slate-900/50 md:rounded-2xl shadow-md md:shadow-slate-500"
        >
          {/* Input Field */}
          <InputField />

          {/* Navigation Buttons */}
          <div className="md:block hidden">
            <NavigateButton />
          </div>

          {/* Dynamic Task Container */}
          <div className="">
            <Outlet /> {/* Dynamic routing happens here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
