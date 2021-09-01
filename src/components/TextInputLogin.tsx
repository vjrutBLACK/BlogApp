import React, { useState } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import TextInput, { TextInputProps } from "./TextInput";
import * as colors from "$themes/color";

const TextInputLogin = ({
  style,
  containerStyle,
  secureTextEntry,
  ...props
}: TextInputProps & { containerStyle?: StyleProp<ViewStyle> }) => {
  const [_secureTextEntry, setSecureTextEntry] = useState(secureTextEntry);
  //eye-with-line
  const [focus, setFocus] = useState(false);
  return (
    <View
      style={[
        styles.container,
        focus ? styles.focus : styles.blur,
        style,
        containerStyle,
      ]}
    >
      <TextInput
        placeholder="Email"
        returnKeyType="done"
        onFocus={setFocus.bind(null, true)}
        onBlur={setFocus.bind(null, false)}
        style={[styles.textinput]}
        {...props}
        secureTextEntry={_secureTextEntry}
      />
    </View>
  );
};
export default TextInputLogin;

const styles = StyleSheet.create({
  blur: {
    backgroundColor: colors.light_white,
    borderWidth: 0,
    borderColor: "transparent",
  },
  focus: {
    backgroundColor: colors.main_color_20,
    borderColor: colors.main_color,
    borderWidth: 1,
  },
  container: {
    alignSelf: "stretch",
    flexDirection: "row",
    borderRadius: 10,
  },
  textinput: {
    height: 50,
    flex: 1,
    paddingHorizontal: 16,
  },
});
