import React from "react";
import bgImg from "/bgImg.jpg";
import { IoMdAdd } from "react-icons/io";
import NavigateButton from "./HeaderBtn/NavigateButton";
import TaskContainer from "./TaskContainer";
import FooterButton from "./FooterBtn/FooterButton";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";


const Home = ({placeholder}) => {
  
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
 
  return (
    <div className="relative">

    {/* Background Image */}
      <div className="absolute">
        <img
          className=" h-screen w-screen object-cover max-h-screen md:max-h-screen max-w-screen"
          src={bgImg}
        />
        <div className="absolute inset-0 bg-black/60 "></div>
      </div>

       {/* Heading Mobile Screen */}
       <div className={`md:hidden absolute ${isMenuOpen ? '' : 'left-2 space-x-2 justify-between' }   flex z-20 `}
       >
           <button className="md:hidden"> <Navbar className='' /></button>
          <div>
            </div> 
          {isMenuOpen ? '' : <h1 className="font-bold text-2xl md:text-4xl mt-6   text-white ">
            Todo App
          </h1>}         
          </div>

      <div className="relative flex flex-col items-center">

        {/* Heading  */}
        <div className="hidden md:flex justify-between">
           <div className="md:hidden"> <Navbar className='' /></div>
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
            <div className="relative top-[580px] md:top-0 md:text-xl text-sm md:w-[90%] flex flex-col  items-center my-2">
            <IoMdAdd className="absolute left-4 text-gray-400 md:left-11 top-[38%]  text-xl " />
                <input className="outline-none border border-gray-600 my-4
                 bg-white text-black md:px-6 px-10 py-2 rounded-xl
                 md:w-[90%] w-[320px] " type="text" placeholder={placeholder}  /> 
            </div>

            {/* navigate buttons */}
            <div className="md:block hidden">
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
