import React, { useEffect, useState } from 'react';
import { FloatButton } from 'antd';
import {
  DownCircleTwoTone,
  HeartTwoTone,
  UpCircleTwoTone,
} from '@ant-design/icons';
import ReactMarkDown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './post.css';

const Post = (props) => {
  const { setNavBarVisibility } = props;
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const token = process.env.REACT_APP_BLOG_OBTAIN_TOKEN;

  useEffect(() => {
    setNavBarVisibility(true);
    const fetchPost = async () => {
      const res = await axios.post('http://localhost:8080/query/posts', {
        credentials: token,
        post_id: id,
      });
      if (res.data?.post) {
        setPost(res.data?.post);
      } else throw new Error('Failed to fetch post!');
    };
    fetchPost().catch((e) => console.error(e));
    return () => {
      const updateLikes = async () => {
        await axios.post('https://localhost:8080/save/posts', {
          credentials: token,
          post: post,
        });
      };
      updateLikes().catch((e) => console.error(e));
    };
  }, []);

  const handleLikeClick = () => {
    if (isLiked === false) {
      setPost((prevState) => {
        return {
          ...prevState,
          likes: prevState.likes + 1,
        };
      });
    } else {
      setPost((prevState) => {
        return {
          ...prevState,
          likes: prevState.likes - 1,
        };
      });
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className={'post-wrapper'}>
      <div className={'blog-content'} id={'page-top'}>
        <div className={'block px-24 pt-4'}>
          <div
            className={
              'text-left font-medium text-lg min-h-screen align-middle'
            }
          >
            <ReactMarkDown
              className={'markdown'}
              rehypePlugins={rehypeSanitize}
            >
              {post?.content}
            </ReactMarkDown>
          </div>
        </div>
      </div>
      <FloatButton.Group className={'float-bar'}>
        <FloatButton
          icon={<HeartTwoTone />}
          style={{ backgroundColor: 'pink' }}
          onClick={handleLikeClick}
          badge={{
            count: post?.likes,
            color: 'blue',
          }}
          tooltip={<p>Like this article</p>}
        />
        <FloatButton.BackTop
          style={{ backgroundColor: 'pink' }}
          tooltip={<p>Back to Top</p>}
        />
        <FloatButton
          icon={<DownCircleTwoTone />}
          style={{ backgroundColor: 'pink' }}
          href={'#page-bottom'}
          tooltip={<p>Go to Bottom</p>}
        />
      </FloatButton.Group>
      <span id={'page-bottom'}></span>
    </div>
  );
};

export default Post;
