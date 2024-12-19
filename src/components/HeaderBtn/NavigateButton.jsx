import React, { useContext } from "react";
import { sidebarItem } from "../../utils/constant";
import { NavLink } from "react-router-dom";
import { useUtils } from "../../utils/UtilsContext";

const NavigateButton = () => {
  const { setTask } = useUtils();

  const renderButton = ({ id, name, color, path }) => (
    <NavLink to={path} key={id} className={`${btnStyle} ${color}`}> 
      {name}
    </NavLink>
  );

  const handleClearAll = () => {
    setTask([]);
  };

  // Css for buttons
  const btnStyle = "border border-slate-300 px-3 py-1 shadow-md  rounded-xl";

  return (
    <div className="flex  justify-between md:text-sm text-xs gap-2 ">
      {sidebarItem.map(renderButton)}
      <button onClick={handleClearAll} className={`${btnStyle} bg-red-200`}>
        Clear all
      </button>
    </div>
  );
};

export default NavigateButton;
