import React from 'react'
import { useDispatch } from 'react-redux'

const Sidebar = () => {
    const sidebarItem = [
        {
          id: 1,
          name: 'My Day',

        },{
          id: 2,
          name: 'Important',
        },{
          id: 3,
          name: 'All',
        },{
          id: 4,
          name: 'Asigned to me',
        },{
          id: 5,
          name: 'Task',
        },
      ]

  return (
    <div>
      <div className='flex flex-col  mt-3 items-center'>
      <div className='bg-white  text-black
      '>
        {
          sidebarItem.map(({id, name, icon})=>(
            <div key={id} className='flex  cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2' >
              <span>{icon} {name}</span>
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
