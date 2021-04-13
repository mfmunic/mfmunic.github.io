import React from "react";

import { ToolbarButton } from "../utils/ToolbarButton";

export const ResumeToolbar = () => {
  const color = "yellow";
  return (
    <div>
      <img src={require("../utils/images/Marc.png")} alt="Sexy Beast" id="sexyBeast" />
      <div id="portfolioTools">
        <ToolbarButton text="Work Experience" color={color} />
        <ToolbarButton text="Skills" color={color} />
        <ToolbarButton text="Resume PDF" color={color} />
      </div>
    </div>
  );
};
