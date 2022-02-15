import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const ViewContainer = styled.View`
height: 100%;
padding: 20px;
display: flex;
justifyContent: space-around;
`;
export const Button = styled.TouchableOpacity`
width: 40%;
borderColor: red;
borderWidth: 2;
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
    justifyContent: space-around;
`;
export const Title = styled.Text`
    fontSize: 25px;
    color: black;
    textAlign: center;
    top:100px;
`;
export const Header = styled.Text`
    fontSize: 25px;
    textAlign: center;
    fontWeight:800;
    color:blue;

`;
export const StyledIcon = styled(FontAwesomeIcon)`
    top:20px;
    marginLeft:40%;
`;
export const Circle = styled.View`
width: 200px;
height: 200px;
borderRadius: 100px;
// borderColor: red;
borderColor: ${props => props.inputColor};
borderWidth: 3px;
justifyContent: center;
alignItems: center;
`;
export const SubTitle = styled.Text`
color: black;
textAlign: center;
fontSize: 22px;
fontWeight: 800;
padding:20px;
`;
export const StepsCount = styled.Text`
color: black;
    fontSize: 25px;
    fontWeight: 800;
`;
export const StyledScrollView = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
  }))``;

  export const IconCircle = styled.View`
width: 20px;
height: 20px;
borderRadius: 10px;
borderWidth: 2px;
borderColor:'#1a0066';
display: flex;
justifyContent: center;
alignItems: center;
`;


export const CongImage = styled.Image`
 width: 400px;
 height:450px;
`;