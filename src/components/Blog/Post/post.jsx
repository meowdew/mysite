import React, { useEffect, useState } from 'react';
import { FloatButton } from 'antd';
import {
  DownCircleTwoTone,
  HeartTwoTone,
  UpCircleTwoTone,
} from '@ant-design/icons';
import { marked } from 'marked';
import purify from 'dompurify';
import hljs from 'highlight.js';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './post.css';
import 'highlight.js/styles/rainbow.css';

marked.setOptions({
  highlight: (code, language) => {
    if (hljs.getLanguage(language)) {
      return hljs.highlight(code, { language }).value;
    }
    return hljs.highlightAuto(code).value;
  },
});
const Post = (props) => {
  const { setNavBarVisibility } = props;
  const token = process.env.REACT_APP_BLOG_OBTAIN_TOKEN;
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    setNavBarVisibility(true);
    const fetchPost = async () => {
      const res = await axios.post('http://localhost:8080/query/posts', {
        credentials: token,
        post_id: id,
      });
      if (res.data?.post) {
        setPost(res.data?.post);
        const parsed = marked.parse(res.data?.post?.content);
        setMarkdown(purify.sanitize(parsed));
      } else throw new Error('Failed to fetch post!');
    };
    fetchPost().catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [markdown]);

  const handleLikeClick = async (timer) => {
    const updateLikes = async (newPost) => {
      await axios.post('http://localhost:8080/save/posts', {
        credentials: token,
        post: newPost,
      });
    };
    if (isLiked === false) {
      setPost((prevPost) => {
        const updatedPost = { ...prevPost, likes: prevPost.likes + 1 };
        updateLikes(updatedPost).catch((e) => console.error(e));
        return updatedPost;
      });
    } else {
      setPost((prevPost) => {
        const updatedPost = { ...prevPost, likes: prevPost.likes - 1 };
        updateLikes(updatedPost).catch((e) => console.error(e));
        return updatedPost;
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
              'text-left font-medium text-lg min-h-screen align-middle leading-relaxed'
            }
            dangerouslySetInnerHTML={{ __html: markdown }}
          ></div>
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
          icon={<UpCircleTwoTone />}
          style={{ backgroundColor: 'pink' }}
          tooltip={<p>Back to Top</p>}
        />
      </FloatButton.Group>
      <span id={'page-bottom'}></span>
    </div>
  );
};

export default Post;
