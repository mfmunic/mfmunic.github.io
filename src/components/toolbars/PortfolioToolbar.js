import React from "react";

import { ToolbarButton } from "../utils/ToolbarButton";

export const PortfolioToolbar = () => {
  const color = "green";
  return (
    <div>
      <div className="imageHolder">
        <img src={require("../utils/images/marcandstatue.jpg")} alt="Sexy Beast" id="masToolbar" />
      </div>
      <div id="portfolioTools">
        <ToolbarButton text="Home Page" color={color} />
        <ToolbarButton text="Game Of Hangman" color={color} />
        <ToolbarButton text="Rock, Paper, Scissors, Lizard, Spock" color={color} />
        <ToolbarButton text="Trivia Game" color={color} />
      </div>
    </div>
  );
};
