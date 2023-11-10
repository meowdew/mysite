import React from "react";
import { Layout, Space, Divider, Carousel } from "antd";
import { CopyrightTwoTone, GithubFilled, LinkedinFilled } from '@ant-design/icons';

import './mainPage.css'


const { Footer } = Layout;
const MainPage = (props) => {
  const title_upper = `DIANSHU`;
  const title_underneath = `ZHA`;
  const display_content = ['full-stack developer', 'computer science alumni', 'photography beginner'];


  const handleOpenGithub = () => {
    window.open('https://github.com/purging5904');
  }

  const handleOpenLinkedin = () => {
    window.open('https://www.linkedin.com');
  }

  return (
    <div className={'main-page-container'}>
      <Divider className={'main-page-divider'} />
      <div className={'title-container'}>
        <Space align={'center'} size={'large'}>
          <div className={'main-page-title'}>
            {title_upper}
          </div>
          <div className={'black-circle'}>
          </div>
        </Space>
      </div>
      <div className={'marquee'}>
        <Carousel autoplay={true} dotPosition={'left'} effect={'fade'}>
          {
            display_content.map((item, index) => {
              return (
                <div className={'carousel-content capitalize'} key={index}>
                  <div>{item.toLowerCase()}</div>
                </div>
              )
            })
          }
        </Carousel>
      </div>
      <div className={'title-container'}>
        <Space>
          <div className={'main-page-title'}>
            {title_underneath}
          </div>
          <div className={'white-rectangle'}>
          </div>
        </Space>
      </div>
      <Divider className={'main-page-divider'} />
      <div className={'text-4xl align-middle'} style={{ display: "flex", justifyContent: "center" }}>
        <Space size={'middle'}>
          <GithubFilled onClick={handleOpenGithub} />
          <LinkedinFilled onClick={handleOpenLinkedin} />
        </Space>
      </div>
      <Footer className={'main-page-footer'}>
        <Space size={'middle'}>
          <p className={'align-bottom'}>
            {`Powered By React`}
          </p>
          <p className={'align-bottom'}>
            <CopyrightTwoTone />
            {` 2023 |  All Right Reserved. `}
          </p>
        </Space>
      </Footer>
    </div>
  )
}

export default MainPage;