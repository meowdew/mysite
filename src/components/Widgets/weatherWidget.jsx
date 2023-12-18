import React, { useEffect, useState } from 'react';
import { Skeleton, notification } from 'antd';
import axios from 'axios';
import { LocationIcon } from '../MyIcons/icons';
import WeatherWidgetBody from './weatherWidgetBody';

export default function WeatherWidget(props) {
  const [city, setCity] = useState('--');
  const [country, setCountry] = useState('--');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (text) => {
    api.info({
      message: 'Weather Widget',
      description: text,
      placement: 'bottomRight',
      duration: 3,
    });
  };

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

        const fetchWeather = async () => {
          return await axios.get(
            `${WEATHER_ENDPOINT_URL}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${WEATHER_API_KEY}`,
          );
        };

        if (
          sessionStorage.getItem('city') &&
          sessionStorage.getItem('country')
        ) {
          setCity(sessionStorage.getItem('city'));
          setCountry(sessionStorage.getItem('country'));
        } else {
          fetchGeoLocation().then((res) => {
            const city = res.data.results[0].address_components[2].short_name;
            const country =
              res.data.results[0].address_components[5].short_name;
            sessionStorage.setItem('city', city);
            sessionStorage.setItem('country', country);
            setCity(city);
            setCountry(country);
          });
        }
        if (sessionStorage.getItem('weather')) {
          setWeather(JSON.parse(sessionStorage.getItem('weather')));
          setLoading(false);
        } else {
          fetchWeather().then((res) => {
            sessionStorage.setItem('weather', JSON.stringify(res.data.current));
            setWeather(res.data.current);
            setLoading(false);
          });
        }
      },
      (error) => {
        let errorMessage = '';
        if (error.code === error.PERMISSION_DENIED) {
          errorMessage = 'Please enable location permission';
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          errorMessage = 'Location information is unavailable';
        } else if (error.code === error.TIMEOUT) {
          errorMessage = 'The request to get user location timed out';
        } else {
          errorMessage = 'An unknown error occurred';
        }
        api.destroy();
        openNotification(errorMessage);
      },
    );
  }, []);

  return (
    <>
      {contextHolder}
      <div
        className={`min-w-full min-h-[200px] rounded-xl backdrop-blur-2xl bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col shadow-xl hover:scale-105 transition-all`}
      >
        <div
          className={
            'lg:text-2xl md:text-xl sm:text-lg font-bold indent-3 pt-2 pb-1 flex items-center pl-2 border-b-[1px] border-black w-full'
          }
        >
          <span>
            <LocationIcon />
          </span>
          <span>{`${city}, ${country}`}</span>
        </div>
        {loading ? (
          <Skeleton active paragraph={{ rows: 4 }} />
        ) : (
          <WeatherWidgetBody weather={weather} />
        )}
        <div
          className={
            'footer flex justify-between border-t-[1px] border-black p-1 text-xs flex-wrap'
          }
        >
          <span>{`API Powered By openweathermap.org`}</span>
          <span>{`${getCurrentDate()}`}</span>
        </div>
      </div>
    </>
  );
}

function getCurrentDate() {
  const dateString = new Date();
  const monthDict = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May ',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  };

  const month = dateString.getMonth() + 1;
  const day = dateString.getDate();

  return `${monthDict[month]} ${day}`;
}
