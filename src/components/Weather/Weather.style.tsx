import styled from "styled-components/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

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
