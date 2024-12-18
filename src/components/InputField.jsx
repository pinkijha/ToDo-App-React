import React from 'react';

import { IoMdAdd } from "react-icons/io";

const InputField = () => {
  return (
    <div className="relative  top-[580px] md:top-0 md:text-[15px]  text-sm md:w-[790px] flex flex-col  items-center my-2">
            <IoMdAdd className="absolute left-4 text-gray-400 md:left-11 top-[38%]  text-xl " />
            <input
              className="outline-none border border-gray-600 my-4
                 bg-white text-black md:px-6 px-10 py-2 rounded-xl
                 md:w-[90%] w-[320px] "
              type="text"
              placeholder='Add a task'
            />
          </div>

  )
}

export default InputField
