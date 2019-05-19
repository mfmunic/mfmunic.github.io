import React from 'react';
import marcandhog from './../utils/images/marc_and_hog_mainPage.png';
import marc from './../utils/images/Marc.png';
import marcandtractor from './../utils/images/marc_and_tractor_mainPage.png';
import marcandbeard from './../utils/images/marc_big_beard_mainPage.png';

const HomeDisplay = () => {
  return [
    <div className="homeImages" key="homeImages">
      <img src={marc} alt="Marc" />
      <img src={marcandhog} alt="Marc" />
      <img src={marcandtractor} alt="Marc" />
      <img src={marcandbeard} alt="Marc" />
    </div>,
    <div className="homeDisplay-intro-background z5" key="homeDisplay-intro">
      <div className="homeDisplay-intro">
        <h1 className="homeDisplay-intro-line">
          Hello, I'm <span className="Text--blue">Marc F. Munic</span>.
        </h1>
        <h1 className="homeDisplay-intro-line">
          I'm a full-stack web developer.
        </h1>
      </div>
    </div>
  ];
};

export default HomeDisplay;
