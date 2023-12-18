import React from 'react';

export default function WeatherWidgetBody(props) {
  const weatherIconUrl = 'https://openweathermap.org/img/wn/';
  const { weather } = props;

  return (
    <>
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
            {`${kelvinToCelsius(weather?.temp).toFixed(1)} °C`}
          </div>
        </div>
        <div className={'weather-info w-full text-center'}>
          <div className={'title border-b border-black'}>Detail</div>
          <div className={'feels-like flex justify-between'}>
            <span>Feels Like</span>
            <span>{`${kelvinToCelsius(weather?.feels_like).toFixed(
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
    </>
  );
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
  return (kelvin - 273.15) * (9 / 5) + 32;
}
