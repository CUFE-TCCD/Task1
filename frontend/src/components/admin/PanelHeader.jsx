import React from "react";
import { useLocation } from "react-router-dom";
import AdminNav from "./AdminNav";

const PanelHeader = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  // Remove the first segment if it is 'admin'
  const filteredSegments =
    pathSegments[0] === "admin" ? pathSegments.slice(1) : pathSegments;

  // Capitalize the first letter of each segment and replace dashes with spaces
  const formattedSegments = filteredSegments.map(
    (segment) =>
      segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")
  );

  // Join the segments with ' / ' for breadcrumb style
  const routeName = formattedSegments.join(" / ") || "Statistics"; // Default to 'Dashboard' if no route is found

  return (
    <div className="flex justify-between w-full flex-wrap">
      <header className="flex flex-col gap-2">
        <p className="text-base font-medium text-gray-500">
          Pages/ {routeName}
        </p>
        <h2 className="text-4xl font-semibold">
          {formattedSegments[formattedSegments.length - 1] || "Statistics"}
        </h2>
      </header>
      <AdminNav />
    </div>
  );
};

export default PanelHeader;
