import React from 'react';
import marcandhog from './../utils/images/marc_and_hog_mainPage.png';
import marc from './../utils/images/Marc.png';
import marcandtractor from './../utils/images/marc_and_tractor_mainPage.png';
import marcandbeard from './../utils/images/marc_big_beard_mainPage.png';

const HomeDisplay = () => {
  const marcPics = [
    <img key='1' src={marc} alt='Marc' />,
    <div key='2' className='filler' />,
    <img key='3' src={marcandhog} alt='Marc' />,
    <div key='4' className='filler' />,
    <img key='5' src={marcandtractor} alt='Marc' />,
    <div key='6' className='filler' />,
    <img key='7' src={marcandbeard} alt='Marc' />,
  ];

  if (window.innerWidth < 1350) {
    marcPics.pop();
    marcPics.pop();
  }

  if (window.innerWidth < 1050) {
    marcPics.pop();
    marcPics.pop();
  }

  if (window.innerWidth < 750) {
    marcPics.pop();
    marcPics.pop();
  }

  return [
    <div className='homeImages' key='homeImages'>
      {marcPics}
    </div>,
    <div className='homeDisplay-intro-background z5' key='homeDisplay-intro'>
      <div className='homeDisplay-intro'>
        <h1 className='homeDisplay-intro-line'>
          Hello, I'm <span className='Text--blue'>Marc F. Munic</span>.
        </h1>
        <h1 className='homeDisplay-intro-line'>I'm a full-stack web developer.</h1>
      </div>
    </div>,
  ];
};

export default HomeDisplay;
