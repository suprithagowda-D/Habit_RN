import React from "react";
import { View, ImageBackground } from "react-native";
import { CongImage, SubTitle } from "../styles/index.style";

type Props = {
  steps: number;
  route: any;
  textColor: string;
};

const Card = ({ steps, route, textColor }: Props) => {
  const { points } = route.params;
  console.log(route.params);
  return (
    <View>
      <ImageBackground source={require("../images/bgStepper.jpeg")}>
        <SubTitle textColor={textColor}>Get achievement</SubTitle>
        <SubTitle textColor={textColor}>Completed {steps} steps</SubTitle>
        <CongImage
          source={require("../images/smile1.jpg")}
          width={20}
          height={20}
        />
        <SubTitle textColor={textColor}>Won {points} points!</SubTitle>
      </ImageBackground>
    </View>
  );
};

export default Card;
