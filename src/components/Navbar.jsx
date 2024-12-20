import React from 'react';
import { TiThMenu } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import { toggleMenu } from '../utils/appSlice';

const Navbar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`${
          isMenuOpen
            ? "bg-white text-black h-screen px-2 py-7"
            : "text-white mt-7"
        } text-2xl relative`}
      >
        {/* Hamburger Menu Button */}
        <button
          onClick={() => toggleMenuHandler()}
          className={`${
            isMenuOpen ? "text-black" : "text-black"
          } focus:outline-none z-30 relative`} // Hamburger turns black when menu is open
        >
          <TiThMenu />
        </button>

        {/* Render Sidebar and Background Blur */}
        {isMenuOpen && (
          <>
            {/* Background Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
              onClick={() => toggleMenuHandler()} // Close menu when clicking on the overlay
            ></div>

            {/* Sidebar */}
            <div className="fixed top-0 left-0 w-3/4 h-full bg-white text-black p-5 z-20 shadow-lg">
              <Sidebar />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
