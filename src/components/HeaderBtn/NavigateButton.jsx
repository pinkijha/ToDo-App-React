import React from "react";
import { btnList, sidebarItem } from "../../utils/constant";

const NavigateButton = () => {

const renderButton = ({id, name,color}) => (
  <>
        <button key={id} className={`${btnStyle} ${color}`}>
          {name}
        </button>
        </>
)
 

  const btnStyle = "border border-slate-300 px-3 py-1 shadow-md  rounded-xl";

  return (
    <div className="flex  justify-between md:text-sm text-xs gap-2 ">
      {sidebarItem.map(renderButton)}
      {btnList.map(renderButton)}
    </div>
  );
};

export default NavigateButton;
