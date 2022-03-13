import React from "react";
import { Text, StyleSheet } from "react-native";

import { Loader } from "@components/";
import { Container } from "@components/";

const AuthExample = () => {
  if (true) {
    return <Loader />;
  }

  return (
    <Container>
      <Text>Auth</Text>
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
