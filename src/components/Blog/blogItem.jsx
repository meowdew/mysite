import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon } from '../MyIcons/icons';

export default function BlogItem(props) {
  const { post } = props;
  return (
    <>
      <h1
        className={
          'font-sans text-2xl border-b-2 indent-8 py-2 font-bold hover:text-gray-500'
        }
      >
        <Link to={`/blog/posts/${post?.post_id}`}>{post.title}</Link>
      </h1>
      <div className={'flex flex-col h-full justify-between py-2'}>
        <div className={'text-base indent-8 font-medium'}>{post?.abstract}</div>
        <div
          className={
            'flex gap-1 w-fit ml-6 px-2 py-1 rounded-xl bg-orange-600 items-center shadow-2xl'
          }
        >
          <span className={'inline-flex'}>
            <CalendarIcon />
          </span>
          <span>{post?.date.split('T')[0]}</span>
          <span> | </span>
          <span>{post?.date.split('T')[1].split('.')[0]}</span>
        </div>
      </div>
    </>
  );
}
