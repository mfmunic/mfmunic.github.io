import React, { useContext } from "react";

import { AppContext } from "../../context";

import GOH from "./portfolioItems/GOHPI";
import RPSLS from "./portfolioItems/RPSLSPI";
import Homepage from "./portfolioItems/HomepagePI";
import Triviagame from "./portfolioItems/TriviagamePI";

export const PortfolioDisplay = () => {
  const { toolbar } = useContext(AppContext);

  return () => {
    switch (toolbar) {
      case "Game Of Hangman":
        return <GOH />;
      case "Rock, Paper, Scissors, Lizard, Spock":
        return <RPSLS />;
      case "Trivia Game":
        return <Triviagame />;
      default:
        return <Homepage />;
    }
  };
};
