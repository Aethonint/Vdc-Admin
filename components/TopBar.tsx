"use client";

import { Menu, Bell, Search } from "lucide-react";

interface TopBarProps {
  toggleSidebar: () => void;
}

export default function TopBar({ toggleSidebar }: TopBarProps) {
  return (
    <header className="flex h-16 items-center justify-between bg-[#001f4d] px-4 shadow-md z-20 relative">
      <div className="flex items-center gap-4">
        {/* Hamburger Toggle */}
        <button
          onClick={toggleSidebar}
          className="rounded p-2 text-white hover:bg-blue-800 transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Search Bar */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Find vehicle, system setting..."
            className="h-10 w-80 rounded border border-blue-800 bg-[#0a2a5c] pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="relative rounded-full p-2 text-white hover:bg-blue-800">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-orange-500"></span>
        </button>
        <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-[#001f4d] font-bold">
          JD
        </div>
      </div>
    </header>
  );
}