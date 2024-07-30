import React from "react";
import HeaderDashboard from "./HeaderDashboard";
import CardDashboard from "./CardDashboard";

export default function PanelDashboard() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <HeaderDashboard />
      <CardDashboard />
    </div>
  );
}
