import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';



let currentNetwork:any;

NetInfo.fetch().then((state) => {
  currentNetwork = state.isConnected;
});
const CheckConnetion = () => {
    const [netInfo, setNetInfo] = useState(currentNetwork);
        useEffect(() => {
      const unsubscribe = NetInfo.addEventListener((state) => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
        setNetInfo(state.isConnected);
      });
      return () => unsubscribe();
    }, []);

    return netInfo;
  };
export default CheckConnetion;