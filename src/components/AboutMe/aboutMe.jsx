import React from 'react';
import { Drawer } from 'antd';

import './aboutMe.css';
import Paragraph from 'antd/lib/typography/Paragraph';

const AboutMe = (props) => {
  const { open, setOpen } = props;

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const languages = [
    'C/C++',
    'Python',
    'JavaScript/TypeScript',
    'Nodejs/Express',
    'HTML/CSS',
    'React',
    'Linux',
    'Qt',
    'learning more...',
  ];

  return (
    <div className={'about-me-wrapper'}>
      <Drawer
        className={'about-me-drawer'}
        title={'About Me'}
        open={open}
        onClose={handleDrawerClose}
        placement={'right'}
      >
        <Paragraph className={'font-sans font-medium text-sky-600 text-xl'}>
          👋Hello there, I'm a computer science alumni from Washington State
          University. I have just got in touched with frontend technology for a
          year, pretty taking interest in making myself more experienced in this
          field. I will continuously gain more experience and explore more fun
          stuff😊
        </Paragraph>
        <div className={'languages text-black font-medium text-xl'}>
          👉My Tech Stack:
          <ul>
            <br />
            {languages.map((item, index) => {
              return (
                <li
                  key={index}
                  className={'font-sans'}
                  style={{ lineHeight: '1vh', textAlign: 'center' }}
                >
                  <p className={'content-center languages-list'}>{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default AboutMe;
