import React from 'react';
import { v4 } from 'uuid';
import { Drawer } from 'antd';

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
    'and learning more...',
  ];

  return (
    <div className={'font-sans'}>
      <Drawer
        className={
          'opacity-75 scale-100 transition-all hover:opacity-100 backdrop-blur-xl relative z-2'
        }
        title={'About Me'}
        open={open}
        onClose={handleDrawerClose}
        placement={'right'}
      >
        <p
          className={
            'font-sans font-bold text-blue-600 lg:text-xl md:text-lg sm:text-base'
          }
        >
          👋Hello there, I'm a Computer Science graduate of Washington State
          University. I'm actively looking for a full-time software engineer or
          web developer position.
        </p>
        <div
          className={
            'languages text-black font-medium text-xl flex flex-col mt-2 justify-center'
          }
        >
          <h2 className={'text-amber-400 font-black'}>
            What I'm familiar with:
          </h2>
          <ul>
            {languages.map((item) => {
              return (
                <li key={v4()} className={'text-center'}>
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
