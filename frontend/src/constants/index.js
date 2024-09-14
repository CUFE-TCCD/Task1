import { MdEventNote } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { CiLocationOn, CiLogout } from "react-icons/ci";

import { FaChartSimple } from "react-icons/fa6";

export const sideLinks = [
  { name: "Statistics", icon: FaChartSimple, path: "/admin/statistics" },
  {
    name: "Users",
    icon: FaUsers,
    path: "/admin/users",
  },
  { name: "Locations", icon: CiLocationOn, path: "/admin/locations" },
  { name: "Events", icon: MdEventNote, path: "/admin/events" },
  { name: "Log out", icon: CiLogout, path: "/sign-in" },
];
