import React from 'react';
import {useSelector} from 'react-redux';
import Card from '../components/Card';
import {Button,ViewContainer,BtnText} from '../styles/index.style';

type Props = {
  navigation: any;
  route:any;
  textColor:string;
};

const Prize = ({navigation,route}: Props) => {
  console.log("Prize",route.params);
  const steps = useSelector(state => state.step.value);
  return (
    <ViewContainer>
      <Card steps={steps} route={route}  textColor={"white"}/>
      </ViewContainer>
  );
};

export default Prize;
