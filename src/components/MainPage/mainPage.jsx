import React from 'react';

import Footer from './footer';
import Im from './im';
import ILike from './iLike';
import './mainPage.css';

const MainPage = (props) => {
  return (
    <>
      <div
        className={
          'flex items-center w-screen h-screen flex-col font-sans decoration-amber-100 mt-10 gap-20 select-none'
        }
      >
        <div
          className={
            'lg:text-8xl md:text-6xl sm:text-4xl relative font-bold text-center container'
          }
        >
          <h1 className={'hello'}>Hello World</h1>
        </div>
        <div
          className={
            'h-full w-5/6 flex flex-col text-amber-50 text-center gap-10 justify-between'
          }
        >
          <Im />
          <div
            className={'flex flex-col items-start h-fit justify-start gap-5'}
          >
            <ILike />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
