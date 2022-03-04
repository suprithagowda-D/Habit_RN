import React from "react";
import {  ViewContainer} from "../styles/index.style";import Weather from "./Weather";
import StepsScreen from "./StepsScreen";


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
