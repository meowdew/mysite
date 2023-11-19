import React, { useEffect, useState } from 'react';
import { Card, Skeleton, Pagination, Divider, Avatar, Space } from 'antd';
import { EnvironmentFilled } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './blog.css';

const Blog = (props) => {
  const { setNavBarVisibility } = props;
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [renderStartIndex, setRenderStartIndex] = useState(0);
  const [tagStat, setTagStat] = useState([]);
  const [categoryStat, setCategoryStat] = useState([]);
  const token = process.env.REACT_APP_BLOG_OBTAIN_TOKEN;

  const navigate = useNavigate();

  const handlePaginationChange = (page) => {
    setRenderStartIndex(10 * (page - 1));
  };

  useEffect(() => {
    setNavBarVisibility(true);
    const getBlogs = async () => {
      try {
        const res = await axios.post('http://localhost:8080/query/blogs', {
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
        const res = await axios.post('http://localhost:8080/query/hot-tags', {
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
        const res = await axios.post('http://localhost:8080/query/category', {
          credentials: token,
        });
        setCategoryStat(res.data?.category_stat);
      } catch (e) {
        console.error(e);
      }
    };
    getCategory().catch((e) => console.error(e));
  }, []);

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
                        'hover:text-sky-600 transition-all font-sans font-bold'
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
                        className={'blog-card text-left my-1.5'}
                        title={title}
                      >
                        <p>{post?.abstract}</p>
                        <Divider className={'invisible'} />
                        <div className={'font-mono italic font-bold '}>
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
            'flex-auto max-w-xs bg-sky-600 rounded-md mt-1.5 ml-1.5 max-h-fit'
          }
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
                <img
                  src={'http://localhost:8080/images/myavatar.png'}
                  alt={'my-avatar'}
                />
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
          <Divider style={{ borderColor: 'black', color: '#01ff02' }}>
            Hot Tags
          </Divider>
          <div className={'flex justify-evenly'}>
            {tagStat.length &&
              tagStat
                .slice(0, 9)
                .sort((a, b) => {
                  return b?.count - a?.count;
                })
                .map((tag, index) => {
                  return <button key={index}>{tag?._id}</button>;
                })}
          </div>
          <Divider style={{ borderColor: 'black', color: '#01ff02' }}>
            Category
          </Divider>
          <div className={'flex justify-evenly'}>
            {categoryStat
              .sort((a, b) => b?.count - a?.count)
              .map((category, index) => {
                return <button key={index}>{category?._id}</button>;
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
