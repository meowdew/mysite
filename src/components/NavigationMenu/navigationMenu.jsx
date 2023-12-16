import React, { useEffect, useState } from 'react';
import { Menu, Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';

import Contact from '../Contact/contact';
import AboutMe from '../AboutMe/aboutMe';

const NavigationMenu = (props) => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState('0');
  const [contactOpen, setContactOpen] = useState(false);
  const [aboutMeOpen, setAboutMeOpen] = useState(false);

  const URL = process.env.REACT_APP_URL_ENDPOINT;

  useEffect(() => {
    const key = sessionStorage.getItem('key');
    setSelectedKey(key);
  }, []);

  const menuLabels = ['Home', 'Blog', 'Gallery', 'About', 'Contact'];

  const items = menuLabels.map((item, index) => {
    return {
      label: item,
      key: index.toString(),
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
      setAboutMeOpen(true);
    } else if (key === '4') {
      setContactOpen(true);
    }
  };

  return (
    <div className={'sticky top-0 z-10'}>
      <div
        className='flex min-h-full items-center justify-between m-2 font-medium backdrop-blur-xl rounded-xl px-10 py-1
                  shadow-2xl'
      >
        <div className={'w-24'}>
          <Avatar
            size={'large'}
            icon={<img src={`${URL}/images/myavatar.png`} alt={'avatar'} />}
          />
        </div>
        <div className={'flex justify-end gap-10 mr-3 items-center w-fit '}>
          <Menu
            items={items}
            mode={'horizontal'}
            className={'bg-transparent text-amber-50'}
            defaultSelectedKeys={[selectedKey]}
            onClick={handleMenuItemClick}
          />
        </div>
      </div>
      <AboutMe open={aboutMeOpen} setOpen={setAboutMeOpen} />
      <Contact open={contactOpen} setOpen={setContactOpen} />
    </div>
  );
};

export default NavigationMenu;
