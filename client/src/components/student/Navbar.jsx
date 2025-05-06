import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";
import { useState } from "react";
import { navLinks } from "../../assets/assets";
const Navbar = () => {
  const {navigate,isEducator,backendUrl,setIsEducator,getToken} = useContext(AppContext);
  const isCourseListPage = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();
  // const becomeEducator= async()=>{
  //   try {
  //     if(isEducator)
  //     {
  //       navigate('/educator')
  //       return;
  //     }
  //     else{
  //       return toast.warn('Unauthorized Access Denied')
  //     }
  //   } catch (error) {
  //     toast.error(error.message)
  //   }
  // }
  const NavItems=()=>{
      return(
          <ul className='nav-ul'>
              {navLinks.map(({id,href,name})=>(
                  <li key={id} className='nav-li'>
                      <a href={href} className='nav-li_a' onClick={()=>{}}>
                          {name}
                      </a>
                  </li>
              ))}
          </ul>
      )
  }
  const[isOpen,setisOpen]=useState(false);
  const toggleMenu=()=>setisOpen((prevIsOpen)=>!prevIsOpen);
  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36  py-4 ${
        isCourseListPage ? "bg-white" : "bg-cyan-300/70"
      }`}
    >
      <img
        src={assets.logo_1}
        onClick={()=>{navigate('/')}}
        alt="Logo"
        className="w-[150px] lg:w-[200px] cursor-pointer sm:w-12"
      />
      {/* <h1 className="text-3xl font-bold">Qt-World</h1> */}
      <div className="hidden md:flex items-center gap-10 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button onClick={()=>{navigate('/educator')}}>{isEducator?'Educator Dashboard':'Become Educator'}</button>|
              <Link to="/my-enrollments">My Courses</Link>
            </>
          )}
        </div>
          <div>
            <Link to="/" className="px-3">
              Home
            </Link>
            <Link to="/about" className="px-3">
              About Us
            </Link>
            <Link to="/course-list" className="px-3">
              Courses
            </Link>
          <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex'>
                <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='w-6 h-6' />
            </button>
          </div>
      </div>
      <div className="md:hidden flex  gap-2 sm:gap-5  text-gray-500">
        {/* <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
               <button onClick={()=>{navigate('/educator')}}>{isEducator?'Educator Dashboard':'Become Educator'}</button>|
              <Link to="/my-enrollments">My Courses</Link>
            </>
          )}
        </div> */}
        <div className={`nav-sidebar ${isOpen?'max-h-0':'max-h-screen'}`}>
        <nav className='p-5'>
            <NavItems/>
        </nav>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
