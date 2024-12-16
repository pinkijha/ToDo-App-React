import React from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { PiInfinityLight } from "react-icons/pi";

const Sidebar = () => {
    const sidebarItem = [
        {
          id: 1,
          name: 'My Day',
          icon: <IoSunnyOutline />,

        },{
          id: 2,
          name: 'Important',
          icon: <CiStar />,
          
        },{
          id: 3,
          name: 'All',
          icon: <PiInfinityLight />,
        },
        {
          id: 4,
          name: 'Asigned to me',
          icon: <FaRegUser />,
        },
        {
          id: 5,
          name: 'Task',
          icon: <CiHome />,
        },
      ]

  return (
    <div>
      <div className='flex flex-col  mt-3 items-center'>
      <div className='bg-white text-sm text-black 
      '>
        {
          sidebarItem.map(({id, name, icon})=>(
            <div key={id} className='flex  cursor-pointer p-2 rounded-lg hover:bg-gray-300 my-2' >
              <span className=' flex gap-5 items-center'><span className='text-xl'>{icon}</span> {name}</span>
            </div>
          ))
        }
      </div>
        <hr/>
      </div>
    </div>
  )
}

export default Sidebar
