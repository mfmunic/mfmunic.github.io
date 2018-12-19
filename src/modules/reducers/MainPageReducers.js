import * as actionTypes from "../actionTypes";

const initialState = {
  location: "Homepage",
  color: "blue",
  toolbar: "default",
  emailAddress: "",
  emailSubject: "",
  emailContent: "",
  emailRecieved: false,
  addressFail: false,
  contentFail: false
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case `${actionTypes.DISPLAY_ITEM}`:
      const { menuItem, color } = action.payload;
      let start = "default";
      //TODO: add contact page

      switch (menuItem) {
        case "Portfolio":
          start = "Homepage";
          break;
        case "Resume":
          start = "Work Experience";
          break;
        case "Contact":
          start = "E-Mail";
          break;
        default:
          break;
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

    case `${actionTypes.EMAIL_ADDRESS}`:
      return {
        ...state,
        emailAddress: action.payload
      };
    case `${actionTypes.EMAIL_SUBJECT}`:
      return {
        ...state,
        emailSubject: action.payload
      };
    case `${actionTypes.EMAIL_CONTENT}`:
      return {
        ...state,
        emailContent: action.payload
      };

    case `${actionTypes.EMAIL}_FULFILLED`:
      return {
        ...state,
        emailRecieved: action.payload
      };

    case `${actionTypes.EMAIL_RESET}`:
      return {
        ...state,
        emailRecieved: action.payload
      };

    case `${actionTypes.VALIDITRON}`:
      const addressFail = action.payload.includes("address");
      const contentFail = action.payload.includes("content");
      return {
        ...state,
        addressFail,
        contentFail
      };

    default:
      return state;
  }
}
