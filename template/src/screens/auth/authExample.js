import React, { useCallback } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { Loader } from "@components/";
import { Container } from "@components/";
import { BottomSheet } from "@components/";
import { Button } from "@components/";
import { SCREEN_HEIGHT } from "@theme/size";

const AuthExample = () => {
  const ref = React.useRef(null);

  const bottomSheetHandler = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-300);
    }
  }, []);

  if (false) {
    return <Loader />;
  }

  return (
    <Container>
      <Button title="Open Model" onPress={() => bottomSheetHandler()} />
      <BottomSheet ref={ref}>
        <Text style={{ color: "#000", textAlign: "center" }}>Children</Text>
      </BottomSheet>
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
  message: {
    color: "#070707",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AuthExample;
