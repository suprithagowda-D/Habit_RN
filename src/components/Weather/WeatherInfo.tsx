import React from 'react';
import { Text,Image } from 'react-native'
import {WeatherInfoView,WeatherImage,TextPrimary,WeatherDescription,TextSecondary,WeatherIcon,
  City} from './Weather.style';
  import { faCloud } from '@fortawesome/free-solid-svg-icons';


const WeatherInfo: React.FC<Props> = ({currentWeatherDetails}) => {
  const {
    main: {temp},
    weather: [details],
    name} = currentWeatherDetails;
    const { icon , main , description} = details;


  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

  return (
    <WeatherInfoView>
            <City testID="location">{name}</City>
        <WeatherIcon testID="weatherIcon" icon={faCloud} size={50}/>
          <TextPrimary testID="weatherTemp">{temp}°</TextPrimary>
            <WeatherDescription testID="weatherDesc">{description}</WeatherDescription>
            <TextSecondary testID="weatherMain">{main}</TextSecondary>
        </WeatherInfoView>
  );
};



export default WeatherInfo;
