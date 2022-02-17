import React from 'react';
import { Text } from 'react-native'
import {WeatherDetailsView,WeatherDetailsRow1,SubText,WeatherDetailsRow,WeatherDetailsItems,WeatherDetailsText} from '../styles/index.style';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTemperatureHalf, faGaugeHigh, faWind, faDroplet, } from '@fortawesome/free-solid-svg-icons';

const WeatherDetails: React.FC<Props> = ({currentWeatherDetails}) => {

    const {
        main: { feels_like, humidity, pressure },
        wind: { speed },
    } = currentWeatherDetails

  return (
    <WeatherDetailsView>
    <WeatherDetailsRow1>

            <WeatherDetailsRow>
            <FontAwesomeIcon icon={ faTemperatureHalf } size={30} />
                <WeatherDetailsItems>
                    <SubText>Feels like :</SubText>
                    <WeatherDetailsText>{feels_like} °</WeatherDetailsText>
                </WeatherDetailsItems>
            </WeatherDetailsRow>
        <WeatherDetailsRow>
            <WeatherDetailsRow>
            <FontAwesomeIcon icon={ faDroplet} size={30} />
                <WeatherDetailsItems>
                    <SubText>Humidity :</SubText>
                    <WeatherDetailsText>{humidity} %</WeatherDetailsText>
                </WeatherDetailsItems>
            </WeatherDetailsRow>
        </WeatherDetailsRow>
    </WeatherDetailsRow1>
    <WeatherDetailsRow1>
            <WeatherDetailsRow>
            <FontAwesomeIcon icon={ faWind } size={30} />
                <WeatherDetailsItems>
                    <SubText>Wind Speed :</SubText>
                    <WeatherDetailsText>{speed}</WeatherDetailsText>
                </WeatherDetailsItems>
            </WeatherDetailsRow>

            <WeatherDetailsRow>

            <FontAwesomeIcon icon={ faGaugeHigh } size={30} />
                <WeatherDetailsItems>
                    <SubText>Pressure :</SubText>
                    <WeatherDetailsText>{pressure}</WeatherDetailsText>
                </WeatherDetailsItems>
            </WeatherDetailsRow>
        </WeatherDetailsRow1>
</WeatherDetailsView>
  );
};



export default WeatherDetails;
