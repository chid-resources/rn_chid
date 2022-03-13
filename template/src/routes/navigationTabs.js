import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Example from "@screens/example";
import { NAVIGATION_CONSTANTS } from "@constants";
import AppExample from "@screens/app/appExample";
import AuthExample from "@screens/auth/authExample";
import { COLORS, FONTFAMILYS, FONTS } from "@theme";
import ReAn from "@screens/app/ReAn";
const Tab = createBottomTabNavigator();

export default function Tabs() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: [Styles.bgSize],
        // tabBarBackground: () => (
        //   <Image
        //     source={Images.footerBg}
        //     style={Styles.bgSize}
        //     resizeMode="stretch"
        //   />
        // ),
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderFooterList
              title={"App"}
              isActive={focused}
              // onPress={() => {
              //   navigation.navigate(NAVIGATION_CONSTANTS.APP_EXAMPLE);
              // }}
            />
          ),
          tabBarStyle: Styles.tabBarStyle,
        }}
        name={NAVIGATION_CONSTANTS.APP_EXAMPLE}
        component={AppExample}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderFooterList title={"Auth"} isActive={focused} />
          ),
          tabBarStyle: Styles.tabBarStyle,
        }}
        name={NAVIGATION_CONSTANTS.AUTH_EXAMPLE}
        component={AuthExample}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderFooterList title={"ReAn"} isActive={focused} />
          ),
          tabBarStyle: Styles.tabBarStyle,
        }}
        name={NAVIGATION_CONSTANTS.RE_ANIMATED_EXAMPLE}
        component={ReAn}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderFooterList title={"Exg"} isActive={focused} />
          ),
          tabBarStyle: Styles.tabBarStyle,
        }}
        name={NAVIGATION_CONSTANTS.EXAMPLE}
        component={Example}
      />
    </Tab.Navigator>
  );
}

const RenderFooterList = (props) => {
  const { title, isActive } = props;
  return (
    <View
      activeOpacity={0.8}
      style={[
        Styles.iconBg,
        { backgroundColor: isActive ? "#070707" : "#ffffff" },
      ]}
      // onPress={onPress}
    >
      <Text
        style={[Styles.fTabText, { color: isActive ? "#ffffff" : "#070707" }]}
      >
        {title}
      </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  bgSize: {
    height: Platform.OS === "ios" ? 100 : 80,
    zIndex: -1,
  },
  iconBg: {
    alignItems: "center",
    top: Platform.OS === "ios" ? 4 : 0,
    padding: 10,
    borderRadius: 12,
  },
  footerIcon: {
    width: 50,
    height: 50,
  },
  fTabText: {
    fontFamily: FONTFAMILYS.Montserrat,
    color: COLORS.white,
    fontSize: FONTS.LINE_HIGHT.tiny,
    fontWeight: "bold",
  },
  tabBarStyle: {
    display: "flex",
    showLabel: false,
  },
});
