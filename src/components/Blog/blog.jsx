import React, {useEffect, useState} from 'react';
import {Calendar, Card, Divider, Skeleton} from 'antd';
import axios, {get} from 'axios'
import './blog.css';

const Blog = (props) => {
  const { setNavBarVisibility } = props;
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);


  useEffect( () => {
    setNavBarVisibility(true);  
    const getBlogs = async () => {
      try{
        const res = await axios.post('http://localhost:8080/query/blogs', {credentials: 'token123'});
        setBlogs(res.data.data);
        setBlogsLoading(false);
      }
      catch(e){
        console.error(`Failed to fetch blogs data,ERR=${e}`);
      }
    }
    getBlogs();

  }, []);

  return (
    <div className={'blog-wrapper'}>
      <div className={'welcome-image'}></div>
      <div className={'content-wrapper bg-transparent'}>
        <div className={'articles'}>
          <ul className={'blog-list'}>
            {
              blogsLoading ? (<Skeleton paragraph={{rows:3}}/>) : blogs.length ? blogs.map((item, index) => {
                  return (
                    <li key={index} className={''}>
                      <Card className={'blog-card text-left my-1.5'} title={item}>
                        aldl;asdkasl;ksl;akas;dksl;adkasl;dkl;kql;wekl;qwkeqwl; kal;dkl;asdkasl;k
                      </Card>
                    </li>
                  )
                }) :
                (
                  <div>
                    <Card className={'blog-card text-left my-1.5'} title={'Oops!'}>
                      {`😭This guy is too lazy to leave any footprint😭`}
                    </Card>
                  </div>
                )
            }
          </ul>
        </div>
        <div className={'calendar pt-1.5 ml-1.5'}>
          <Calendar fullscreen={false} />
        </div>
      </div>
    </div>
  );
};

export default Blog;

