import React, { useEffect, useState } from 'react';
import { Flex, Spin, Typography, ConfigProvider } from 'antd';
import {useNavigate} from "react-router-dom";


import './greetingPage.css';

const { Paragraph } = Typography;
const GreetingPage = (props) => {
  const { setNavBarVisibility } = props;

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    sessionStorage.setItem('key', '0');
    const timer = setTimeout(() => {
      setLoading(false);
      setNavBarVisibility(true);
      navigate('/mainpage');
    }, 1500);
    return () => {
      window.clearTimeout(timer);
    }
  }, []);



  return loading ? (
    <div className={'loading'}>
      <Flex align={'center'} gap={'middle'}>
        <Paragraph
          className={'text-blue-700 text-opacity-90 capitalize'}
          id={'ph-1'}
        >{`Entering Mystery Space...`}</Paragraph>
      </Flex>
      <span>
        <ConfigProvider
          theme={{
            components: {
              Spin: {
                dotSizeLG: 48,
              },
            },
            token: {
              colorPrimary: '#fff',
            },
          }}
        >
          <Spin size={'large'} delay={100} />
        </ConfigProvider>
      </span>
    </div>
  ) : (
    <></>
  );
};

export default GreetingPage;
