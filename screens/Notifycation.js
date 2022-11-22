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
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/875f/1388/6d724fed3957ccb6ecfd2ddf4bc3dc20?Expires=1670198400&Signature=AzT-YPHY-IfP6xM-wtqPUjqxN29Qzk997L~27zbkezqTVl25FgAnuc-08QlmiN3QlzlsD3y9jEg-qzSaBb83qp6a-FfDGsivpCIfInRbCIYSkefqTjWb099f9CRnT5gewl7cgGT2NIcv8DEOJVGpevM7BYsTiFGxq8L6G-MrXFFxL74a-TxufhyG3U5O7Lfp8GKw-sLJeYlVf17xVDSh12PJf1l65zqLintObghAatJcAlZd5hGda5wgUrJgbJHWgkhNKDI3UVSWh5aai-GV50xx0~wOTXkRUY45JqAz67krAkJRggZ2hz7Fv~UAXBoaTPJFYLmTm6KGwtRwgydsxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        }}
        style={{
          width: "100%",
          height: "110%",
          position: "absolute",
          opacity: 0.9,
          zIndex: 0,
        }}
        resizeMode="cover"
        blurRadius={120}
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
