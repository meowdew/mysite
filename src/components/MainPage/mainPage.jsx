import React from 'react';
import {
  GithubIcon,
  LinkedInIcon,
  CodeIcon,
  PhotographyIcon,
  GamingIcon,
  MusicIcon,
  CopyRightIcon,
} from '../MyIcons/icons';

import './mainPage.css';

const MainPage = (props) => {
  const carouselItems = [
    'CS Graduate',
    'Full-Stack Developer',
    'Problem Solver',
  ];

  const hobbies = [
    {
      hobby: 'Coding',
      icon: <CodeIcon />,
      desc: 'Writing code is fun, solving problems is rewarding, and I like to have fun and be a productive person. 💪',
    },
    {
      hobby: 'Photography',
      icon: <PhotographyIcon />,
      desc: 'Art is a way to express myself. I like to take photos of nature and people. Landscape photography is my favorite. 👀',
    },
    {
      hobby: 'Gaming',
      icon: <GamingIcon />,
      desc: "I'm a gamer at heart. I'm good at FPS games, spending thousands hours on playing them. 🥳",
    },
    {
      hobby: 'Music',
      icon: <MusicIcon />,
      desc: 'Music has been with me all my life. Whether I was studying or relaxing, it was always there. 😴',
    },
  ];

  return (
    <>
      <div
        className={
          'flex items-center w-screen h-screen flex-col font-sans decoration-amber-100 mt-10 gap-20'
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
          <div className={'flex justify-between items-center h-1/2 gap-8'}>
            <div className={'sentence'} aria-label={'im'}>
              <p>I'm...</p>
            </div>
            <div
              className={
                'h-full w-full relative flex flex-col justify-between card-container'
              }
            >
              {carouselItems.map((item) => (
                <div className=' h-fit cursor-pointer transition-all flex flex-col justify-center lg:text-4xl md:text-xl sm:text-md w-1/2 text-white font-medium'>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={'flex flex-col items-start h-fit justify-start gap-5'}
          >
            <div
              className={'flex justify-center w-full sentence italic'}
              aria-label={'i-like'}
            >
              <p>I like...</p>
            </div>

            <div
              className={
                'w-full h-fit flex-shrink-0 flex justify-between gap-4 mt-8'
              }
            >
              {hobbies.map((hobby) => {
                return (
                  <div
                    className={
                      'bg-transparent text-white flex-grow lg:text-2xl md:text-xl sm:text-lg hover:scale-125 transition-all whitespace-break-spaces '
                    }
                  >
                    <p className={'font-bold font-sans text-fuchsia-300'}>
                      {hobby.hobby}
                    </p>
                    <p className={'font-sans lg:text-xl md:text-lg sm:text-sm'}>
                      {hobby.desc}
                    </p>
                    <p className='flex justify-center mt-2'>{hobby.icon}</p>
                  </div>
                );
              })}
            </div>
            <div
              className={
                'relative bottom-0 flex justify-center flex-col w-full mt-8'
              }
            >
              <div className={'flex justify-center gap-8 w-full'}>
                <button
                  onClick={() => window.open('https://github.com/meowdew')}
                >
                  <GithubIcon />
                </button>
                <button
                  onClick={() => window.open('https://www.linkedin.com/')}
                >
                  <LinkedInIcon />
                </button>
              </div>
              <div
                className={
                  'lg:py-8 md:py-6 sm:py-4 flex justify-center w-full font-sans text-white space-x-2 sm:text-xs md:text-sm lg:text-base font-medium'
                }
              >
                <span>Powered by React and TailwindCSS</span>
                <p className={'inline-flex justify-center items-center'}>
                  <CopyRightIcon />
                </p>
                <span>2023 ZHAO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
