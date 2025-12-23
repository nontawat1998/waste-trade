import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Navbar } from "@/components/common/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar header={""} message={2} login={true} notification={15} cart={0} />

      <div className="relative mt-20 min-h-screen bg-white">
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
