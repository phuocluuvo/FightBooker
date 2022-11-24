import React, { useLayoutEffect } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Homepage from "./screens/Homepage";
import BoardingPass from "./screens/BoardingPass";
import BookingScreen from "./screens/BookingScreen";
import Notifycation from "./screens/Notifycation";
import { useNavigation } from "@react-navigation/native";
import ProfileScreen from "./screens/ProfileScreen";
const Tab = createMaterialBottomTabNavigator();

export default function HomePageRoute() {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="Homepage"
      activeColor="white"
      shifting
      barStyle={{
        position: "absolute",
        backgroundColor: "#1E2B6F",
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginHorizontal: 40,
        borderRadius: 48,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Flights",

          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="plane" size={20} color={color} />
          ),
        }}
        name="Homepage"
        component={Homepage}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
        }}
        name="Notifycation"
        component={Notifycation}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
        name="BookingScreen"
        component={BookingScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
