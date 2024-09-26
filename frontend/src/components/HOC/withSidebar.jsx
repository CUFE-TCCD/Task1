import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import PanelHeader from "../admin/PanelHeader";
import SidebarContext from "@/context/SidebarContext";
import useWindowDimensions from "@/hooks/useWindowDimensions"; // Adjust the path as needed
import GradientBgBottom from "../GradientBgBottom";
import { useNavigate } from "react-router-dom";

const withSidebar = (WrappedComponent) => {
  return (props) => {
    const { width } = useWindowDimensions();
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(width >= 1280);
    const token = sessionStorage.getItem("token");

    useEffect(() => {
      if (!token) {
        navigate("/sign-in");
      }
    }, []);

    useEffect(() => {
      setExpanded(width >= 1280);
    }, [width]);

    if (!token) {
      return null;
    }

    return (
      <SidebarContext.Provider value={{ expanded, setExpanded }}>
        <div className="flex">
          <Sidebar isOpen={expanded} onClose={() => setExpanded(false)} />
          <div className="w-full xl:pl-[20rem] pl-5  relative pr-5 py-5">
            <PanelHeader />
            <WrappedComponent {...props} />
            <GradientBgBottom />
          </div>
        </div>
      </SidebarContext.Provider>
    );
  };
};

export default withSidebar;
