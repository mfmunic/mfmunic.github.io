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

export function email(text) {
  return {
    type: actionTypes.EMAIL_ADDRESS,
    payload: text
  };
}

export function subject(text) {
  return {
    type: actionTypes.EMAIL_SUBJECT,
    payload: text
  };
}

export function content(text) {
  return {
    type: actionTypes.EMAIL_CONTENT,
    payload: text
  };
}

export function mail(address, subject, content) {
  return {
    type: actionTypes.EMAIL,
    payload: axios({
      method: "post",
      url: "/mail",
      data: { address, subject, content },
      dataType: "json"
    })
  };
}

export function failValid(failArr) {
  return {
    type: actionTypes.VALIDITRON,
    payload: failArr
  };
}

export function resetEmail() {
  return {
    type: actionTypes.EMAIL_RESET,
    payload: false
  };
}
