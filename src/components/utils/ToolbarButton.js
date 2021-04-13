import React, { useContext } from "react";

import { AppContext } from "../../context";

export const ToolbarButton = (props) => {
  const { setAppState } = useContext(AppContext);
  const { text, color } = props;

  const active = text === this.props.display.toolbar ? "active" : "inactive";
  const textColor = active === "active" ? `BG--${color}` : `Text--${color}`;
  return (
    <div
      className={`toolbarButton toolbarButton-${active} ${textColor}`}
      onClick={() => {
        setAppState({ toolbar: text });
      }}
    >
      {text}
    </div>
  );
};
