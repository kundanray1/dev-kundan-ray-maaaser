import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as theme from "../constants/theme.js";
 
const PercentageBar = ({
  navigation,
  percentage,
  height,
  backgroundColor,
  completedColor,
  ...props
}) => {
  const [getPercentage, setPercentage] = useState(percentage);
  const [getheight, setHeight] = useState(height);
  const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [getCompletedColor, setCompletedColor] = useState(completedColor);
  return (
    <View>
      <View style={{justifyContent: 'center'}}>
        <View
          style={{
            height: 4,
            marginVertical: 10,
            borderColor: getBackgroundColor,
            backgroundColor:"#D3D3D3",
            width:"100%"
          }}
        />
        <View
          style={{
            width: getPercentage>=100?"100%": getPercentage<100? `${getPercentage}%` : `${0}%`,
            height: 4,
            backgroundColor: getCompletedColor,
            position: 'absolute',
            bottom:10,
          }}
        />
      </View>
    </View>
  );
};
export default PercentageBar;