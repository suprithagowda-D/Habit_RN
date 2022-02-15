import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {SubTitle,Circle,StepsCount,StyledScrollView} from '../styles/index.style';

type Props = {
  steps: number;
  title:string;
  color:string;
};

const Steps: React.FC<Props> = ({steps,title,color}) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <StyledScrollView>
      <SubTitle >{title}</SubTitle>
        <Circle inputColor={color} >
          <StepsCount>{steps}</StepsCount>
        </Circle>
      </StyledScrollView>
    </SafeAreaView>
  );
};



export default Steps;
