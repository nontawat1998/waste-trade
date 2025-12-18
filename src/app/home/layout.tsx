import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <div className="relative min-h-screen bg-white mt-20">
      <div className="relative z-10 ">
        {children}
      </div>
    </div>
  );
}
