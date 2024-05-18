import React from "react";
import Sidebar from "@/components/sidebar";
import InfoBar from "@/components/infobar";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <InfoBar />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
