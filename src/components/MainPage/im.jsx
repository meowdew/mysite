import React from 'react';
import { v4 } from 'uuid';

export default function Im(props) {
  const personalDescriptions = [
    'CS Graduate',
    'Full-Stack Developer',
    'Software Engineer',
  ];
  return (
    <>
      <div className={'flex justify-between items-center h-1/2 gap-8'}>
        <div className={'sentence'} aria-label={'im'}>
          <p>I'm...</p>
        </div>
        <div
          className={
            'h-full w-full relative flex flex-col card-container justify-center gap-10'
          }
        >
          {personalDescriptions.map((item) => (
            <div
              key={v4()}
              className='h-fit cursor-pointer transition-all flex flex-col justify-center lg:text-4xl md:text-xl sm:text-md w-1/2 text-white font-medium'
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
