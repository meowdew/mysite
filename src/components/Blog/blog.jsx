import React, { useEffect } from 'react';
import { Image } from 'antd';

import './blog.css';

const Blog = (props) => {
  const { setNavBarVisibility } = props;

  useEffect(() => {
    setNavBarVisibility(true);
  }, []);

  return (
    <div className={'blog-wrapper'}>
      <div className={'welcome-image'}></div>
      <div className={'content-wrapper'}>
        <div className={'articles'}>articles</div>
        <div className={'preview'}>abstract</div>
      </div>
    </div>
  );
};

export default Blog;
