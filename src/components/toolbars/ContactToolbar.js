import React from "react";

import { ToolbarButton } from "../utils/ToolbarButton";

export const ContactToolbar = () => {
  const color = "orange";
  return (
    <div>
      <div className="imageHolder">
        <img src={require("../utils/images/marcandhog.JPG")} alt="Sexy Beast" id="mahToolbar" />
      </div>
      <div id="portfolioTools">
        <ToolbarButton text="E-Mail" color={color} />
        <ToolbarButton text="Links" color={color} />
      </div>
    </div>
  );
};
