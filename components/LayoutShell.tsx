"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [isSidebarLocked, setIsSidebarLocked] = useState(true);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  // LOGIC UPDATE:
  // We check if the sidebar is Locked OR Hovered.
  // If either is true, we push the content 64 units (16rem) to the right.
  // This ensures the TopBar shifts out of the way when you hover the sidebar.
  const isSidebarOpen = isSidebarLocked || isSidebarHovered;
  const marginClass = isSidebarOpen ? "ml-64" : "ml-16";

  return (
    <div className="min-h-screen w-full bg-gray-50">
      
      {/* Sidebar Component */}
      <Sidebar
        isLocked={isSidebarLocked}
        isHovered={isSidebarHovered}
        onMouseEnter={() => !isSidebarLocked && setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
      />

      {/* Main Content Wrapper */}
      {/* This div moves right when sidebar is hovered, preventing overlap */}
      <div className={`flex flex-col transition-all duration-300 ease-in-out ${marginClass}`}>
        
        {/* TopBar */}
        <TopBar toggleSidebar={() => setIsSidebarLocked(!isSidebarLocked)} />

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
        
      </div>
    </div>
  );
}

