import React from 'react';
import {useSelector} from 'react-redux';
import Card from '../components/Card';
import {Button,ViewContainer,BtnText} from '../styles/index.style';

type Props = {
  navigation: any;
  route:any;
};

const Home = ({navigation}: Props) => {
  return (
    <ViewContainer>
     <Button
        onPress={() => navigation.navigate('Weather')}>
        <BtnText>Weather!</BtnText>
      </Button>
      <Button
        onPress={() => navigation.navigate('StepsScreen')}>
        <BtnText>Tracker!</BtnText>
      </Button>
    </ViewContainer>
  );
};

export default Home;