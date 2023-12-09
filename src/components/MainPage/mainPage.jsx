import React, { useEffect } from 'react';
import { Layout, Space, Divider, Carousel } from 'antd';
import {
  CopyrightTwoTone,
  GithubFilled,
  LinkedinFilled,
} from '@ant-design/icons';

import './mainPage.css';

const { Footer } = Layout;
const MainPage = (props) => {
  return (
    <div
      className={
        'flex items-center w-screen h-screen flex-col font-sans decoration-amber-100 mt-10 gap-20'
      }
    >
      <div className={'text-8xl relative font-bold text-center container'}>
        <h1 className={'hello relative'}>Hello World</h1>
      </div>
      <div className={'border-2 w-screen'}>
        <div>
          <h1 className={'text-4xl text-center'}>I'm...</h1>
        </div>
        <div>
          <h1 className={'text-4xl text-center'}>I Like...</h1>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
