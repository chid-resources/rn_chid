import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { Container } from "@components/";
import { SIZE } from "@theme/";

const useFollowAnimatedPosition = ({ x, y }) => {
  const followX = useDerivedValue(() => {
    return withSpring(x.value);
  });

  const followY = useDerivedValue(() => {
    return withSpring(y.value);
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: followX.value }, { translateY: followY.value }],
    };
  });
  return { followX, followY, rStyle };
};

const CIRCLE_SIZE = 80;

const AppExample = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const context = useSharedValue({ x: 0, y: 0 });
  // useAnimatedGestureHandler({})
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { x: translateX.value, y: translateY.value };
    })
    .onUpdate((event) => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    })
    .onEnd(() => {
      if (translateX.value > SIZE.SCREEN_WIDTH / 2) {
        translateX.value = SIZE.SCREEN_WIDTH - CIRCLE_SIZE;
      } else {
        translateX.value = 0;
      }
    });

  const {
    followX: blueFollowX,
    followY: blueFollowY,
    rStyle: rBlueCircleStyle,
  } = useFollowAnimatedPosition({
    x: translateX,
    y: translateY,
  });

  const {
    followX: redFollowX,
    followY: redFollowY,
    rStyle: rRedCircleStyle,
  } = useFollowAnimatedPosition({
    x: blueFollowX,
    y: blueFollowY,
  });

  const { rStyle: rGreenCircleStyle } = useFollowAnimatedPosition({
    x: redFollowX,
    y: redFollowY,
  });

  return (
    <Container>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.circle,
              { backgroundColor: "green" },
              rGreenCircleStyle,
            ]}
          />
          <Animated.View
            style={[styles.circle, { backgroundColor: "red" }, rRedCircleStyle]}
          />
          <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.circle, rBlueCircleStyle]} />
          </GestureDetector>
        </View>
      </GestureHandlerRootView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    height: 80,
    aspectRatio: 1,
    backgroundColor: "blue",
    borderRadius: 40,
    opacity: 0.8,
  },
});

export default AppExample;
