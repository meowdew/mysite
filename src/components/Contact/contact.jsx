import React from 'react';
import { Drawer, Divider } from 'antd';
import { DiscordIcon, EmailIcon, QQIcon } from '../MyIcons/icons';

const Contact = (props) => {
  const { open, setOpen } = props;

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Drawer
        className={
          'opacity-75 scale-100 transition-all hover:opacity-100 backdrop-blur-xl relative z-2'
        }
        open={open}
        title={'Contact Me'}
        onClose={handleDrawerClose}
        placement={'right'}
      >
        <div className={`w-full h-full flex flex-col justify-between gap-10`}>
          <div className={'w-full h-1/4'}>
            <span>
              <p
                className={'text-xl text-blue-600 font-bold'}
              >{`Feel free to reach me in any of ways below`}</p>
            </span>
          </div>
          <div className={'mb-4 font-black space-y-4'}>
            <div className={'flex gap-2 text-lg'}>
              <span
                className={'w-[32px] h-[32px] flex justify-center items-center'}
              >
                <EmailIcon />
              </span>
              <a
                className={'flex items-center'}
                href={'mailto:redmnq77249@gmail.com'}
              >{`redmnq77249@gmail.com`}</a>
            </div>
            <div className={'flex gap-2 text-lg'}>
              <span
                className={'w-[32px] h-[32px] flex justify-center items-center'}
              >
                <DiscordIcon />
              </span>
              <span className={'flex items-center'}>{`rickyxyz`}</span>
            </div>

            <div className={'flex gap-2 text-lg'}>
              <span
                className={'w-[32px] h-[32px] flex justify-center items-center'}
              >
                <QQIcon />
              </span>
              <span className={'flex items-center'}>{`1095607533`}</span>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Contact;
