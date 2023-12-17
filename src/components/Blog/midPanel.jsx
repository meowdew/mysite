import React from 'react';
import { v4 } from 'uuid';
import { Skeleton } from 'antd';
import BlogItem from './blogItem';

export default function MidPanel(props) {
  const { blogs, blogsLoading } = props;

  return (
    <>
      <div
        className={
          'blog-display w-1/2 h-full backdrop-blur-2xl rounded-xl bg-gradient-to-t from-transparent to-white'
        }
      >
        <ul>
          {blogsLoading ? (
            <Skeleton active round paragraph={{ rows: 6 }} />
          ) : (
            blogs.map((post) => {
              return (
                <li
                  key={v4()}
                  className={
                    'blog-item w-full h-48 flex flex-col gap-4 border-b-2'
                  }
                >
                  <BlogItem post={post} />
                </li>
              );
            })
          )}
        </ul>
      </div>
    </>
  );
}
