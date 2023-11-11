import React from 'react';
import { Drawer, Timeline } from 'antd';

import './growthTimeline.css';

const GrowthTimeline = (props) => {
  const { open, setOpen } = props;

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const items = [
    {
      label: '1999',
      children: 'Born in',
    },
    {
      label: '2011',
      children: 'Starting Middle School in China',
    },
    {
      label: '2014',
      children: 'Starting High School in China',
    },
    {
      label: '2017',
      children: 'Starting High School and Associate BS of Chemistry in Edmonds',
    },
    {
      label: '2020',
      children:
        'Starting BS of Computer Science in Washington State University',
    },
  ];

  return (
    <div className={'timeline-wrapper'}>
      <Drawer
        open={open}
        onClose={handleDrawerClose}
        title={'My Growth Timeline'}
        placement={'left'}
      >
        <div style={{ paddingRight: '5vw' }}>
          <Timeline mode={'left'} items={items} pending={'Unknown Future...'} />
        </div>
      </Drawer>
    </div>
  );
};

export default GrowthTimeline;
