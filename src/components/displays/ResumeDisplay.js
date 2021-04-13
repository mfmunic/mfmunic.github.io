import React, { useContext } from "react";

import { AppContext } from "../../context";

import ResumePDF from "./resumeItems/ResumePDF";
import SkillsDisplay from "./resumeItems/SkillsRI";
import WorkExpDisplay from "./resumeItems/WorkExpRI";

export const ResumeDisplay = () => {
  const { toolbar } = useContext(AppContext);

  const decidedDisplay = (chosen) => {
    switch (chosen) {
      case "Skills":
        return <SkillsDisplay />;
      case "Resume PDF":
        return <ResumePDF />;
      default:
        return <WorkExpDisplay />;
    }
  };

  return decidedDisplay(toolbar);
};
