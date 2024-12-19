import React from 'react'
import { useUtils } from '../utils/UtilsContext'

const Important = () => {
  const { importantTask } = useUtils();
  return (
    <div
      className="flex flex-col px-4  overflow-y-scroll md:my-4 p-4 space-y-2 md:w-[700px] w-[350px] h-[440px] md:h-[400px]
                 md:bg-orange-100 md:shadow-sm scrollbar-hide md:shadow-green-200 md:rounded-xl"
    >
      <h2 className="text-lg md:text-black text-orange-200 font-bold mb-4">Important Tasks</h2>
      {importantTask.map(({ id, content, important }) => (
        <div
          key={id}
          className="relative md:text-lg text-sm flex p-2 space-x-1 bg-white
                         md:w-full rounded-md border-spacing-8 border-gray-500"
        >
          <p className="cursor-pointer text-sm ">{content}</p>
        </div>
      ))}
    </div>
  )
}

export default Important
