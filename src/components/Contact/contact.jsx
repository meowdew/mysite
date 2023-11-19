import React from 'react';
import { Divider, Drawer } from 'antd';
import { MailOutlined, QqOutlined } from '@ant-design/icons';

import './contact.css';

const Contact = (props) => {
  const { open, setOpen } = props;

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={'contact-wrapper'}>
      <Drawer
        className={'contact-drawer'}
        open={open}
        title={'Contact Me'}
        onClose={handleDrawerClose}
        placement={'left'}
      >
        <div className={'contact-content space-x-4'}>
          <span>
            <p
              className={'text-xl text-amber-600'}
            >{`If you'd like to reach me out, feel free to send an email.`}</p>
          </span>
        </div>
        <Divider className={'border-0'}></Divider>
        <div className={'contact-content space-x-4'}>
          <MailOutlined />
          <a href={'mailto:redmnq77249@gmail.com'}>{`redmnq77249@gmail.com`}</a>
        </div>
        <br />
        <div className={'contact-content space-x-4'}>
          <QqOutlined />
          <p>{`1095607533`}</p>
        </div>
        <div className={'contact-content space-x-4'}></div>
      </Drawer>
    </div>
  );
};

export default Contact;
