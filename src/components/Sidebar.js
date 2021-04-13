import React from "react";

import { Logo } from "./utils/Logo";
import { MenuItem } from "./utils/MenuItem";

export const Sidebar = () => {
  const year = new Date().getFullYear();

  return (
    <div className="sidebar z10">
      <div>
        <Logo />
        <div className="sidebar-menu">
          <MenuItem text="About" color="red" />
          <MenuItem text="Resume" color="yellow" />
          <MenuItem text="Portfolio" color="green" />
          <MenuItem text="Contact" color="orange" />
        </div>
      </div>
      <div className="sidebar-copyright">
        <div className="sidebar-copyright-name">&nbsp;Marc&nbsp;</div>
        <div className="sidebar-copyright-name">&nbsp;Munic&nbsp;</div>
        {"\u00A9"}
        {year}
      </div>
    </div>
  );
};
