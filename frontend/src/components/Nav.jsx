import React from "react";
import tccdLogo from "@/assets/tccd_logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src={tccdLogo} className="h-20 w-auto" />
          </a>
        </div>

        <div className="flex lg:flex-1 lg:justify-end">
          <Link to={'/sign-in'} className="text-lg font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
