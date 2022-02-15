import React from 'react';
import {useSelector} from 'react-redux';
import Card from '../components/Card';
import {Button,ViewContainer,BtnText} from '../styles/index.style';

type Props = {
  navigation: any;
  route:any;
};

const Prize = ({navigation,route}: Props) => {
  const steps = useSelector(state => state.step.value);
  return (
    <ViewContainer>
      <Card steps={steps} route={route} />
      <Button
        onPress={() => navigation.goBack()} >
        <BtnText>Go Home!</BtnText>
      </Button>
    </ViewContainer>
  );
};

export default Prize;
