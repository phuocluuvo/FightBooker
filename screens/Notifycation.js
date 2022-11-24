import { Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { Box, ChevronLeftIcon, HStack } from "native-base";
import Tabview from "../component/notifycation/Tabview";
import { useNavigation } from "@react-navigation/native";
export default function Notifycation() {
  const nav = useNavigation();
  return (
    <Box
      key={Math.random()}
      safeAreaTop
      flex={1}
      bg={{
        linearGradient: {
          colors: ["#FCFCFE", "#A3BFF3"],
        },
      }}
    >
      <ImageBackground
        source={require("../assets/6d724fed3957ccb6ecfd2ddf4bc3dc20.jpeg")}
        style={{
          width: "100%",
          height: "110%",
          position: "absolute",
          opacity: 0.9,
          zIndex: 0,
        }}
        resizeMode="cover"
        blurRadius={110}
      ></ImageBackground>
      <HStack justifyContent="space-around" alignItems="center" pt="10" px="3">
        <TouchableOpacity style={{ width: 50 }} onPress={() => nav.goBack()}>
          <ChevronLeftIcon size="md" color="#fff" />
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: "Inter_900Black",
            fontSize: 25,
            lineHeight: 30,
            color: "white",
          }}
        >
          Notifycation
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 30,
              color: "white",
            }}
          >
            Clear All
          </Text>
        </TouchableOpacity>
      </HStack>

      <Tabview></Tabview>
    </Box>
  );
}
