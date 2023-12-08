import React, { useEffect, useState } from 'react';
import { Card, Skeleton, Pagination, Divider, Avatar, Space } from 'antd';
import { EnvironmentFilled } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './blog.css';

const Blog = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [renderStartIndex, setRenderStartIndex] = useState(0);
  const [tagStat, setTagStat] = useState([]);
  const [categoryStat, setCategoryStat] = useState([]);
  const token = process.env.REACT_APP_BLOG_OBTAIN_TOKEN;
  const URL = process.env.REACT_APP_URL_ENDPOINT;

  const navigate = useNavigate();

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

  const handlePaginationChange = (page) => {
    setRenderStartIndex(10 * (page - 1));
  };

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
    <div className={'blog-wrapper'}>
      <div className={'welcome-image'}></div>
      <div className={'content-wrapper bg-transparent'}>
        <div className={'articles'}>
          <ul className={'blog-list'}>
            {blogsLoading ? (
              <Skeleton paragraph={{ rows: 5 }} />
            ) : blogs.length ? (
              blogs
                .slice(renderStartIndex, renderStartIndex + 9)
                .map((post, index) => {
                  const title = (
                    <button
                      className={
                        'hover:text-sky-600 transition-all font-sans font-bold text-2xl'
                      }
                      onClick={() => {
                        navigate(`/blog/posts/${post?.post_id}`);
                      }}
                    >
                      {post?.title}
                    </button>
                  );
                  return (
                    <li key={index} className={''}>
                      <Card
                        className={
                          'blog-card text-left my-1.5 font-sans text-lg'
                        }
                        title={title}
                        style={{ backgroundColor: '#bfe2e7' }}
                      >
                        <p>{post?.abstract}</p>
                        <Divider className={'invisible'} />
                        <div
                          className={
                            'font-sans italic font-medium oldstyle-nums text-black text-lg'
                          }
                        >
                          <span>
                            {`Posted on ${post?.date.split('T')[0]}, at ${
                              post?.date.split('T')[1].split('.')[0]
                            }`}
                          </span>
                        </div>
                      </Card>
                    </li>
                  );
                })
            ) : (
              <div>
                <Card className={'blog-card text-left my-1.5'} title={'Oops!'}>
                  {`😭This guy is too lazy to leave any footprint😭`}
                </Card>
              </div>
            )}
          </ul>
        </div>
        <Space
          direction={'vertical'}
          size={'small'}
          className={
            'flex-auto max-w-xs rounded-md mt-1.5 ml-1.5 max-h-fit pb-10'
          }
          style={{ backgroundColor: '#e3ecfb' }}
        >
          <div className={'block avatar pt-4'}>
            <Avatar
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 80,
                xxl: 100,
              }}
              icon={
                <img src={`${URL}/images/myavatar.png`} alt={'my-avatar'} />
              }
            />
          </div>
          <div className={'font-sans italic text-1xl pt-4 font-bold'}>
            May light shines all of the world
          </div>
          <div className={'flex mt-5 justify-evenly pt-2'}>
            <p>{`Articles: ${blogs.length}`}</p>
          </div>
          <div className={'flex justify-center'}>
            <EnvironmentFilled />
            <p className={'pl-2'}>Pullman, WA, USA</p>
          </div>
          <Divider style={{ borderColor: 'black', color: '#141608' }}>
            Article Tags
          </Divider>
          <div className={'flex justify-evenly'}>
            {tagStat.length &&
              tagStat
                .slice(0, 9)
                .sort((a, b) => {
                  return b?.count - a?.count;
                })
                .map((tag, index) => {
                  return (
                    <button
                      key={index}
                      className={
                        'bg-blue-200 px-2.5 py-1 rounded-t-md rounded-l-md font-sans'
                      }
                      onClick={handleTagClick(tag?._id)}
                    >
                      {tag?._id}
                    </button>
                  );
                })}
          </div>
          <Divider style={{ borderColor: 'black', color: '#141608' }}>
            Category
          </Divider>
          <div className={'flex justify-evenly'}>
            {categoryStat
              .sort((a, b) => b?.count - a?.count)
              .map((category, index) => {
                return (
                  <button
                    className={
                      'bg-blue-200 px-2.5 py-1 rounded-t-md rounded-l-md font-sans'
                    }
                    onClick={handleCategoryLabelClick(category?._id)}
                  >
                    {category?._id}
                  </button>
                );
              })}
          </div>
        </Space>
      </div>
      <Pagination
        className={'block'}
        defaultCurrent={1}
        total={blogs.length}
        onChange={handlePaginationChange}
      />
    </div>
  );
};

export default Blog;
