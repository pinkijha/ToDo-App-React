import React from 'react'

const NavigateButton = () => {
  return (
    <div>
      <button className="border border-white px-3 py-1 shadow-md bg-blue-200  rounded-xl">
                    New Task
                </button>
                <button className="border border-white px-3 py-1 shadow-md bg-green-200  rounded-xl">
                    Completed
                </button>
                
                <button className="border border-white px-3 py-1 shadow-md bg-gray-200  rounded-xl">
                    Pending
                </button>
                
                <button className="border border-white px-3 py-1 shadow-md bg-orange-200  rounded-xl">
                    Important
                </button>
    </div>
  )
}

export default NavigateButton
