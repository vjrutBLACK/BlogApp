import * as colors from '$themes/color';
import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
interface Props {
  style?: ViewStyle;
  text: string;
  textStyle?: TextStyle;
}

const Header = ({style, text, textStyle}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
});
