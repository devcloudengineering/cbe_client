import React from "react";
import HeaderDashboard from "./HeaderDashboard";
import CardDashboard from "./CardDashboard";

export default function PanelDashboard() {
  return (
    <div className="h-full">
      <HeaderDashboard />
      <CardDashboard />
    </div>
  );
}
