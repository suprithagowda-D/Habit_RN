import React from "react";
import { View } from "react-native";
import { ErrorContainer, ErrorHead, ErrorSubText,TextContainer,ErrorImage } from "../styles/index.style";



const ErrorCard = () => {
    return (
        <ErrorContainer>
          <View>
            <ErrorImage source={require('../images/internetError.png')} />
           </View>
          <TextContainer>
            <ErrorHead >Connection Error</ErrorHead>
            <ErrorSubText>
              Please check your network connectivity and try again
            </ErrorSubText>
          </TextContainer>
        </ErrorContainer>
      );
};

export default ErrorCard;
