import * as actionTypes from "../actionTypes";
// import _ from "lodash";

const initialState = {
  location: "Homepage",
  color: "blue",
  toolbar: "default"
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case `${actionTypes.DISPLAY_ITEM}`:
      const { menuItem, color } = action.payload;
      let start = "default";
      //TODO: Change to switch with more toolbars
      if (menuItem === "Portfolio") {
        start = "Homepage";
      }
      return {
        ...state,
        location: menuItem,
        color: color,
        toolbar: start
      };

    case `${actionTypes.TOOLBAR_ITEM}`:
      return {
        ...state,
        toolbar: action.payload
      };

    default:
      return state;
  }
}
