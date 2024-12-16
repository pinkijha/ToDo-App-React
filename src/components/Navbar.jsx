import React from 'react'
import { TiThMenu } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from "../utils/AppSlice";
import Sidebar from './Sidebar';

const Navbar = () => {
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());

  }

  

  return (
    <div className={`${isMenuOpen ? 'bg-white text-black h-screen px-2 py-7' : 'text-white mt-7' } text-2xl`}>
      <button onClick={() => toggleMenuHandler()}> <TiThMenu  />
      {isMenuOpen ? <Sidebar/> : '' }</button>
      
    </div>
  )
}

export default Navbar
