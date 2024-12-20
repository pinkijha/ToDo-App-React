import React from 'react'
import { useUtils } from "../utils/UtilsContext";

const All = () => {
  const { task } = useUtils();
  return (
    <div
      className="flex flex-col px-4  overflow-y-scroll md:my-4 p-4 space-y-2 md:w-[700px] w-[350px] h-[440px] md:h-[400px]
                 md:bg-purple-100 md:shadow-sm scrollbar-hide md:shadow-green-200 md:rounded-xl"
    >
      <h2 className="text-lg md:text-black text-purple-600 font-bold mb-4">All Tasks</h2>
      <ul>
        {task.map(({ id, content }) => (
          
            <p className="cursor-pointer text-sm">{content}</p>
        ))}
      </ul>
    </div>
  )
}

export default All
