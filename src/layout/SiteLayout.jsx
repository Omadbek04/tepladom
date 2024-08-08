import React from "react";
import { Outlet } from "react-router-dom";

function SiteLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default SiteLayout;
