import React, { useContext } from "react";

import { AppContext } from "../../context";

export const Logo = () => {
  const { color, setAppState } = useContext(AppContext);

  return (
    <div className="logo-border z8">
      <div className={`logo BG--${color} z10`} onClick={() => setAppState({ location: "Homepage", color: "blue" })}>
        <h1 className="logo-name logo-name-Marc">Marc</h1>
        <h1 className="logo-name logo-name-Munic">Munic</h1>
      </div>
    </div>
  );
};
