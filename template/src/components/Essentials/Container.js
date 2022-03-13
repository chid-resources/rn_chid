import React, { useState, useEffect } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { SIZE } from "@theme/";

const Container = (props) => {
  const statusBarOptions = {
    light: {
      backgroundColor: "#f7f7f7",
      barStyle: "dark-content",
    },
    dark: {
      backgroundColor: "#000",
      barStyle: "light-content",
    },
  };
  const [statusBar, setStatusBar] = useState(statusBarOptions.light);

  useEffect(() => {
    if (props.setDarkStatusBar) {
      setStatusBar(statusBarOptions.dark);
    }
    if (props.setLightStatusBar) {
      setStatusBar(statusBarOptions.light);
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={statusBar.backgroundColor}
        barStyle={statusBar.barStyle}
      />
      <LinearGradient
        colors={["#f1f1f1", "#f9f9f9"]}
        style={styles.linearGradient}
      >
        {props.children}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    width: SIZE.SCREEN_WIDTH,
  },
  linearGradient: {
    flex: 1,
    width: SIZE.SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    zIndex: 2,
  },
});

export default Container;
