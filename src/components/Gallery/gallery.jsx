import React, { useEffect, useState } from 'react';
import { Carousel, Image } from 'antd';
import axios from 'axios';

import './gallery.css';
const Gallery = (props) => {
  const { setNavBarVisibility } = props;
  const token = process.env.REACT_APP_BLOG_OBTAIN_TOKEN;
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    setNavBarVisibility(true);

    const fetchAlbum = async () => {
      const res = await axios.post('http://localhost:8080/query/album', {
        credentials: token,
      });
      setImages(res.data?.collection);
      setFetched(true);
      setLoading(false);
      console.log(res.data?.collection);
    };
    fetchAlbum().catch((e) => console.error(e));
  }, []);

  return (
    <div className='gallery-wrapper'>
      {loading ? (
        `Loading`
      ) : (
        <div className={'flex align-middle w-fit h-fit viewer'}>
          {images.map((image, index) => {
            return (
              <div key={index}>
                <Image
                  src={`http://localhost:8080/images/album/${image.filename}`}
                  height={'25vh'}
                  width={'25vw'}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Gallery;
