import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function WeatherWidget(props) {
  const [position, setPosition] = useState(null);
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const G_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const G_MAP_ENDPOINT_URL = process.env.REACT_APP_GOOGLE_MAP_API_URL;
  const WEATHER_ENDPOINT_URL = process.env.REACT_APP_WEATHER_API_URL;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const fetchGeoLocation = async () => {
          return await axios.get(
            `${G_MAP_ENDPOINT_URL}latlng=${position.coords.latitude},${position.coords.longitude}&key=${G_MAP_API_KEY}`,
          );
        };

        setPosition((prevState) => {
          return position;
        });
        fetchGeoLocation().then((res) => {
          const city = res.data.results[0].address_components[2].short_name;
          setCity(city);
        });
      },
      (error) => console.log(error),
    );
  }, []);

  return (
    <>
      <div
        className={`min-w-full min-h-[128px] rounded-xl backdrop-blur-2xl bg-gradient-to-r from-blue-400 to-blue-600`}
      >
        <div
          className={
            'lg:text-2xl md:text-xl sm:text-lg font-bold indent-3 py-2'
          }
        >
          {city}
        </div>
      </div>
    </>
  );
}
