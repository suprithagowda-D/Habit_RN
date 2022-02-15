import React from 'react';
import {View} from 'react-native';
import {CongImage,SubTitle} from '../styles/index.style';

type Props = {
  steps: number;
  route:any;
};

const Card = ({steps,route}: Props) => {
  const { points } = route.params;
  return (
    <View>
      <SubTitle>Completed {steps} steps</SubTitle>
 <CongImage source={require('../images/smile.jpeg')} width={20} height={200}/>
 <SubTitle>Won {points} points!</SubTitle>
    </View>
  );
};


export default Card;
