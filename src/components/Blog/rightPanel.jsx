import React from 'react';
import HexClock from '../Widgets/clock';
import BackToTop from './backToTop';
import WeatherWidget from '../Widgets/weatherWidget';

export default function RightPanel(props) {
  return (
    <>
      <div
        className={
          'right-panel w-1/5 h-full rounded-xl relative flex flex-col gap-10'
        }
      >
        <HexClock />
        <WeatherWidget />
        <BackToTop />
      </div>
    </>
  );
}
