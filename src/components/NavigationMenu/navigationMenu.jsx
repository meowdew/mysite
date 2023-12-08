import React, { useEffect, useState } from 'react';
import { Menu, Layout, Avatar } from 'antd';
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
      navigate('/');
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
    <div className='container flex text-amber-50 align-super min-h-full mx-2 my-3 bg-amber-300 text-2xl justify-between'>
      <div className={''}>
        <img alt={''} src={'../../../public/'} />
      </div>
      <div className={''}></div>
      <div className={'flex-row'}>
        <button className={'flex flex-grow-0'}>123</button>
        <button className={'flex flex-grow-0'}>123</button>
        <button className={'flex flex-grow-0'}>123</button>
      </div>

      <GrowthTimeline open={timelineOpen} setOpen={setTimelineOpen} />
      <AboutMe open={aboutMeOpen} setOpen={setAboutMeOpen} />
      <Contact open={contactOpen} setOpen={setContactOpen} />
    </div>
  );
};

export default NavigationMenu;
