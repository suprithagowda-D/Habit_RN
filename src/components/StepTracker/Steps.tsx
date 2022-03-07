import React from 'react';

import {Circle,StepsCount,StyledScrollView} from './Stepper.style';

type Props = {
  steps: number;
  title:string;
  color:string;textColor:string;
};

const Steps: React.FC<Props> = ({steps,title,color,textColor}) => {
  return (

      <StyledScrollView>
        <Circle inputColor={color} >
          <StepsCount testID="steps_id">{steps}</StepsCount>
        </Circle>
      </StyledScrollView>

  );
};



export default Steps;
