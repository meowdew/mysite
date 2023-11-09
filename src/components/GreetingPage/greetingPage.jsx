import React, {useState} from "react";
import {Flex, Spin, Typography, ConfigProvider} from "antd";

import MainPage from "../MainPage/mainPage";

import './greetingPage.css';

const {Paragraph} = Typography;
const GreetingPage = () => {

  const [loading, setLoading] = useState(true);

  const timer = setTimeout(() => {
    setLoading(false);
  }, 1500);
  if (!loading) {
    window.clearTimeout(timer);
  }

  return (
    loading ? (
      <div className={'loading'}>
        <Flex align={"center"} gap={"middle"}>
          <Paragraph className={'text-blue-700 text-opacity-90 capitalize'} id={'ph-1'}>{`Entering Mystery Space...`}</Paragraph>
        </Flex>
        <span>
          <ConfigProvider theme={
            {
              components: {
                Spin: {
                  dotSizeLG: 48,
                }
              },
              token: {
                colorPrimary: '#fff',
              }
            }
          }>
            <Spin size={"large"} delay={100}/>
          </ConfigProvider>
        </span>
      </div>
    ) : (
      <div>
        <MainPage/>
      </div>
    )
  )
}


export default GreetingPage;