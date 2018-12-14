import axios from "axios";

import * as actionTypes from "../actionTypes";

export function menu(menuItem, color) {
  return {
    type: actionTypes.DISPLAY_ITEM,
    payload: { menuItem, color }
  };
}

export function toolbar(toolbarItem) {
  return {
    type: actionTypes.TOOLBAR_ITEM,
    payload: toolbarItem
  };
}

export function mail() {
  // const email = `<form method="POST" action="https://formspree.io/mfmunic@yahoo.com">
  //   <input type="email" name="email" placeholder="mfmunic@gmail.com">
  //   <textarea name="message" placeholder="Test Message"></textarea>
  //   <button type="submit">Send Test</button>
  // </form>`;

  return {
    type: actionTypes.EMAIL,
    payload: axios({
      method: "post",
      url: "https://formspree.io/mfmunic@yahoo.com",
      data: { message: "Test" },
      dataType: "json"
    })
  };
}
