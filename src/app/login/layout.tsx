import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <div className="relative min-h-screen bg-[#639F44]">
      <div className="relative z-10 ">
        {children}
      </div>
    </div>
  );
}
