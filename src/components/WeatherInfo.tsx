import React from 'react';
import { Text,Image } from 'react-native'
import {WeatherInfoView,WeatherImage,TextPrimary,WeatherDescription,TextSecondary,WeatherIcon,
  City} from '../styles/index.style';
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
            <City>{name}</City>
        <WeatherIcon icon={faCloud} size={50}/>
          <TextPrimary>{temp}°</TextPrimary>
            <WeatherDescription >{description}</WeatherDescription>
            <TextSecondary>{main}</TextSecondary>
        </WeatherInfoView>
  );
};



export default WeatherInfo;
