import React from "react";
import { signOut } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <header className="text-white body-font bg-[#0ea5e9]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <span className="ml-3 text-2xl font-[mono]">Dr.Marckel</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <CustomLink to="/" className="mr-5 hover:text-gray-900">
            Home
          </CustomLink>
         {user?<button onClick={()=>signOut(auth)} className="mr-5 hover:text-gray-900">
            Logout
          </button> :<CustomLink to="/login" className="mr-5 hover:text-gray-900">
            Login
          </CustomLink>}
          <CustomLink to="/blogs" className="mr-5 hover:text-gray-900">
            Blogs
          </CustomLink>
          <CustomLink to="/about" className="mr-5 hover:text-gray-900">
            About Me
          </CustomLink>

        </nav>
        
      </div>
    </header>
  );
};

export default Header;
