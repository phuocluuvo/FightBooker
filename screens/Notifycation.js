import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Box, Center, Heading, HStack } from "native-base";
import Tabview from "../component/notifycation/Tabview";
export default function Notifycation() {
  return (
    <Box
      key={Math.random()}
      safeAreaTop
      flex={1}
      bg={{
        linearGradient: {
          colors: ["#A3BFF3", "#FCFCFE"],
          start: [0, 1],
          end: [1, 1],
        },
      }}
    >
      <HStack justifyContent="space-around" alignItems="center">
        <TouchableOpacity style={{ width: 50 }}>
          <Image source={require("../assets/wq.png")}></Image>
        </TouchableOpacity>

        <Heading>Notifycation</Heading>

        <TouchableOpacity>
          <Center>Clear All</Center>
        </TouchableOpacity>
      </HStack>

      <Tabview></Tabview>
    </Box>
  );
}
