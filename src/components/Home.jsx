import React from "react";
import bgImg from "/bgImg.jpg";
import { IoMdAdd } from "react-icons/io";
import NavigateButton from "./HeaderBtn/NavigateButton";
import TaskContainer from "./TaskContainer";
import FooterButton from "./FooterBtn/FooterButton";


const Home = ({placeholder}) => {
  return (
    <div className="relative">

    {/* Background Image */}
      <div className="absolute">
        <img
          className=" h-screen w-screen object-cover md:max-h-screen max-w-screen"
          src={bgImg}
        />
        <div className="absolute inset-0 bg-black/60 "></div>
      </div>

      <div className="relative flex flex-col items-center">

        {/* Heading */}
        <div className="">
          <h1 className="font-bold text-2xl md:text-4xl m-6 text-white ">
            Todo App
          </h1>          
          </div>

          <div
            className="relative flex flex-col items-center md:w-[900px] md:h-[580px] w-[300px] h-[500px]
         bg-slate-900/50 rounded-2xl shadow-md shadow-slate-500"
          >

            {/* input field */}
            <div className="relative md:w-[90%] flex flex-col  items-center my-2">
            <IoMdAdd className="absolute text-gray-400 md:left-11 top-[38%]  text-xl " />
                <input className="outline-none border border-gray-600 my-4
                 bg-white text-black md:px-6 px-10 py-2 rounded-md
                 w-[90%] " type="text" placeholder={placeholder}  /> 
            </div>

            {/* navigate buttons */}
            <div className="">
                <NavigateButton/>
            </div>

                {/* task container */}
            <div className="">
                <TaskContainer/>
            </div>
            
            {/* Below buttons */}
            <div className="">
                <FooterButton/>
            </div>


        </div>
      </div>
    </div>
  );
};

export default Home;
