import React, { useContext } from "react";

import { AppContext } from "../context";

import { HomeDisplay } from "./displays/HomeDisplay";
import { AboutDisplay } from "./displays/AboutDisplay";
import { ResumeDisplay } from "./displays/ResumeDisplay";
import { ContactDisplay } from "./displays/ContactDisplay";
import { NoMobileDisplay } from "./displays/NoMobileDisplay";
import { PortfolioDisplay } from "./displays/PortfolioDisplay";

export const Display = () => {
  const { location } = useContext(AppContext);

  const displayPicker = (location) => {
    switch (location) {
      case "About":
        return <AboutDisplay />;
      case "Contact":
        return <ContactDisplay />;
      case "Resume":
        return <ResumeDisplay />;
      case "Portfolio":
        return <PortfolioDisplay />;
      default:
        return window.innerWidth < 770 ? <NoMobileDisplay /> : <HomeDisplay />;
    }
  };

  const display = displayPicker(location);
  return <div className={`display ${location !== "Homepage" ? "display--padding" : ""}`}>{display}</div>;
};
