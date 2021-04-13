import React, { useEffect, useContext } from "react";

import { AppContext } from "../../context";

import EmailForm from "./EmailForm";
import EmailRecieved from "./EmailRecieved";
import EmailPending from "./EmailPending";

export const EmailCI = () => {
  const { emailRecieved, emailPending, failValid, resetEmail } = useContext(AppContext);

  // TODO
  useEffect(() => {
    return () => {
      failValid([]);
      resetEmail();
    };
  });

  const decidesScreen = () => {
    if (emailRecieved) {
      return <EmailRecieved />;
    } else if (emailPending) {
      return <EmailPending />;
    } else {
      return <EmailForm />;
    }
  };
  return <div id="emailDisplay">{decidesScreen()}</div>;
};
