import React from 'react';
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { smoothscroll } from 'react'
import { Link } from 'react-scroll';

const TaskContainer = () => {
    const taskItem =[
        {
            id:1,
            name: 'Study',
            description: '2hrs for self Study'
        },
        {
            id:2,
            name: 'Study',
            description: 'cooking'
        },
        {
            id:3,
            name: 'Study',
            description: 'Start learning React'
        },
        {
            id:4,
            name: 'Study',
            description: 'Start learning React'
        },
        {
            id:5,
            name: 'Study',
            description: 'Start learning React'
        },
        {
            id:6,
            name: 'Study',
            description: 'Start learning React'
        },
        {
            id:7,
            name: 'Study',
            description: 'Start learning React'
        },        
        {
            id:8,
            name: 'Study',
            description: 'cooking'
        },
        {
            id:9,
            name: 'Study',
            description: 'cooking'
        },
    ]
  return (
    <div className=' flex flex-col px-4 overflow-y-scroll  md:my-4 p-4 space-y-2 md:w-[700px] w-[350px] h-[440px] md:h-[350px]
                 md:bg-slate-200 md:shadow-sm scrollbar-hide md:shadow-blue-200 md:rounded-xl'>

                    {taskItem.map(({id, description}) => (
                        <Link key={id} 
                        smooth={true}
                        duration={500}
                        className='relative md:text-md text-sm flex p-2 space-x-1 bg-white
                         md:w-full rounded-md  border border-gray-500'>
                            <input type='radio'  />
                            <p className='cursor-pointer text-sm'>{description}</p>
                           <div className='absolute space-x-2  right-1 flex items-center'>
                           <CiStar className='text-orange-600 cursor-pointer'  />
                            <MdModeEditOutline className='text-blue-600 cursor-pointer'  />
                            <MdDelete className='text-red-600 cursor-pointer' />
                           </div>

                        </Link>
                    ))}
      
    </div>
  )
}

export default TaskContainer
