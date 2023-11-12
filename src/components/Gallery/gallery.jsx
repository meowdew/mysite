import React, { useEffect } from 'react';

import {Carousel} from "antd";
import './gallery.css';
const Gallery = (props) => {
  const { setNavBarVisibility } = props;

  const images = [{}];

  useEffect(() => {
    setNavBarVisibility(true);
  }, []);

  return (
    <div className='gallery-wrapper'>
      <Carousel autoplay={true} dotPosition={"bottom"}>
        {
          images.map((image, index) => {
            return (
              <div key={index} className={'font-sans text-2xl text-black'}>
              </div>
            )
          })
        }
      </Carousel>
    </div>
  );
};

export default Gallery;
