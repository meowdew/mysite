import React from 'react';
import {
  CodeIcon,
  GamingIcon,
  MusicIcon,
  PhotographyIcon,
} from '../MyIcons/icons';

export default function ILike(props) {
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
        className={'flex justify-center w-full sentence italic'}
        aria-label={'i-like'}
      >
        <p>I like...</p>
      </div>

      <div
        className={
          'hobby-container w-full h-fit flex-shrink-0 flex justify-between gap-4 mt-8'
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
    </>
  );
}
