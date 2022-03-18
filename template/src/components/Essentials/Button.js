import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.label}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 60,
    borderRadius: 10,
    backgroundColor: "#070707",
    justifyContent: "center",
    alignItems: "center",
  },
  label: { color: "#f7f7f7", textAlign: "center" },
});

export default Button;
