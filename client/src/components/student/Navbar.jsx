import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

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
        {user ? (
          <UserButton />
        ) : (
          <div>
            <Link to="/" className="px-3">
              Home
            </Link>
            <Link to="/about" className="px-3">
              About
            </Link>
            <Link to="/course-list" className="px-3">
              Courses
            </Link>
            {/* <button
              onClick={() => openSignIn()}
              className="bg-blue-600 text-white px-5 py-2 rounded-full"
            >
              Create Account
            </button> */}

          </div>
        )}
      </div>
      <div className="md:hidden flex  gap-2 sm:gap-5  text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
               <button onClick={()=>{navigate('/educator')}}>{isEducator?'Educator Dashboard':'Become Educator'}</button>|
              <Link to="/my-enrollments">My Courses</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="User_Icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
