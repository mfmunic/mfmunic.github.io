import React from "react";
import { render } from "react-dom";

import "./sass/endex.css";
import { AppProvider } from "./context";
import { MainPage } from "./components/MainPage";

render(
  <AppProvider>
    <MainPage />
  </AppProvider>,
  document.getElementById("root")
);
