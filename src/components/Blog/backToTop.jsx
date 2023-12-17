import React, { useEffect, useState } from 'react';
import { UpArrowIcon } from '../MyIcons/icons';

export default function BackToTop(props) {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, [visible]);

  return (
    <>
      <div
        className={`fixed bottom-5 right-5 bg-white rounded-xl min-w-[50px] min-h-[50px] align-middle flex items-center`}
        style={{ visibility: visible ? 'visible' : 'hidden' }}
      >
        <button
          onClick={handleClick}
          className={'w-full h-full flex justify-center items-center '}
        >
          <UpArrowIcon />
        </button>
      </div>
    </>
  );
}
