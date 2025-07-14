import React, { useEffect, useState} from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  PieChart,
  Pie,
  Cell,
  Line as ReLine
} from "recharts";

const AdditionalEmissionInsights = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
   useEffect(() => {

    const checkDark = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);
  const alerts = [
    {
      id: 1001,
      severity: "High",
      description: "Methane exceeds threshold at Compressor 1",
      timestamp: "2025-07-11 22:15",
      status: "Open",
    },
    {
      id: 1002,
      severity: "Medium",
      description: "Calibration due on Methane Sensor",
      timestamp: "2025-07-10 19:00",
      status: "Open",
    },
    {
      id: 1003,
      severity: "Low",
      description: "Seal A minor leak",
      timestamp: "2025-07-09 16:55",
      status: "Resolved",
    },
  ];

  const maintenance = [
    {
      task: "Seal Replacement on Compressor 1",
      due: "2025-07-12",
      tag: "USGP-COMP-001",
      type: "Scheduled",
      duration: "2h",
      alerts: 1,
    },
    {
      task: "Methane Sensor Calibration",
      due: "2025-07-13",
      tag: "USGP-SNSR-001",
      type: "Calibration",
      duration: "1h",
      alerts: 0,
    },
  ];


  const barData = [
    { name: "WH-B12", value: 1248.7, fill: "#002f5f" },
    { name: "COMP-C5", value: 1198.2, fill: "#00a651" },
    { name: "SEP-V202", value: 956.4, fill: "#a855f7" },
    { name: "FLARE-FS8", value: 824.9, fill: "#f97316" },
    { name: "TANK-T18", value: 698.3, fill: "#dc2626" },
  ];

  const lineData = [
    { month: "Jan", CO2: 9200, CH4: 1400, Other: 1200 },
    { month: "Feb", CO2: 9100, CH4: 1380, Other: 1220 },
    { month: "Mar", CO2: 9250, CH4: 1420, Other: 1240 },
    { month: "Apr", CO2: 9300, CH4: 1440, Other: 1230 },
    { month: "May", CO2: 9280, CH4: 1435, Other: 1210 },
    { month: "Jun", CO2: 9260, CH4: 1410, Other: 1200 },
    { month: "Jul", CO2: 9270, CH4: 1400, Other: 1220 },
  ];

  const donutData = [
    { name: "CO₂", value: 4824.5, fill: "#1e3a8a" },
    { name: "CH₄", value: 1312.4, fill: "#22c55e" },
    { name: "H₂S", value: 412.8, fill: "#6b7280" },
    { name: "N₂O", value: 298.3, fill: "#a855f7" },
    { name: "VOC", value: 245.6, fill: "#f43f5e" },
    { name: "NOx", value: 132.8, fill: "#ea580c" },
    { name: "SOx", value: 118.5, fill: "#84cc16" },
    { name: "PM", value: 82.7, fill: "#14b8a6" },
  ];

  const totalEmissionsData = [
    { time: "00:00", value: 2240 },
    { time: "04:00", value: 2050 },
    { time: "08:00", value: 2120 },
    { time: "12:00", value: 2180 },
    { time: "16:00", value: 2360 },
    { time: "20:00", value: 2250 },
    { time: "00:00", value: 2280 },
  ];

  const assets = [
    {
      name: "WH-B12",
      type: "Wellhead",
      status: "Active",
      statusColor: "green",
      location: "Bab Field",
      emissions: "1,248.7 t",
      scope: "Scope 1"
    },
    {
      name: "COMP-C5",
      type: "Compressor",
      status: "Maintenance",
      statusColor: "yellow",
      location: "Bu Hasa Field",
      emissions: "1,198.2 t",
      scope: "Scope 1"
    },
    {
      name: "SEP-V202",
      type: "Separator",
      status: "Active",
      statusColor: "green",
      location: "Asab Field",
      emissions: "956.4 t",
      scope: "Scope 1"
    },
    {
      name: "FLARE-FS8",
      type: "Flare Stack",
      status: "Offline",
      statusColor: "red",
      location: "Sahil Field",
      emissions: "824.9 t",
      scope: "Scope 2"
    },
    {
      name: "TANK-T18",
      type: "Storage Tank",
      status: "Active",
      statusColor: "green",
      location: "Zakum Field",
      emissions: "698.3 t",
      scope: "Scope 1"
    }
  ];
  const lineColor = isDarkMode ? "#60a5fa" : "#0f172a"; 
  const sevColour = (sev) =>
    ({ High: "text-red-500", Medium: "text-yellow-500", Low: "text-green-500" }[sev]);
  return (
    <>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Total Emissions (Scope 1)</h3>
        <select className="text-sm bg-gray-100 dark:bg-gray-800 dark:text-white px-2 py-1 rounded">
          <option>CO₂</option>
          <option>CH₄</option>
          <option>H₂S</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={totalEmissionsData}>
          <XAxis dataKey="time" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <ReLine type="monotone" dataKey="value" stroke={lineColor} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Emission Breakdown</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">By Gas Type (Scope 1)</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={donutData}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={3}
              >
                {donutData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="vertical" verticalAlign="middle" align="right" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      

      {/* Bar and Line Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Total Emissions by Asset</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Scope 1</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="value" isAnimationActive radius={[4, 4, 0, 0]}>
                {barData.map((entry, index) => (
                  <cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow border dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Trend Analysis</h3>
            <select className="text-sm bg-gray-100 dark:bg-gray-800 dark:text-white px-2 py-1 rounded">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="CO2" stroke="#6a5acd" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="CH4" stroke="#22c55e" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="Other" stroke="#f59e0b" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 mt-10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Emission Metrics</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">Scope 1 – Current Levels</span>
      </div>

      {/* Top Emission Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
          <div className="text-sm text-gray-600 dark:text-gray-300">CO₂</div>
          <div className="text-lg font-bold text-gray-900 dark:text-white">4,824.5 t</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Target: 4,600 t</div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded mt-1">
            <div className="h-2 bg-blue-500 rounded" style={{ width: '100%' }}></div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
          <div className="text-sm text-gray-600 dark:text-gray-300">CH₄</div>
          <div className="text-lg font-bold text-gray-900 dark:text-white">1,312.4 t</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Target: 1,280 t</div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded mt-1">
            <div className="h-2 bg-green-500 rounded" style={{ width: '100%' }}></div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
          <div className="text-sm text-gray-600 dark:text-gray-300">H₂S</div>
          <div className="text-lg font-bold text-gray-900 dark:text-white">412.8 t</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Target: 380 t</div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded mt-1">
            <div className="h-2 bg-orange-500 rounded" style={{ width: '100%' }}></div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
          <div className="text-sm text-gray-600 dark:text-gray-300">N₂O</div>
          <div className="text-lg font-bold text-gray-900 dark:text-white">298.3 t</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Target: 290 t</div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded mt-1">
            <div className="h-2 bg-purple-500 rounded" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>

      {/* Other Emissions */}
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Other Emissions</h4>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="bg-red-100 text-red-600 dark:bg-red-800 dark:text-red-200 px-2 py-1 rounded-full">🔬 VOCs: 245.6 t</span>
          <span className="bg-orange-100 text-orange-600 dark:bg-orange-800 dark:text-orange-200 px-2 py-1 rounded-full">⚠️ NOx: 132.8 t</span>
          <span className="bg-yellow-100 text-yellow-600 dark:bg-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full">🧪 SOx: 118.5 t</span>
          <span className="bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-200 px-2 py-1 rounded-full">💧 PM: 82.7 t</span>
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">🔥 CO: 56.3 t</span>
        </div>
      </div>
    </div>

{/* Asset Table Section */}
      <div className="mt-10 bg-white dark:bg-gray-900 p-6 rounded-xl border dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Asset List</h3>
          <div className="flex gap-2">
            <select className="text-sm bg-gray-100 dark:bg-gray-800 dark:text-white px-2 py-1 rounded">
              <option>All Types</option>
              <option>Wellhead</option>
              <option>Compressor</option>
              <option>Separator</option>
            </select>
            <select className="text-sm bg-gray-100 dark:bg-gray-800 dark:text-white px-2 py-1 rounded">
              <option>All Statuses</option>
              <option>Active</option>
              <option>Maintenance</option>
              <option>Offline</option>
            </select>
          </div>
        </div>
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left border-b dark:border-gray-700">
                <th className="p-2">Name</th>
                <th className="p-2">Type</th>
                <th className="p-2">Status</th>
                <th className="p-2">Location</th>
                <th className="p-2">Emissions (CO₂E)</th>
                <th className="p-2">Scope</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, index) => (
                <tr key={index} className="border-b dark:border-gray-700">
                  <td className="p-2 font-medium">{asset.name}</td>
                  <td className="p-2">{asset.type}</td>
                  <td className="p-2">
                    <span className={`bg-${asset.statusColor}-100 text-${asset.statusColor}-800 dark:bg-${asset.statusColor}-700 dark:text-${asset.statusColor}-200 px-2 py-1 rounded-full`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="p-2">{asset.location}</td>
                  <td className="p-2 font-semibold">{asset.emissions}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded-full ${asset.scope === 'Scope 2' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-gray-100 dark:bg-gray-800'}`}>
                      {asset.scope}
                    </span>
                  </td>
                  <td className="p-2">
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
      
      </div>
        <section className="max-w-full mt-10 space-y-10">
      {/* Alerts */}
      <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm px-6 py-6 w-full">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Alerts</h3>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700">
          <table className="min-w-full text-sm align-middle">
            <thead>
              <tr className="text-left border-b dark:border-gray-700 text-gray-600 dark:text-gray-300">
                <th className="py-2 pr-4 font-medium">ID</th>
                <th className="py-2 pr-4 font-medium">Severity</th>
                <th className="py-2 pr-4 font-medium">Description</th>
                <th className="py-2 pr-4 font-medium">Timestamp</th>
                <th className="py-2 pr-4 font-medium">Status</th>
                <th className="py-2 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((a) => (
                <tr key={a.id} className="border-b last:border-b-0 dark:border-gray-700">
                  <td className="py-3 pr-4 font-medium text-gray-800 dark:text-white">{a.id}</td>
                  <td className={`py-3 pr-4 font-semibold ${sevColour(a.severity)}`}>{a.severity}</td>
                  <td className="py-3 pr-4 max-w-[300px] text-gray-700 dark:text-gray-300">{a.description}</td>
                  <td className="py-3 pr-4 whitespace-nowrap text-gray-700 dark:text-gray-300">{a.timestamp}</td>
                  <td className="py-3 pr-4 text-gray-700 dark:text-gray-300">{a.status}</td>
                  <td className="py-3 space-x-2">
                    <button className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white">Acknowledge</button>
                    <button className="px-3 py-1.5 rounded bg-red-600 hover:bg-red-700 text-white">Escalate</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Maintenance */}
      <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm px-6 py-6 w-full">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-green-500 text-xl">🛠️</span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Maintenance</h3>
        </div>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700">

          <table className="min-w-full text-sm align-middle">
            <thead>
              <tr className="text-left border-b dark:border-gray-700 text-gray-600 dark:text-gray-300">
                <th className="py-2 pr-4 font-medium">Task</th>
                <th className="py-2 pr-4 font-medium">Due</th>
                <th className="py-2 pr-4 font-medium">Tag</th>
                <th className="py-2 pr-4 font-medium">Type</th>
                <th className="py-2 pr-4 font-medium">Duration</th>
                <th className="py-2 font-medium">Alerts</th>
              </tr>
            </thead>
            <tbody>
              {maintenance.map((m, i) => (
                <tr key={i} className="border-b last:border-b-0 dark:border-gray-700">
                  <td className="py-3 pr-4 font-medium text-gray-800 dark:text-white">{m.task}</td>
                  <td className="py-3 pr-4 whitespace-nowrap text-gray-700 dark:text-gray-300">{m.due}</td>
                  <td className="py-3 pr-4 text-gray-700 dark:text-gray-300">{m.tag}</td>
                  <td className="py-3 pr-4 text-gray-700 dark:text-gray-300">{m.type}</td>
                  <td className="py-3 pr-4 text-gray-700 dark:text-gray-300">{m.duration}</td>
                  <td className="py-3 text-gray-700 dark:text-gray-300">{m.alerts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </>
  );
};

export default AdditionalEmissionInsights;
