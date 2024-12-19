import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../Navbar';

const Heading = () => {
    
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div>

        {/* Heading Mobile Screen */}
      <div
        className={`md:hidden absolute ${
          isMenuOpen ? "" : "left-2 space-x-2 justify-between"
        } flex z-20`}
      >
        <Navbar />
        {isMenuOpen ? null : (
          <h1 className="font-bold text-2xl md:text-4xl mt-6 text-white">
            Todo App
          </h1>
        )}
      </div>

      
    </div>
  )
}

export default Heading
