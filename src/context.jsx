import React, { useState, createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = (props) => {
  const initState = {
    location: "Homepage",
    color: "blue",
    toolbar: null,
    emailRecieved: false,
    emailPending: false,
  };

  const [state, setState] = useState(initState);

  const setAppState = (newValue) => {
    setState({ ...state, ...newValue });
  };

  // TODO
  // const failValid = () => {setAppState}

  return <AppContext.Provider value={{ ...state, setAppState }}>{props.children}</AppContext.Provider>;
};
