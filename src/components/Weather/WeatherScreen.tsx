import React, { useEffect, useState } from "react";
import { WeatherContainer, Main } from "./Weather.style";
import WeatherInfo from "./WeatherInfo";
import WeatherDetails from "./WeatherDetails";
import Geolocation from "@react-native-community/geolocation";
import { ImageBackground, View } from "react-native";
import StepsScreen from "../StepTracker/StepsScreen";

const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "a1bb12ecfc26d19c7bc083e087ea9e10";
type Props = {
  navigation: any;
};
const Weather = () => {
  const [currentWeatherDetails, setCurrentWeatherDetails] = useState<any>(null);
  useEffect(() => {
    Geolocation.getCurrentPosition(
      (success: any) => {
        let { latitude, longitude } = success.coords;
        fetchDataFromApi(latitude, longitude);
      },
      (err) => {
        if (err) {
          fetchDataFromApi(12.9716, 77.5946);
        }
      }
    );
  }, []);

  const fetchDataFromApi = (latitude: number, longitude: number) => {
    fetch(
      `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrentWeatherDetails(data);
      });
  };

  return (
    <WeatherContainer>
      <ImageBackground
        source={require("../../images/weather.jpeg")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
      <Main>
        {currentWeatherDetails && (
          <WeatherInfo currentWeatherDetails={currentWeatherDetails} />
        )}
      </Main>
      {currentWeatherDetails && (
        <WeatherDetails currentWeatherDetails={currentWeatherDetails} />
      )}
       </ImageBackground>
    </WeatherContainer>
  );
};
export default Weather;
