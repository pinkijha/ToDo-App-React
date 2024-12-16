
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
  
    },
    {
      id: 2,
      name: 'Important',
      icon: <CiStar />,
      color: 'bg-orange-200',
      
    },
    {
      id: 3,
      name: 'All',
      icon: <PiInfinityLight />,
      color: 'bg-purple-200',
    },
    {
      id: 4,
      name: 'Asigned to me',
      icon: <FaRegUser />,
      color: 'bg-pink-200',
    },
    {
      id: 5,
      name: 'Task',
      icon: <CiHome />,
      color: 'bg-yellow-200',
    },
  ]
  

  // ButtonList

   export const btnList = [
     { 
      id: 1,
      name: 'Completed',
      color: 'bg-green-200'
    },
    { 
      id: 2,
      name: ' Pending',
      color: 'bg-gray-200'
    },
    { 
      id: 3,
      name: 'Clear All',
      color: 'bg-red-200'
    },
    ]