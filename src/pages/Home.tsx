import React from 'react';
import {Button,ViewContainer,BtnText,Account} from '../styles/index.style';
import {ImageBackground} from "react-native";

type Props = {
  navigation: any;
  route:any;
};

const Home = ({navigation}: Props) => {
  return (
    <ImageBackground source={require('../images/track.jpeg')} resizeMode="cover"style={{width: '100%', height: '100%'}}>
       <Account> Welcome! Supritha</Account>
    <ViewContainer>
        <Button
        onPress={() => navigation.navigate('StepsScreen')}>
        <BtnText>Steps</BtnText>
      </Button>
      <Button
        onPress={() => navigation.navigate('Weather')}>
        <BtnText>Weather</BtnText>
      </Button>
    </ViewContainer>
    </ImageBackground>
  );
};

export default Home;