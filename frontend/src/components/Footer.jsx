import React, { Fragment } from "react";
import tccdLogo from "@/assets/tccd_logo.png";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <div className="absolute bottom-0 border-t pt-2 px-3 flex flex-wrap justify-between items-center w-full">
      <div className="">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img alt="tccd-logo" src={tccdLogo} className="h-20 w-auto" />
        </Link>
      </div>

      <div className="flex gap-4">
        {socialLinks.map((social, i) => (
          <Link to={social.path} className={`${social.className} transition duration-300`} key={i}>
          <social.logo size={35} />
        </Link>
        
        ))}
      </div>
    </div>
  );
};

export default Footer;
