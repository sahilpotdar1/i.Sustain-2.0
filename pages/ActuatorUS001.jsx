import React from "react";
import AdnocTopHeader from "../components/AdnocTopHeader";
import AdditionalEmissionInsights from "../components/AdditionalEmissionInsights";
import {
  ArrowDown,
  ArrowUp,
  Flame,
  Leaf,
  Cloud,
  Zap,
  Settings,
  Download,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const ActuatorUS001 = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 min-h-screen">
      <AdnocTopHeader />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Actuator US001</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Level 7 Asset</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-md transition">
              <Download className="w-4 h-4" />
              Export Report
            </button>
            <button className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md transition">
              <Settings className="w-4 h-4" />
              Settings
            </button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard title="Total CO₂e" value="40 t" change="2.1% vs target" icon={<Cloud className="w-5 h-5 text-blue-500" />} positive borderColor="border-blue-500" />
          <StatCard title="Methane Intensity" value="0.08%" change="0.02% reduction" icon={<Leaf className="w-5 h-5 text-green-500" />} positive borderColor="border-green-500" />
          <StatCard title="Flaring Volume" value="2.8 MCF" change="4.3% vs target" icon={<Flame className="w-5 h-5 text-orange-500" />} positive={false} borderColor="border-orange-500" />
          <StatCard title="Energy Efficiency" value="94.7%" change="1.2% improvement" icon={<Zap className="w-5 h-5 text-purple-500" />} positive borderColor="border-purple-500" />
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 border-l-4 border-blue-500 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="flex items-center gap-2 text-base text-blue-800 dark:text-blue-200 font-semibold mb-1 uppercase tracking-wide">
              <Cloud className="w-4 h-4" />
              Scope 1
            </div>
            <div className="text-sm text-blue-600 dark:text-blue-300 mb-2">Direct Emissions</div>
            <div className="text-5xl font-extrabold text-blue-900 dark:text-blue-100 tracking-tight">40</div>
            <div className="text-sm text-blue-700 dark:text-blue-300 flex items-center mt-2 font-medium animate-pulse">
              <ArrowUp className="w-4 h-4 mr-1" /> 1.8% from yesterday
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900 dark:to-green-800 border-l-4 border-green-500 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-base text-green-800 dark:text-green-200 font-semibold mb-2 uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4" />
                Compliance Status
              </div>
              <div className="text-green-700 dark:text-green-300 font-medium text-lg">0.8% improvement</div>
            </div>
            <div className="relative w-24 h-24 animate-spin-slow">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path className="text-green-200 dark:text-green-700" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831 a 15.9155 15.9155 0 1 1 0 -31.831" />
                <path className="text-green-600" strokeWidth="4" strokeDasharray="94.7, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831 a 15.9155 15.9155 0 1 1 0 -31.831" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-green-700 dark:text-green-300 font-bold text-xl">94.7%</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-100 to-red-50 dark:from-red-900 dark:to-red-800 border-l-4 border-red-500 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="flex items-center gap-2 text-base text-red-800 dark:text-red-200 font-semibold mb-1 uppercase tracking-wide">
              <AlertTriangle className="w-4 h-4" />
              Critical Alerts
            </div>
            <div className="text-red-600 dark:text-red-300 font-medium text-lg">3 from last week</div>
            <div className="text-5xl font-extrabold text-red-700 dark:text-red-100 mt-2 tracking-tight">3</div>
            <div className="mt-4 animate-bounce">
              <img src="/alert.svg" alt="alert icon" className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Breakdown and Emission Sources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <BreakdownCard title="Gas Emissions Breakdown" items={[
            { label: "CO2", value: "25", percentage: "62.5%", color: "bg-blue-600" },
            { label: "CH4", value: "12", percentage: "30.0%", color: "bg-orange-500" },
            { label: "N2O", value: "3", percentage: "7.5%", color: "bg-purple-500" },
          ]} />
          <BreakdownCard title="Emission Sources" items={[
            { label: "Combustion", value: "15", percentage: "37.5%", color: "bg-red-500" },
            { label: "Venting", value: "15", percentage: "37.5%", color: "bg-yellow-400" },
            { label: "Flaring", value: "5", percentage: "12.5%", color: "bg-pink-400" },
            { label: "Fugitive", value: "5", percentage: "12.5%", color: "bg-green-500" },
          ]} />
        </div>

        {/* Child Assets - None */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow overflow-hidden">
          <div className="px-5 py-3 border-b dark:border-gray-700 flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">Child Assets</h3>
          </div>
          <div className="p-6 text-gray-600 dark:text-gray-400 text-sm text-center">
            No child assets available at this level
          </div>
        </div>
        <AdditionalEmissionInsights/>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, icon, positive, borderColor }) => (
  <div className={`bg-white dark:bg-gray-900 shadow dark:shadow-lg rounded-xl border-l-4 ${borderColor} p-5 flex items-center justify-between hover:shadow-md transition`}>
    <div>
      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">{title}</div>
      <div className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</div>
      <div className={`text-sm flex items-center mt-1 font-medium ${positive ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}>
        {positive ? <ArrowDown className="w-4 h-4 mr-1" /> : <ArrowUp className="w-4 h-4 mr-1" />} {change}
      </div>
    </div>
    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">{icon}</div>
  </div>
);

const BreakdownCard = ({ title, items }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border dark:border-gray-700">
    <div className="text-lg font-semibold text-gray-800 dark:text-white mb-4">{title}</div>
    {items.map(({ label, value, percentage, color }) => (
      <div key={label} className="mb-4">
        <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          <span>{label}</span>
          <span>{value} tCO₂e ({percentage})</span>
        </div>
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className={`h-2 ${color} rounded-full`} style={{ width: percentage }}></div>
        </div>
      </div>
    ))}
  </div>
);

export default ActuatorUS001;
