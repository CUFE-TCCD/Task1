import React from "react";
import Nav from "@/components/Nav";
import GradientBgBottom from "../GradientBgBottom";
import GradientBgTop from "../GradientBgTop";
import Footer from "../Footer";
const withNavbar = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="bg-white min-h-screen relative">
        <Nav />
        <div className="relative isolate px-6 py-40  lg:px-8">
          <GradientBgTop />
          <WrappedComponent {...props} />
        </div>
        <Footer />
      </div>
    );
  };
};

export default withNavbar;
