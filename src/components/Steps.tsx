import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {SubTitle,Circle,StepsCount,StyledScrollView} from '../styles/index.style';

type Props = {
  steps: number;
  title:string;
  color:string;textColor:string;
};

const Steps: React.FC<Props> = ({steps,title,color,textColor}) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <StyledScrollView>
      <SubTitle textColor={textColor} >{title}</SubTitle>
        <Circle inputColor={color} >
          <StepsCount>{steps}</StepsCount>
        </Circle>
      </StyledScrollView>
    </SafeAreaView>
  );
};



export default Steps;
