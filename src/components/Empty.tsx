import * as colors from '$themes/color';
import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
interface Props {
  style?: ViewStyle;
  text: string;
  textStyle?: TextStyle;
}

const Empty = ({style, text, textStyle}: Props) => {
  return (
    <View
      style={[
        {
          flexDirection: 'column',
          marginTop: 20,
          paddingHorizontal: 20,
          paddingVertical: 20,
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
        },
        style,
      ]}>
      <Text style={[{textAlign: 'center', marginTop: 10, color: colors.black}, textStyle]}>{text}</Text>
    </View>
  );
};

export default Empty;
