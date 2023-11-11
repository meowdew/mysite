import React, { useEffect } from 'react';

import './gallery.css';

const Gallery = (props) => {
  const { setNavBarVisibility } = props;

  useEffect(() => {
    setNavBarVisibility(true);
  }, []);

  return (
    <div className='gallery-wrapper'>
      <div className={'display'}>this is display zone</div>
    </div>
  );
};

export default Gallery;
