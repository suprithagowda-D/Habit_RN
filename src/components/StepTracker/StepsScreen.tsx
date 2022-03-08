import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import RNShake from "react-native-shake";
import Steps from "./Steps";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/stepSlice";
import {
  OuterView,
  Button,
  BtnText,
  StyledIcon,
  Header,
} from "./Stepper.style";
import {
  faShoePrints,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  navigation: any;
};

const StepsScreen = ({ navigation }: Props) => {
  const [points, setPoints] = useState<number>(100);
  const steps = useSelector((state) => state.step.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (steps == 5) {
    navigation.navigate("Reward", { points: points });
      setPoints(points + 100);
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
        <Header testID="tracker_heading">Daily Step Tracker</Header>
        <StyledIcon icon={faPersonRunning} size={50} />
        <Steps
          steps={steps}
          title={"Today steps"}
          color={"green"}
          textColor={"black"}
        />
        <Button
          testID="reward_btn"
          onPress={() => navigation.navigate("Reward", { points: 100 })}
        >
          <BtnText>Rewards</BtnText>
        </Button>
      </OuterView>
    </SafeAreaView>
  );
};

export default StepsScreen;
