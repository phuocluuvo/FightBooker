import React, { useLayoutEffect } from "react";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Homepage from "./screens/Homepage";
import BoardingPass from "./screens/BoardingPass";
import BookingScreen from "./screens/BookingScreen";
import Notifycation from "./screens/Notifycation";
import { useNavigation } from "@react-navigation/native";
import ProfileScreen from "./screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
const Tab = createBottomTabNavigator();

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
      shifting
      screenOptions={{
        tabBarInactiveTintColor: "white",
        tabBarActiveTintColor: "blue",
        headerShown: false,
        tabBarStyle: { position: "absolute" },
        tabBarBackground: () => (
          <BlurView tint="light" intensity={60} style={{ flex: 1 }} />
        ),
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
