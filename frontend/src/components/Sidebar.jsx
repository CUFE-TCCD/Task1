import React from "react";
import { HiX } from "react-icons/hi";
import tccdLogo from "@/assets/tccd_logo.png";
import { Link, useLocation } from "react-router-dom";
import { sideLinks } from "../constants";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation(); // Get the current route to determine the active link

  return (
    <div
      className={`fixed min-h-full flex flex-col bg-white pb-10 shadow-2xl transition-all duration-175 ${
        isOpen ? "translate-x-0" : "-translate-x-96"
      } md:!z-50 lg:!z-50 xl:!z-50 !z-[999]`}
    >
      <span
        className="absolute top-4 right-4 cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className="mx-[56px] mt-[20px] flex items-center">
        <div className="mt-1 ml-1 h-16 w-full font-poppins text-[26px] font-bold uppercase text-navy-700">
          <img
            src={tccdLogo}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="mt-2 mb-7 h-px bg-gray-300" />

      <ul className="mb-auto pt-1">
        {sideLinks.map((item) => (
          <Link to={item.path} key={item.name}>
            <li
              className={`flex items-center gap-4 px-8 py-2.5 transition-all duration-300 ease-in-out font-bold ${
                location.pathname === item.path
                  ? "text-navy-700 border-r-4 rounded-md border-blue-500"
                  : "text-gray-600 hover:text-navy-700"
              }`}
            >
              <item.icon
                className={`h-6 w-6 transition-all duration-300 ease-in-out ${
                  location.pathname === item.path
                    ? "text-blue-500"
                    : "text-gray-400 hover:text-navy-700"
                }`}
              />
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
