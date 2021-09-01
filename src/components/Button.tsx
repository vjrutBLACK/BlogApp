import React from "react";
import * as colors from "$themes/color";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";

const Button: React.FC<
  TouchableOpacityProps & {
    loading?: boolean;
    title?: string;
    textStyle?: StyleProp<TextStyle>;
  }
> = ({ loading, title, style, textStyle, disabled, children, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles.container, disabled ? styles.disabledButton : {}, style]}
      {...props}
      {...{ disabled }}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : title ? (
        <Text
          style={[styles.text, disabled ? styles.disabledText : {}, textStyle]}
        >
          {title}
        </Text>
      ) : null}
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  disabledText: { color: "#fff" },
  disabledButton: { backgroundColor: "#E0E0E0" },
  text: { color: "#fff", fontWeight: "700", fontSize: 16 },
  container: {
    borderRadius: 10,
    height: 60,
    flexDirection: "row",
    backgroundColor: "#3BBF6E",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Button;
