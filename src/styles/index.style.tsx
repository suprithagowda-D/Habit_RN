import styled from "styled-components/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


export const ViewContainer = styled.View`
  // height: 100%;
  // paddingTop: 20px;
  //  display: flex;
  //  flexDirection:row;
   justifyContent: space-around;
  flex:1;
  borderBottom:1px solid #66e0ff;
`;
export const Account = styled.Text`
  fontSize: 30px;
  color:white;
  alignItems: center;
  margin:0 auto;
  paddingTop:30%;
  fontWeight:500;

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

export const OuterView = styled.View`
  display: flex;
  height: 100%;
  justifyContent: space-around;
`;
export const Title = styled.Text`
  fontSize: 25px;
  // color: black;
  textAlign: center;
  top: 100px;
  color:blue;
  fontWeight:700;
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
export const Circle = styled.View`
  width: 150px;
  height: 150px;
  top:40px;
  borderRadius: 50px;
  borderColor: ${(props) => props.inputColor};
  borderWidth: 3px;
  justifyContent: center;
  alignItems: center;
`;
export const SubTitle = styled.Text`
  color: ${(props) => props.textColor};
  textAlign: center;
  fontSize: 22px;
  fontWeight: 800;
  padding: 20px;
  textTransform: capitalize;`;

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

export const IconCircle = styled.View`
  width: 20px;
  height: 20px;
  borderRadius: 10px;
  borderWidth: 2px;
  bordercolor: "#1a0066";
  display: flex;
  justifyContent: center;
  alignItems: center;
`;

export const CongImage = styled.Image`
  width: 350px;
  height: 400px;
  align:center;
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
justifyContent: flex-end;
`;
export const WeatherDetailsText = styled.Text`
fontSize: 15px;
        color:#8C485E;
        fontWeight: 700;
        margin: 10px;
`;


export const WeatherContainer = styled.View`
flex: 1;`
;

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