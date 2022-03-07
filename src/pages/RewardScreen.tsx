import React from 'react';
import {useSelector} from 'react-redux';
import Card from '../components/StepTracker/Card';
import {ViewContainer} from '../styles/index.style';

type Props = {
  route:any;
  textColor:string;
};

const Prize = ({route}: Props) => {
  const steps = useSelector(state => state.step.value);
  return (
    <ViewContainer>
      <Card steps={steps} route={route}  textColor={"white"}/>
      </ViewContainer>
  );
};

export default Prize;
