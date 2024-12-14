import React from 'react'

const NavigateButton = () => {
  return (
    <div className='flex justify-between md:text-sm text-xs  gap-1'>
      <div className='flex'>
      <button className="border border-slate-300 px-3 py-1 shadow-md bg-blue-200  rounded-xl">
                    New Task
                </button>
                <button className="border border-slate-300 px-3 py-1 shadow-md bg-green-200  rounded-xl">
                    Completed
                </button>
                
                <button className="border border-slate-300 px-3 py-1 shadow-md bg-gray-200  rounded-xl">
                    Pending
                </button>
                
                <button className="border border-slate-300 px-3 py-1 shadow-md bg-orange-200  rounded-xl">
                    Important
                </button>
      </div>

      <div>
      <button className="border border-slate-300 px-3 py-1 shadow-md bg-purple-200  rounded-xl">
                    View All
                </button>
                <button className="border border-slate-300 px-3 py-1 shadow-md bg-red-200  rounded-xl">
                    Clear All
                </button>
      </div>
    </div>
  )
}

export default NavigateButton
