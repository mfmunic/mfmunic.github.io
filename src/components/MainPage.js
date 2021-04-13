import React from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Display } from "./Display";

export const MainPage = () => {
  return (
    <div id="fullPage">
      <Sidebar />
      <div id="notSidebar">
        <Header />
        <Display />
      </div>
    </div>
  );
};
