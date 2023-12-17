import React from 'react';
import { CopyRightIcon, GithubIcon, LinkedInIcon } from '../MyIcons/icons';

export default function Footer() {
  return (
    <>
      <div
        className={'relative bottom-0 flex justify-center flex-col w-full mt-8'}
      >
        <div className={'flex justify-center gap-8 w-full'}>
          <button onClick={() => window.open('https://github.com/meowdew')}>
            <GithubIcon />
          </button>
          <button onClick={() => window.open('https://www.linkedin.com/')}>
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
    </>
  );
}
