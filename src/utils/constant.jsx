
import { IoSunnyOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { PiInfinityLight } from "react-icons/pi";

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
      name: 'Asigned to me',
      icon: <FaRegUser />,
      color: 'bg-pink-200',
      path: '/asigned',
    },
    {
      id: 5,
      name: 'Task',
      icon: <CiHome />,
      color: 'bg-yellow-200',
      path: '/task',
    },
  ]
  

  // ButtonList

   export const btnList = [
     { 
      id: 1,
      name: 'Completed',
      color: 'bg-green-200',
      path: '/completed',
    },
    { 
      id: 2,
      name: ' Pending',
      color: 'bg-gray-200',
      path: '/pending',
    },
    { 
      id: 3,
      name: 'Clear All',
      color: 'bg-red-200',
      path: '/clear',
    },
    ]