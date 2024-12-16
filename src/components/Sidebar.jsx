import React from 'react'
import { sidebarItem } from '../utils/constant';


const Sidebar = () => {
   

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
