import React from 'react';
import MenuItem from './utils/MenuItem';
import Logo from './utils/Logo';

const Sidebar = () => {
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
        Marc Munic {'\u00A9'} {year}
      </div>
    </div>
  );
};

export default Sidebar;
