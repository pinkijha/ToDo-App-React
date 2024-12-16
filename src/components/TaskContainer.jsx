import React from 'react';
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { CiStar } from "react-icons/ci";

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
    <div className=' flex flex-col px-4 overflow-y-scroll  md:my-4 p-4 space-y-2 md:w-[700px] w-[350px] h-[440px] md:h-[400px]
                 md:bg-slate-300 md:shadow-sm scrollbar-hide md:shadow-blue-200 md:rounded-xl'>

                    {taskItem.map(({id, description}) => (
                        <div key={id} 
                        
                        className='relative md:text-lg text-sm flex p-2 space-x-1 bg-slate-100
                         md:w-full rounded-md  border-spacing-8 border-gray-500'>
                            <input type='radio'  />
                            <p className='cursor-pointer text-sm'>{description}</p>
                           <div className='absolute space-x-2  right-1 flex items-center'>
                           <CiStar className='text-orange-600 cursor-pointer'  />
                            <MdModeEditOutline className='text-blue-600 cursor-pointer'  />
                            <MdDelete className='text-red-600 cursor-pointer' />
                           </div>

                        </div>
                    ))}
      
    </div>
  )
}

export default TaskContainer
