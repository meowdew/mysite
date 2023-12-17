import React, { useEffect, useState } from 'react';

export default function HexClock() {
  const [hex, setHex] = useState('#000000');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hexString = '#' + date.toLocaleTimeString().replace(/:/g, '');
      setHex(hexString);
      document.querySelector('.clock').style.setProperty('--bg', hexString);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div
      className={`clock relative min-w-fit min-h-[128px] flex justify-center items-center bg-[--bg] lg:text-2xl md:text-xl sm:text-lg rounded-2xl text-white`}
    >
      <span id='hex-clock'>{hex}</span>
    </div>
  );
}
