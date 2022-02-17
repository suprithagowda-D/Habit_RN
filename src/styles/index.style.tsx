import styled from "styled-components/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


export const ViewContainer = styled.View`
  height: 100%;
  padding: 20px;
   display: flex;
  justifyContent: space-around;
`;
export const Button = styled.TouchableOpacity`
  width: 40%;
  borderColor: red;
  borderWidth: 2px;
  padding: 10px;
  display: flex;
  justifyContent: center;
  alignItems: center;
  alignSelf: center;
`;

export const BtnText = styled.Text`
  fontSize: 18px;
  color: black;
`;

export const OuterView = styled.View`
  display: flex;
  height: 100%;
  justifycontent: space-around;
`;
export const Title = styled.Text`
  fontsize: 25px;
  color: black;
  textalign: center;
  top: 100px;
`;
export const Header = styled.Text`
  fontSize: 25px;
  textAlign: center;
  fontWeight: 800;
  color: blue;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  top: 20px;
  marginleft: 40%;
`;
export const Circle = styled.View`
  width: 200px;
  height: 200px;
  borderradius: 100px;
  // borderColor: red;
  bordercolor: ${(props) => props.inputColor};
  borderwidth: 3px;
  justifycontent: center;
  alignitems: center;
`;
export const SubTitle = styled.Text`
  color: black;
  textalign: center;
  fontsize: 22px;
  fontweight: 800;
  padding: 20px;
`;
export const StepsCount = styled.Text`
  color: black;
  fontsize: 25px;
  fontweight: 800;
`;
export const StyledScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))``;

export const IconCircle = styled.View`
  width: 20px;
  height: 20px;
  borderradius: 10px;
  borderwidth: 2px;
  bordercolor: "#1a0066";
  display: flex;
  justifycontent: center;
  alignitems: center;
`;

export const CongImage = styled.Image`
  width: 400px;
  height: 450px;
`;
////Weather----->
export const WeatherImage = styled.Image`
  width: 100px;
  height: 100px;
`;
export const WeatherInfoView = styled.View`
 flex:1;
 justifyContent: center;
`;
export const Main = styled.View`
flex: 1;
justifyContent: center;
alignItems:center;
`;
export const WeatherIcon = styled(FontAwesomeIcon)`
marginLeft:18%;

`;
export const City = styled.Text`
  textTransform: capitalize;
  fontSize: 30px;
   color:blue;
   fontWeight:700;

`;
export const WeatherDescription = styled.Text`
  textTransform: capitalize;
top: 3px;
 marginLeft:20%;
 fontSize: 8px;

`;
export const TextSecondary = styled.Text`
  textTransform: capitalize;
 color:blue;
 top: 3px;
 marginLeft:20%;
 fontSize: 15px;
 fontWeight:700;
`;

export const TextPrimary = styled.Text`
  fontSize: 25px;
  color: #ff304f;
  marginLeft:14%;
  fontWeight:500;

`;
export const WeatherDetailsView = styled.View`
flex: 1;
margin:0 12px;

`;
export const SubText = styled.Text`
color:blue;
fontWeight:700;
`;

export const WeatherDetailsRow = styled.View`
flex:1;
 flexDirection: row;
alignItems: center;
justifyContent: center;


`;
export const WeatherDetailsRow1 = styled.View`
flex:2;
flexDirection: row;


`;
export const WeatherDetailsBox = styled.View`
flex: 1;
padding: 10px;
`;

export const WeatherDetailsItems = styled.View`
// alignItems: flex-end;
justifyContent: flex-end;
`;
export const WeatherDetailsText = styled.Text`
fontSize: 15px;
        color:red;
        fontWeight: 700;
        margin: 10px;
`;


export const WeatherContainer = styled.View`
flex: 1;`;