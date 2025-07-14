import React, { useEffect, useState } from "react";
import { Tree, ConfigProvider, theme as antdTheme } from "antd";
import {
  LayoutDashboard,
  MapPin,
  FileText,
  Building2,
  Waves,
  Factory,
  Flame,
  Droplets,
  RadioTower,
  Aperture,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Sidebar() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const pathToKeysMap = {
    "/dashboard/adnoc": ["0-0"],
    "/adnoc-offshore": ["0-0", "0-0-0"],
    "/umm-shaif": ["0-0", "0-0-0", "0-0-0-0"],
    "/oil-system": ["0-0", "0-0-0", "0-0-0-0", "0-0-0-0-0"],
    "/well-head": ["0-0", "0-0-0", "0-0-0-0", "0-0-0-0-0", "0-0-0-0-0-0"],
    "/wing-choke": ["0-0", "0-0-0", "0-0-0-0", "0-0-0-0-0", "0-0-0-0-0-0", "0-0-0-0-0-0-0"],
    "/actuator": ["0-0", "0-0-0", "0-0-0-0", "0-0-0-0-0", "0-0-0-0-0-0", "0-0-0-0-0-0-0", "0-0-0-0-0-0-0-0"],
  };

  const [expandedKeys, setExpandedKeys] = useState(["0-0"]);

  useEffect(() => {
    const keys = pathToKeysMap[location.pathname];
    if (keys) setExpandedKeys(keys);
  }, [location.pathname]);

  const treeData = [
    {
      title: (
        <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
          <Building2 size={16} /> <Link to="/dashboard/adnoc">ADNOC</Link>
        </div>
      ),
      key: "0-0",
      children: [
        {
          title: (
            <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400">
              <Waves size={16} /> <Link to="/adnoc-offshore">ADNOC Offshore</Link>
            </div>
          ),
          key: "0-0-0",
          children: [
            {
              title: (
                <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400">
                  <Factory size={16} /> <Link to="/umm-shaif">Umm Shaif Field</Link>
                </div>
              ),
              key: "0-0-0-0",
              children: [
                {
                  title: (
                    <div className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
                      <Flame size={16} /> <Link to="/oil-system">Oil System US001</Link>
                    </div>
                  ),
                  key: "0-0-0-0-0",
                  children: [
                    {
                      title: (
                        <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                          <Droplets size={16} /> <Link to="/well-head">Well Head US001</Link>
                        </div>
                      ),
                      key: "0-0-0-0-0-0",
                      children: [
                        {
                          title: (
                            <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                              <RadioTower size={16} /> <Link to="/wing-choke">Wing Choke Valve US001</Link>
                            </div>
                          ),
                          key: "0-0-0-0-0-0-0",
                          children: [
                            {
                              title: (
                                <div className="flex items-center gap-2 text-pink-700 dark:text-pink-400">
                                  <Aperture size={16} /> <Link to="/actuator">Actuator US001</Link>
                                </div>
                              ),
                              key: "0-0-0-0-0-0-0-0",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        components: {
          Tree: {
            colorBgContainer: isDarkMode ? "#0f172a" : "#ffffff",
          },
        },
      }}
    >
    <aside className="fixed top-0 left-0 w-[270px] h-screen bg-white dark:bg-[#1e293b] border-r dark:border-gray-700 flex flex-col justify-between z-50 text-[#0F172A] dark:text-white scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <div className="bg-gradient-to-br from-[#00458F] to-[#0071BC] px-4 py-4 text-white">
          <div className="flex flex-col items-center justify-center">
            <div className="h-14 w-14 bg-white rounded-lg flex items-center justify-center">
              <img src="/adnoc logo.png" alt="ADNOC Logo" className="h-10 w-10 object-contain" />
            </div>
            <div className="text-sm mt-2 font-semibold text-center leading-tight">
              ADNOC Operations
            </div>
          </div>
        </div>

        <div className="flex-1 px-4 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">

          <nav className="flex flex-col gap-3">
            <div className="flex items-center gap-3 px-3 py-2 rounded-xl text-base font-medium text-[#0F172A] dark:text-white">
              <LayoutDashboard size={18} /> Dashboard
            </div>

            <Tree
              treeData={treeData}
              expandedKeys={expandedKeys}
              onExpand={setExpandedKeys}
              onSelect={(selectedKeys, info) => {
                const linkElement = info.node.title.props.children.find((child) => child?.type === Link);
                if (linkElement?.props?.to) {
                  navigate(linkElement.props.to);
                }
              }}
              showLine
              className="text-sm dark:text-white"
              style={{
                backgroundColor: isDarkMode ? "#1e293b" : "#ffffff",
                padding: 8,
                borderRadius: 8,
              }}
            />

            <Link
              to="/heatmap"
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-base font-medium text-[#0F172A] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700"
            >
              <MapPin size={18} /> Map View
            </Link>

            <Link
              to="/review-inbox"
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-base font-medium text-[#0F172A] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700"
            >
              <FileText size={18} /> Reports
            </Link>
          </nav>
        </div>

        <div className="px-4 py-3 border-t dark:border-gray-700 bg-white dark:bg-[#1e293b] text-base text-gray-700 dark:text-white">
          <div className="flex items-center justify-between mb-3">
            <span>Theme</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
              />
              <div className="w-10 h-5 bg-gray-200 dark:bg-gray-600 rounded-full peer-checked:bg-green-500" />
              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5" />
            </label>
          </div>
          <div className="flex items-center justify-between">
            <span>Language</span>
            <span className="font-semibold">EN</span>
          </div>
        </div>
      </aside>
    </ConfigProvider>
  );
}

export default Sidebar;
