import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";

const Header = () => {
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
          <CustomLink to="/" className="mr-5 hover:text-gray-900">
            Appoinments
          </CustomLink>
          <CustomLink to="/login" className="mr-5 hover:text-gray-900">
            Login
          </CustomLink>
          <CustomLink to="/" className="mr-5 hover:text-gray-900">
            Blogs
          </CustomLink>
          <CustomLink to="/" className="mr-5 hover:text-gray-900">
            About Me
          </CustomLink>

        </nav>
        
      </div>
    </header>
  );
};

export default Header;
