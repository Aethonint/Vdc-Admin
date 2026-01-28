"use client";

import { 
  ClipboardCheck, 
  ClipboardX, 
  Wrench, 
  AlertTriangle, 
  PlusSquare, 
  UserPlus, 
  Upload, 
  AlertCircle,
  Calendar,
  Droplet,
  FileText,
  Clock
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

// --- Data for Charts ---

// 1. Bar Chart Data (Report and Analysis)
const barData = [
  { name: "Jan", defects: 150, incidents: 100 },
  { name: "Feb", defects: 380, incidents: 240 },
  { name: "Mar", defects: 200, incidents: 180 },
  { name: "Apr", defects: 290, incidents: 190 },
  { name: "May", defects: 180, incidents: 140 },
  { name: "Jun", defects: 190, incidents: 120 },
  { name: "Jul", defects: 280, incidents: 190 },
  { name: "Aug", defects: 100, incidents: 80 },
  { name: "Sep", defects: 200, incidents: 150 },
  { name: "Oct", defects: 380, incidents: 290 },
  { name: "Nov", defects: 280, incidents: 210 },
  { name: "Dec", defects: 100, incidents: 80 },
];

// 2. Gauge Chart Data Helper
const GaugeChart = ({ value, color }: { value: number; color: string }) => {
  const data = [
    { name: "Value", value: value },
    { name: "Remaining", value: 100 - value },
  ];
  return (
    <div className="relative h-24 w-full flex justify-center items-end overflow-hidden">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="100%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value"
            stroke="none"
          >
            <Cell fill={color} />
            <Cell fill="#e5e7eb" /> {/* Gray background track */}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {/* Centered Percentage Text */}
      <div className="absolute bottom-0 text-center mb-2">
        <span className="text-xl font-bold text-gray-700">{value}%</span>
      </div>
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="mb-6 text-2xl font-bold text-[#001f4d]">Dashboard</h1>

      {/* --- TOP ROW: STATS CARDS --- */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        
        {/* Card 1: Checks Completed */}
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
            <ClipboardCheck size={24} />
          </div>
          <h3 className="text-sm font-semibold text-[#001f4d]">Checks Completed</h3>
          <p className="mb-4 text-xs text-gray-400">Completed Today</p>
          <GaugeChart value={75.5} color="#22c55e" />
        </div>

        {/* Card 2: Checks Incomplete */}
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
            <ClipboardX size={24} />
          </div>
          <h3 className="text-sm font-semibold text-[#001f4d]">Checks Incomplete</h3>
          <p className="mb-4 text-xs text-gray-400">Completed Today</p>
          <GaugeChart value={45.2} color="#ef4444" />
        </div>

        {/* Card 3: Defects Reported */}
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">
            <Wrench size={24} />
          </div>
          <h3 className="text-sm font-semibold text-[#001f4d]">Defects Reported</h3>
          <p className="mb-4 text-xs text-gray-400">Completed Today</p>
          <GaugeChart value={92.8} color="#eab308" />
        </div>

        {/* Card 4: Incidents Reported */}
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
            <AlertTriangle size={24} />
          </div>
          <h3 className="text-sm font-semibold text-[#001f4d]">Incidents Reported</h3>
          <p className="mb-4 text-xs text-gray-400">Completed Today</p>
          <GaugeChart value={12.1} color="#ef4444" />
        </div>
      </div>

      {/* --- BOTTOM ROW: CHART + ACTIONS + REMINDERS --- */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        
        {/* 1. Report and Analysis (Takes up 6 columns - 50%) */}
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 lg:col-span-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-bold text-[#001f4d]">Report and Analysis</h3>
            <div className="flex gap-2">
              <button className="rounded-md border px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50">Weekly</button>
              <button className="rounded-md border px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50">Monthly</button>
            </div>
          </div>
          
          {/* Legend */}
          <div className="mb-4 flex gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-[#001f4d]"></span> Defects
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-[#eab308]"></span> Incidents
            </div>
          </div>

          {/* Bar Chart */}
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#9ca3af' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#9ca3af' }} 
                />
                <Tooltip 
                  cursor={{ fill: '#f3f4f6' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="defects" fill="#001f4d" radius={[2, 2, 0, 0]} barSize={8} />
                <Bar dataKey="incidents" fill="#eab308" radius={[2, 2, 0, 0]} barSize={8} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 2. Quick Actions (Takes up 3 columns - 25%) */}
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 lg:col-span-3">
          <h3 className="mb-4 font-bold text-[#001f4d]">Quick Actions</h3>
          <div className="space-y-3">
            <button className="flex w-full items-center gap-3 rounded-lg bg-gray-50 p-3 text-sm font-medium text-[#001f4d] hover:bg-gray-100 transition-colors">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#001f4d] text-white">
                <PlusSquare size={16} />
              </div>
              Add Vehicle
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg bg-gray-50 p-3 text-sm font-medium text-[#001f4d] hover:bg-gray-100 transition-colors">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#001f4d] text-white">
                <UserPlus size={16} />
              </div>
              Add Driver
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg bg-gray-50 p-3 text-sm font-medium text-[#001f4d] hover:bg-gray-100 transition-colors">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#001f4d] text-white">
                <Upload size={16} />
              </div>
              Upload Document
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg bg-gray-50 p-3 text-sm font-medium text-[#001f4d] hover:bg-gray-100 transition-colors">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#001f4d] text-white">
                <AlertCircle size={16} />
              </div>
              Escalate Defects
            </button>
          </div>
        </div>

        {/* 3. Reminders (Takes up 3 columns - 25%) */}
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 lg:col-span-3">
          <h3 className="mb-4 font-bold text-[#001f4d]">Reminders</h3>
          <div className="space-y-4">
            
            <div className="flex items-start gap-3">
              <Calendar className="mt-0.5 h-4 w-4 text-[#001f4d]" />
              <div className="text-sm">
                <p className="font-medium text-[#001f4d]">MOT expiring in 3 days</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Wrench className="mt-0.5 h-4 w-4 text-[#001f4d]" />
              <div className="text-sm">
                <p className="font-medium text-[#001f4d]">Service expiring in 3 days</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Droplet className="mt-0.5 h-4 w-4 text-[#001f4d]" />
              <div className="text-sm">
                <p className="font-medium text-[#001f4d]">Car wash expiring in 4 days</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-4 w-4 text-[#001f4d]" />
              <div className="text-sm">
                <p className="font-medium text-[#001f4d]">Mechanical unresolved on KBX 365M</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileText className="mt-0.5 h-4 w-4 text-[#001f4d]" />
              <div className="text-sm">
                <p className="font-medium text-[#001f4d]">Inspection at Site A overdue</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileText className="mt-0.5 h-4 w-4 text-[#001f4d]" />
              <div className="text-sm">
                <p className="font-medium text-[#001f4d]">Inspection at Site B overdue</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}