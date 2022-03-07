import styled from "styled-components/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const Circle = styled.View`
  width: 150px;
  height: 150px;
  top:40px;
  borderRadius: 50px;
  borderColor: ${(props:any) => props.inputColor};
  borderWidth: 3px;
  justifyContent: center;
  alignItems: center;
`;

export const StepsCount = styled.Text`
  color: black;
  fontSize: 25px;
  fontWeight: 800;
`;
export const StyledScrollView = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }))``;
  export const SubTitle = styled.Text`
  color: ${(props:any) => props.textColor};
  textAlign: center;
  fontSize: 22px;
  fontWeight: 800;
  padding: 20px;
  textTransform: capitalize;`;

  export const CongImage = styled.Image`
  width: 350px;
  height: 400px;
  align:center;
`;
export const OuterView = styled.View`
  display: flex;
  height: 100%;
  justifyContent: space-around;
`;
export const Header = styled.Text`
  fontSize: 25px;
  textAlign: center;
  fontWeight: 800;
  color: #005266;
  top:10px;
`;
export const StyledIcon = styled(FontAwesomeIcon)`
  top: 20px;
  marginLeft: 40%;
`;
export const Button = styled.TouchableOpacity`
  width: 40%;
  elevation: 8;
  backgroundColor:#ccf5ff;
  padding: 10px;
  display: flex;
  justifyContent: center;
  alignItems: center;
  alignSelf: center;
  border:2px solid black;
`;

export const BtnText = styled.Text`
  fontSize: 18px;
  fontWeight:500;
  color: black;
`;