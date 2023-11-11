import React, { useEffect, useState } from 'react';
import { Menu, Layout } from 'antd';
import {
  HomeTwoTone,
  FileMarkdownTwoTone,
  PictureTwoTone,
  HeartTwoTone,
  IdcardTwoTone,
  MessageTwoTone,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import Contact from '../Contact/contact';
import GrowthTimeline from '../GrowthTimeline/growthTimeline';
import AboutMe from '../AboutMe/aboutMe';

import './navigationMenu.css';

const { Header } = Layout;

const NavigationMenu = (props) => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState('0');
  const [contactOpen, setContactOpen] = useState(false);
  const [timelineOpen, setTimelineOpen] = useState(false);
  const [aboutMeOpen, setAboutMeOpen] = useState(false);

  useEffect(() => {
    const key = sessionStorage.getItem('key');
    setSelectedKey(key);
  }, []);

  const menuLabels = [
    'Home',
    'Blog',
    'Gallery',
    'My Growth',
    'About',
    'Contact',
  ];
  const menuIcons = [
    <HomeTwoTone />,
    <FileMarkdownTwoTone />,
    <PictureTwoTone />,
    <HeartTwoTone />,
    <IdcardTwoTone />,
    <MessageTwoTone />,
  ];
  const items = menuLabels.map((item, index) => {
    return {
      label: item,
      key: index.toString(),
      icon: menuIcons[index],
    };
  });

  const handleMenuItemClick = (e) => {
    const key = e.key;
    setSelectedKey(key);
    if (key === '0') {
      navigate('/mainpage');
      sessionStorage.setItem('key', key);
    } else if (key === '1') {
      navigate('/blog');
      sessionStorage.setItem('key', key);
    } else if (key === '2') {
      navigate('/gallery');
      sessionStorage.setItem('key', key);
    } else if (key === '3') {
      setTimelineOpen(true);
    } else if (key === '4') {
      setAboutMeOpen(true);
    } else if (key === '5') {
      setContactOpen(true);
    }
  };

  return (
    <div className='navigation-wrapper'>
      <Layout style={{ background: 'transparent' }}>
        <Header
          style={{
            backgroundColor: 'transparent',
            display: 'contents',
            justifyContent: 'center',
          }}
        >
          <Menu
            className={'menu-bar'}
            mode={'horizontal'}
            items={items}
            onClick={handleMenuItemClick}
            selectedKeys={selectedKey}
          />
        </Header>
      </Layout>
      <GrowthTimeline open={timelineOpen} setOpen={setTimelineOpen} />
      <AboutMe open={aboutMeOpen} setOpen={setAboutMeOpen} />
      <Contact open={contactOpen} setOpen={setContactOpen} />
    </div>
  );
};

export default NavigationMenu;
