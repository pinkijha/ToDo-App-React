import React from 'react';
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { useUtils } from '../utils/UtilsContext';

const TaskContainer = () => {
    const {task } = useUtils();

    const handleDelete = (index) => {
        setTask((prevTask) => prevTask.filter((t) => t.index !== index));
      };
 
  return (
    <div className=' flex flex-col px-4 overflow-y-scroll  md:my-4 p-4 space-y-2 md:w-[700px] w-[350px] h-[440px] md:h-[400px]
                 md:bg-slate-300 md:shadow-sm scrollbar-hide md:shadow-blue-200 md:rounded-xl'>

                    {task.map((taskName, index) => (
                        <div key={index} 
                        
                        className='relative md:text-lg text-sm flex p-2 space-x-1 bg-slate-100
                         md:w-full rounded-md  border-spacing-8 border-gray-500'>
                            <input type='radio'  />
                            <p className='cursor-pointer text-sm'>{taskName}</p>
                           <div className='absolute space-x-2  right-1 flex items-center'>
                           <CiStar className='text-orange-600 cursor-pointer'  />
                            <MdModeEditOutline className='text-blue-600 cursor-pointer'  />
                            <MdDelete onClick={() => handleDelete(index)}
                            className='text-red-600 cursor-pointer' />
                           </div>

                        </div>
                    ))}
      
    </div>
  )
}

export default TaskContainer
