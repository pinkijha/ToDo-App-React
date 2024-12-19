import React, { useContext } from "react";
import { sidebarItem } from "../../utils/constant";
import { NavLink, useLocation } from "react-router-dom";
import { useUtils } from "../../utils/UtilsContext";

const NavigateButton = () => {
  const { setTask, setImportantTask, setCompletedTasks } = useUtils();
  const location = useLocation(); // Get the current route

  const renderButton = ({ id, name, color, path }) => (
    <NavLink to={path} key={id} className={`${btnStyle} ${color}`}>
      {name}
    </NavLink>
  );

  const handleClearAll = () => {
    const currentPath = location.pathname;

    if (currentPath === "/myday") {
      setTask([]); // Clear tasks only
    } else if (currentPath === "/important") {
      setImportantTask([]); // Clear important tasks only
    } else if (currentPath === "/completed") {
      setCompletedTasks([]); // Clear completed tasks only
    }
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
