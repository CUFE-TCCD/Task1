import React, { useEffect, useState } from "react";
import tccdLogo from "@/assets/tccd_logo.png";
import { Link } from "react-router-dom";
import { removeToken } from "../utils/helper";
import { navLinks } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa"; // Burger and Close Icons
import { LuUserCircle } from "react-icons/lu";

const Nav = () => {
  const token = sessionStorage.getItem("token");
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleLogout() {
    removeToken();
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to='/' className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="tccd-logo" src={tccdLogo} className="h-20 w-auto" />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="lg:flex justify-between gap-4 hidden">
          {navLinks.map((link, i) => (
            <Link
              to={link.path}
              key={i}
              className="text-xl hover:opacity-50 transition duration-300 ease-in-out"
            >
              {link.name}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div
          className={`absolute lg:hidden top-20 w-32 right-2 rounded-lg bg-white shadow-lg z-40 transform transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-1.5 rounded-lg">
            {navLinks.map((link, i) => (
              <Link
                to={link.path}
                key={i}
                className={`text-xl hover:opacity-50 transition w-full text-center duration-300 ease-in-out ${
                  i === navLinks.length - 1 ? "" : "border-b"
                }`}
                onClick={{ toggleMobileMenu }}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex lg:flex-1 gap-4 lg:justify-end relative">
          {!token ? (
            <Link
              to={"/sign-in"}
              className="text-lg font-semibold leading-6 text-gray-900"
            >
              Log in
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => {
                  toggleProfileMenu();
                  setIsMobileMenuOpen(false);
                }}
                className="text-lg font-semibold leading-6 text-gray-900 shadow-md rounded-full"
              >
                <LuUserCircle size={40} />
              </button>

              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md py-2">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          )}
          <button
            className="lg:hidden block text-2xl focus:outline-none"
            onClick={() => {
              toggleMobileMenu();
              setIsProfileMenuOpen(false);
            }}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
