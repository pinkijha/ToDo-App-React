import React from 'react'
import { sidebarItem } from '../utils/constant';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
   

  return (
    <div>
      <div className='flex flex-col  mt-3 items-center'>
      <div className='bg-white text-sm text-black 
      '>
        {
          sidebarItem.map(({id, name, icon, path})=>(
            <NavLink key={id} to={path} 
            className='flex  cursor-pointer p-2 rounded-lg hover:bg-gray-300 my-2' >
              <span className=' flex gap-5 items-center'>
                <span className='text-xl'>{icon}</span>
                 {name}</span>
            </NavLink>
          ))
        }
      </div>
        <hr/>
      </div>
    </div>
  )
}

export default Sidebar
