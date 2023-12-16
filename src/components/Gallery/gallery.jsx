import React, { useEffect, useState } from 'react';
import { Image } from 'antd';
import axios from 'axios';

const Gallery = (props) => {
  const token = process.env.REACT_APP_BLOG_OBTAIN_TOKEN;
  const URL = process.env.REACT_APP_URL_ENDPOINT;
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    const fetchAlbum = async () => {
      const res = await axios.post(`${URL}/query/album`, {
        credentials: token,
      });
      setImages(res.data?.collection);
      setFetched(true);
      setLoading(false);
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
                  src={`${URL}/images/album/${image.filename}`}
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
