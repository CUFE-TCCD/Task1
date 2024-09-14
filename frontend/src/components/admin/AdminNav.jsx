import React, { useContext } from "react";
import { CiSearch, CiMenuBurger, CiBellOn } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { ImNotification } from "react-icons/im";
import SidebarContext from "../../context/SidebarContext";

const AdminNav = () => {
  const { expanded, setExpanded } = useContext(SidebarContext);

  return (
    <div className="max-w-80 flex justify-between p-2 gap-2 items-center rounded-full w-fit border h-fit bg-white shadow-xl">
      <div className="relative">
        <input
          type="text"
          className="rounded-full py-2 text-sm pl-6 w-full bg-slate-200 focus:outline-none focus:ring-0 "
          placeholder="search..."
        />{" "}
        <span className="absolute left-1 top-2.5">
          <CiSearch />
        </span>
      </div>
      <div className="flex gap-2 text-slate-500">
        <CiMenuBurger
          className="xl:hidden"
          onClick={() => setExpanded((prev) => !prev)}
        />
        <CiBellOn />
        <ImNotification />
      </div>
      <div className="text-slate-500">
        <RxAvatar size={35} />
      </div>
    </div>
  );
};

export default AdminNav;
