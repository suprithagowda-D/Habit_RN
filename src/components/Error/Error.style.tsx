import styled from "styled-components/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const ErrorContainer = styled.View`
    flex: 1;
    alignSelf: center;
    alignItems: center;
    paddingBottom: 30px;
    justifyContent: center;
`;
export const TextContainer = styled.View`
alignItems: center;
`;
export const ErrorHead = styled.Text`
fontSize: 18px;
    fontWeight: bold;
`;
export const ErrorSubText = styled.Text`
fontSize: 16px;
    fontWeight: 500;
    paddingHorizontal: 50px;
    textAlign: center;
`;
export const ErrorImage = styled.Image`
  width: 200px;
  height: 200px;
  align:center;
`;