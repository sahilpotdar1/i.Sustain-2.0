import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bell, Download, RefreshCcw, Clock, LayoutList,
} from "lucide-react";


const hierarchy = {
  "/dashboard/adnoc": {
    label: "ADNOC",
    parent: null,
  },
  "/adnoc-offshore": {
    label: "ADNOC Offshore",
    parent: "/dashboard/adnoc",
  },
  "/umm-shaif": {
    label: "Umm Shaif Field",
    parent: "/adnoc-offshore",
  },
  "/oil-system": {
    label: "Oil System US001",
    parent: "/umm-shaif",
  },
  "/well-head": {
    label: "Well Head US001",
    parent: "/oil-system",
  },
  "/wing-choke": {
    label: "Wing Choke Valve US001",
    parent: "/well-head",
  },
  "/actuator": {
    label: "Actuator US001",
    parent: "/wing-choke",
  },
};

const AdnocTopHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Build breadcrumb path upward
  const trail = [];
  let path = currentPath;

  while (path) {
    const node = hierarchy[path];
    if (!node) break;
    trail.unshift({ path, label: node.label });
    path = node.parent;
  }

  return (
    <div className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-6 py-4 flex flex-col gap-2">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-[#00458F] h-10 w-10 rounded-sm flex items-center justify-center">
            <div className="bg-white h-4 w-4 rounded-full border-4 border-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white leading-none">
            ADNOC Emission <br /> Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-1">
            <LayoutList className="w-4 h-4" />
            <span className="font-medium">68 Active Assets</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>Last sync: 2 minutes ago</span>
          </div>

          <button className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <RefreshCcw className="w-4 h-4" /> Refresh Data
          </button>

          <button className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <Download className="w-4 h-4" /> Export Report
          </button>

          <button className="flex items-center gap-2 bg-[#00264D] text-white px-4 py-2 rounded-lg hover:bg-[#003366]">
            <Bell className="w-4 h-4" /> View Alerts (3)
          </button>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        <Link to="/" className="text-blue-600 dark:text-blue-400 font-semibold">Home</Link>
        {trail.map((item, index) => (
          <span key={item.path}>
            <span className="mx-1">&gt;</span>
            {index < trail.length - 1 ? (
              <Link to={item.path} className="text-blue-600 dark:text-blue-400 font-semibold">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-800 dark:text-white font-semibold">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AdnocTopHeader;
