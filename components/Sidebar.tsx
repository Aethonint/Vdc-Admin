"use client";
import Image from "next/image";

import { useState } from "react";
import {
  LayoutDashboard,
  ClipboardCheck,
  Truck,
  Users,
  AlertCircle,
  TriangleAlert,
  MapPin,
  FileText,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  isLocked: boolean;   // Controlled by TopBar hamburger
  isHovered: boolean;  // Controlled by hover state
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function Sidebar({
  isLocked,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: SidebarProps) {
  // Determine if the sidebar should visually appear open
  const isOpen = isLocked || isHovered;

  // Local state for dropdown menus
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const toggleDropdown = (label: string) => {
    if (!isOpen) return; // Prevent toggling when collapsed
    setOpenDropdowns((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", hasSub: true },
    { icon: ClipboardCheck, label: "Vehicle Checks", hasSub: true },
    { icon: Truck, label: "Vehicles", hasSub: true },
    { icon: Users, label: "Drivers", hasSub: true },
    { icon: AlertCircle, label: "Defects", hasSub: true },
    { icon: TriangleAlert, label: "Incidents", hasSub: true },
    { icon: MapPin, label: "Sites", hasSub: true },
    { icon: ShieldCheck, label: "Compliance", hasSub: true },
    { icon: FileText, label: "Reports", hasSub: true },
    { icon: Settings, label: "Settings", hasSub: true },
  ];

  return (
    <aside
      className={`fixed left-0  z-9 h-screen bg-[#001f4d] text-white shadow-xl transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-16"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >

{/* BRANDING / LOGO AREA */}
      <div className="flex h-16 items-center justify-center border-b border-blue-800 shadow-sm">
        {/* Full Logo (Visible when Open) */}
        <div 
          className={`relative transition-all duration-300 ${
            isOpen ? "opacity-100 w-40" : "opacity-0 w-0 hidden"
          }`}
        >
          {/* Replace '/logo.png' with your actual file name */}
          <Image 
            src="/logo.png" 
            alt="FleetEdge Logo" 
            width={150} 
            height={40} 
            className="h-8 w-auto object-contain" // keeps ratio, fits height
            priority // loads immediately
          />
        </div>

        {/* Small Icon (Visible when Closed) */}
        {/* You can use a separate small logo image here if you have one, 
            or keep the Truck icon for the collapsed state */}
        {!isOpen && <Truck className="h-6 w-6 text-white" />}
      </div>




      {/* Branding Area (visible only when open)
      <div
        className={`flex h-16 items-center px-6 font-bold text-xl tracking-wider transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <Truck className="mr-2 h-6 w-6" /> FleetEdge
      </div> */}

      {/* Menu List */}
      <nav className="mt-4 h-full overflow-y-auto px-2 pb-20 scrollbar-thin scrollbar-thumb-blue-800">
        <p className={`mb-2 px-4 text-xs font-semibold text-gray-400 ${!isOpen && "hidden"}`}>
          MENU
        </p>

        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <div
                onClick={() => toggleDropdown(item.label)}
                className={`group flex cursor-pointer items-center justify-between rounded-md p-3 transition-colors hover:bg-blue-800 ${
                  !isOpen && "justify-center"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                  <span
                    className={`whitespace-nowrap transition-all duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
                
                {/* Dropdown Arrow */}
                {isOpen && item.hasSub && (
                  <ChevronRight
                    className={`h-4 w-4 text-gray-400 transition-transform ${
                      openDropdowns.includes(item.label) ? "rotate-90" : ""
                    }`}
                  />
                )}
              </div>

              {/* Dropdown Content */}
              {isOpen && openDropdowns.includes(item.label) && (
                <ul className="ml-9 mt-1 space-y-1 border-l border-blue-700 pl-2">
                  <li className="cursor-pointer rounded px-2 py-1 text-sm text-gray-400 hover:text-white">
                    View All
                  </li>
                  <li className="cursor-pointer rounded px-2 py-1 text-sm text-gray-400 hover:text-white">
                    Create New
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-8">
           <p className={`mb-2 px-4 text-xs font-semibold text-gray-400 ${!isOpen && "hidden"}`}>
            OTHERS
          </p>
          <div className={`flex cursor-pointer items-center rounded-md p-3 hover:bg-blue-800 ${!isOpen && "justify-center"}`}>
            <HelpCircle className="h-5 w-5 text-gray-300" />
            <span className={`ml-3 whitespace-nowrap ${isOpen ? "block" : "hidden"}`}>
              Help & Support
            </span>
          </div>
        </div>
      </nav>
    </aside>
  );
}