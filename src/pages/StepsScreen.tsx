import React, {useEffect,useState} from 'react';
import {
  SafeAreaView} from 'react-native';
import RNShake from 'react-native-shake';
import Steps from '../components/Steps';
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement} from '../store/stepSlice';
import {OuterView,Button,BtnText,StyledIcon,Header} from '../styles/index.style';
import { faShoePrints,faPersonRunning } from '@fortawesome/free-solid-svg-icons';

type Props = {
  navigation: any;
};

const StepsScreen = ({navigation}: Props) => {
  const [points, setPoints] = useState<number>(100);
  const steps = useSelector(state => state.step.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if ( steps%2 ===0) {
    setPoints(points+100);
      navigation.navigate('Prize',{ points:points});
      setPoints(points+100);
    }

    const subscription = RNShake.addListener(() => {
      dispatch(increment());

    });
    return () => {
      subscription.remove();
    };
  }, [dispatch, steps, navigation]);
  return (
    <SafeAreaView>
      <OuterView>
      <Header>Daily Step Tracker</Header>
      <StyledIcon icon={faPersonRunning} size={50}/>
      <Steps steps={steps} title={'Today steps'} color={'green'} textColor={"black"}/>

        {steps >= 2 && (
          <Button
           onPress={() => navigation.navigate('Prize',{ points:points})}>
            <BtnText>Rewards</BtnText>
          </Button>
        )}
      </OuterView>
    </SafeAreaView>
  );
};



export default StepsScreen;
