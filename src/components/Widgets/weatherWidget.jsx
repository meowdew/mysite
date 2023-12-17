import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LocationIcon } from '../MyIcons/icons';

export default function WeatherWidget(props) {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [weather, setWeather] = useState(null);

  const weatherIconUrl = 'https://openweathermap.org/img/wn/';
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

        fetchGeoLocation().then((res) => {
          const city = res.data.results[0].address_components[2].short_name;
          const country = res.data.results[0].address_components[5].short_name;
          setCity(city);
          setCountry(country);
        });

        fetchWeather().then((res) => {
          setWeather(res.data.current);
        });
      },
      (error) => console.log(error),
    );
  }, []);

  return (
    <>
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
        <div className={'content w-full h-full flex text-sm'}>
          <div className={'weather w-4/5'}>
            <div className={'icon h-3/5 w-full flex justify-center'}>
              <img
                src={`${weatherIconUrl}${weather?.weather[0]?.icon}@2x.png`}
                alt={`${weather?.weather[0]?.main}`}
              />
            </div>
            <div
              className={'description text-center font-bold'}
            >{`${weather?.weather[0]?.main}`}</div>
            <div className={'temp text-center'}>
              {`${kelvinToCelcius(weather?.temp).toFixed(1)} °C`}
            </div>
          </div>
          <div className={'weather-info w-full text-center'}>
            <div className={'title border-b border-black'}>Detail</div>
            <div className={'feels-like flex justify-between'}>
              <span>Feels Like</span>
              <span>{`${kelvinToCelcius(weather?.feels_like).toFixed(
                1,
              )} °C`}</span>
            </div>
            <div className={'pressure flex justify-between'}>
              <span>Pressure</span>
              <span>{`${weather?.pressure} hPa`}</span>
            </div>
            <div className={'humidity flex justify-between'}>
              <span>Humidity</span>
              <span>{`${weather?.humidity} %`}</span>
            </div>
            <div className={'wind flex justify-between'}>
              <span>Wind</span>
              <span>{`${(weather?.wind_speed * 3.6).toFixed(1)} km/h`}</span>
            </div>
            <div className={'visibility flex justify-between'}>
              <span>Visibility</span>
              <span>{`${(weather?.visibility / 1000).toFixed(1)} km`}</span>
            </div>
          </div>
        </div>
        <div
          className={
            'footer flex justify-between border-t-[1px] border-black p-1 text-xs flex-wrap'
          }
        >
          <span>{`API Powered By openweathermap.org`}</span>
          <span>{`${dateStringToMonth(new Date().toLocaleDateString())}`}</span>
        </div>
      </div>
    </>
  );
}

function dateStringToMonth(dateString) {
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
  const month = dateString.split('/')[1];
  const day = dateString.split('/')[2];

  return `${monthDict[month]} ${day}`;
}

function kelvinToCelcius(kelvin) {
  return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
  return (kelvin - 273.15) * (9 / 5) + 32;
}
