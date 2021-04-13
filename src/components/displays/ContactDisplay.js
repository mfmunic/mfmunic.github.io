import React, { useContext } from "react";

import { AppContext } from "../../context";

import EmailCI from "./contactItems/EmailCI";
import LinksCI from "./contactItems/LinksCI";

export const ContactDisplay = () => {
  const { toolbar } = useContext(AppContext);

  return () => {
    switch (toolbar) {
      case "Links":
        return <LinksCI />;
      default:
        return <EmailCI />;
    }
  };
};
