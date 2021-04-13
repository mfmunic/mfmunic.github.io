import React, { useContext } from "react";

import { AppContext } from "../../context";

export const MenuItem = (props) => {
  const { setAppState } = useContext(AppContext);
  const { text, color } = props;

  return (
    <div className="fullMenuItem" onClick={() => setAppState({ location: text, color: color })}>
      <div className="menuShadow" />
      <div className="menuItem">
        <div className={`menuTail menuTail-${color}`} />
        <div className={`BG--${color} menuRibbon`}>
          <p>
            <strong>{text === "Resume" ? "R\u00E9sum\u00E9" : text}</strong>
          </p>
        </div>
        <div className={`menuPointer menuPointer-${color}`} />
      </div>
    </div>
  );
};
