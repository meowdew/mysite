import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './blog.css';

import LeftPanel from './leftPanel';
import MidPanel from './midPanel';
import RightPanel from './rightPanel';

const Blog = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [tagStat, setTagStat] = useState([]);
  const [categoryStat, setCategoryStat] = useState([]);
  const token = process.env.REACT_APP_BLOG_OBTAIN_TOKEN;
  const URL = process.env.REACT_APP_URL_ENDPOINT;

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.post(`${URL}/query/blogs`, {
          credentials: token,
        });
        setBlogs(res.data?.posts);
        setBlogsLoading(false);
      } catch (e) {
        console.error(`Failed to fetch blogs data,ERR=${e}`);
      }
    };
    getBlogs().catch((e) => console.error(e));

    const getHotTags = async () => {
      try {
        const res = await axios.post(`${URL}/query/hot-tags`, {
          credentials: token,
        });
        setTagStat(res.data?.tag_stat);
      } catch (e) {
        console.error(e);
      }
    };
    getHotTags().catch((e) => console.error(e));

    const getCategory = async () => {
      try {
        const res = await axios.post(`${URL}/query/category`, {
          credentials: token,
        });
        setCategoryStat(res.data?.category_stat);
      } catch (e) {
        console.error(e);
      }
    };
    getCategory().catch((e) => console.error(e));
  }, []);

  const handleTagClick = (tag) => {
    return () => {
      setBlogs((prevState) => {
        return prevState.filter((item) => {
          for (const t of item?.tags) {
            if (t === tag) return true;
          }
          return false;
        });
      });
    };
  };

  const handleCategoryLabelClick = (category) => {
    return () => {
      setBlogs((prevState) => {
        return prevState.filter((item) => {
          return item.category === category;
        });
      });
    };
  };

  return (
    <div
      className={'flex h-screen w-screen gap-1 pt-10 font-sans justify-center'}
    >
      <LeftPanel
        blogs={blogs}
        setBlogs={setBlogs}
        tagStat={tagStat}
        categoryStat={categoryStat}
        handleCategoryLabelClick={handleCategoryLabelClick}
        handleTagClick={handleTagClick}
      />
      <MidPanel blogs={blogs} blogsLoading={blogsLoading} />
      <RightPanel />
    </div>
  );
};

export default Blog;
