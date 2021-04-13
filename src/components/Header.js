import React, { useContext } from "react";

import { AppContext } from "../context";

import { AboutToolbar } from "./toolbars/AboutToolbar";
import { ResumeToolbar } from "./toolbars/ResumeToolbar";
import { ContactToolbar } from "./toolbars/ContactToolbar";
import { PortfolioToolbar } from "./toolbars/PortfolioToolbar";

export const Header = () => {
  const { location, color } = useContext(AppContext);

  const toolbarPicker = (location) => {
    switch (location) {
      case "About":
        return <AboutToolbar />;
      case "Contact":
        return <ContactToolbar />;
      case "Resume":
        return <ResumeToolbar />;
      case "Portfolio":
        return <PortfolioToolbar />;
      default:
        return <div />;
    }
  };

  const toolbar = toolbarPicker(location);

  return (
    <div>
      <div id="header">
        <h1 id="headerText" className={`Text--${color}`}>
          <strong>{location === "Resume" ? "R\u00C9SUM\u00C9" : location.toUpperCase()}</strong>
        </h1>
      </div>
      <div id="logoBorderHeader" />
      <div id="lowerLine" className={`HeaderBorder--${color}`} />
      {location !== "Homepage" && (
        <div id="toolbar" className={`Border--${color}`}>
          {toolbar}
        </div>
      )}
    </div>
  );
};
