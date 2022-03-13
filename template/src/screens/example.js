import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Loader from "@components/Essentials/Loader";
import { exampleAction } from "../redux/actions/exampleAction";
import { COLORS } from "../theme";
import { Container } from "@components/";
import { SIZE } from "@theme";

const Example = () => {
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.exampleList);
  const { loading, quote, error } = listData;

  useEffect(() => {
    triggerExampleAPI();
  }, []);

  const triggerExampleAPI = () => {
    dispatch(exampleAction());
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <View>
        <Text style={Styles.text}>{quote || ""}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => triggerExampleAPI()}
          style={Styles.btn}
        >
          <Text style={{ color: COLORS.white }}>Quote</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZE.SCREEN_WIDTH,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
  },
  text: { color: "#070707", padding: 20, textAlign: "center" },
  btn: {
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#070707",
  },
});

export default Example;
