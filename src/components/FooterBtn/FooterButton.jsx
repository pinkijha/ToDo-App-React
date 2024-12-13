import React from 'react'

const FooterButton = () => {
  return (
    <div>
      <button className="border border-white px-3 py-1 shadow-md bg-purple-200  rounded-xl">
                    View All
                </button>
                <button className="border border-slate-300 px-3 py-1 shadow-md bg-red-200  rounded-xl">
                    Clear All
                </button>
    </div>
  )
}

export default FooterButton
