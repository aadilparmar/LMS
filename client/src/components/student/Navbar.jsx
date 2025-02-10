import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";
const Navbar = () => {
  const {navigate,isEducator} = useContext(AppContext);
  const isCourseListPage = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();
  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-200 py-4 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      <img
        src={assets.logo}
        onClick={()=>{navigate('/')}}
        alt="Logo"
        className="w-[50px] lg:w-[70px] cursor-pointer sm:w-12"
      />
      {/* <h1 className="text-3xl font-bold">Qt-World</h1> */}
      <div className="hidden md:flex items-center gap-10 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button onClick={()=>{navigate('/educator')}}>{isEducator?'Educator Dashboard':'Become Educator'}</button>|
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <div>
            <Link to="/" className="px-10">
              Home
            </Link>
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 text-white px-5 py-2 rounded-full"
            >
              Create Account
            </button>
          </div>
        )}
      </div>
      <div className="md:hidden flex  gap-2 sm:gap-5  text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
               <button onClick={()=>{navigate('/educator')}}>{isEducator?'Educator Dashboard':'Become Educator'}</button>|
              <Link to="/my-enrollments">My Enrollments</Link>
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
