import React from "react";
import { ViewContainer } from "../common/styles/index.style";
import Weather from "../components/Weather/WeatherScreen";
import StepsScreen from "../components/StepTracker/StepsScreen";


type Props = {
  navigation: any;
};

const HomePage = ({ navigation }: Props) => {
  return (
    <>
      <ViewContainer>
        <Weather />
      </ViewContainer>
      <ViewContainer>
        <StepsScreen navigation={navigation} />
      </ViewContainer>
    </>
  );
};

export default HomePage;
