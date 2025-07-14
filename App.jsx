import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AdnocHierarchy from "./pages/AdnocHierarchy";
import AdnocOffshoreHierarchy from './pages/AdnocOffshoreHierarchy';
import UmmShaifPage from "./pages/UmmShaifPage";
import OilSystemUS001 from "./pages/OilSystemUS001";
import WellHeadUS001 from "./pages/WellHeadUS001";
import WingChokeValveUS001 from "./pages/WingChokeValveUS001";
import ActuatorUS001 from "./pages/ActuatorUS001";

function App() {
  return (
    <div className="flex w-full bg-gray-50 dark:bg-[#0f172a] text-[#0F172A] dark:text-white min-h-screen transition-colors">
      <Sidebar />
      <div className="ml-[300px] flex-1 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard/adnoc" replace />} />
          <Route path="/dashboard" element={<Navigate to="/dashboard/adnoc" replace />} />
          <Route path="/dashboard/adnoc" element={<AdnocHierarchy />} />
          <Route path="/adnoc-offshore" element={<AdnocOffshoreHierarchy />} />
          <Route path="/umm-shaif" element={<UmmShaifPage />} />
          <Route path="/oil-system" element={<OilSystemUS001 />} />
          <Route path="/well-head" element={<WellHeadUS001 />} />
          <Route path="/wing-choke" element={<WingChokeValveUS001 />} />
          <Route path="/actuator" element={<ActuatorUS001 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
