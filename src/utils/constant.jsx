
import { IoSunnyOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { PiInfinityLight } from "react-icons/pi";
import { MdOutlinePendingActions } from "react-icons/md";

export const sidebarItem = [
    {
      id: 1,
      name: 'My Day',
      icon: <IoSunnyOutline />,
      color: 'bg-blue-200',
      path: '/myday',
    },
    {
      id: 2,
      name: 'Important',
      icon: <CiStar />,
      color: 'bg-orange-200',
      path: '/important',
      
    },
    {
      id: 3,
      name: 'All',
      icon: <PiInfinityLight />,
      color: 'bg-purple-200',
      path: '/all',
    },
    {
      id: 4,
      name: ' Pending',
      icon: <MdOutlinePendingActions />,
      color: 'bg-gray-200',
      path: '/pending',
    },
    {
      id: 5,
      name: 'Completed',
      icon: <IoCheckmarkDoneCircle />,
      color: 'bg-green-200',
      path: '/completed',
    },
  ]
  
export const TASK_KEY = "task";
export const IMPORTANT_TASKS_KEY = "importantTask";
export const COMPLETED_TASKS_KEY = "completedTasks";
  