import { View, Text, Image, ImageBackground, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import {
  NativeBaseProvider,
  Box,
  Center,
  useColorModeValue,
  Heading,
  VStack,
  HStack,
  Avatar,
} from "native-base";
import MaskedView from "@react-native-community/masked-view";
import { Easing } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";

const Boarding = () => (
  <ImageBackground
    source={require("../assets/Base2.png")}
    resizeMode="cover"
    alignItems="center"
  >
    <Box alignItems="center" justifyContent="center" mt={2}>
      <Box w={250}>
        <HStack mt={2} justifyContent="space-between" alignItems="flex-end">
          <VStack alignItems="center">
            <Image source={require("../assets/ca.png")}></Image>
            <Text className="font-bold">Air Canada</Text>
          </VStack>
          <Box>Decenber 16th, 2022</Box>
        </HStack>

        <HStack justifyContent="space-between" mt={5}>
          <VStack>
            <Text className="font-bold">07h05</Text>
            <Text className="font-bold text-gray-500">YUL</Text>
          </VStack>

          <VStack alignItems="center">
            <Image source={require("../assets/maybay.png")}></Image>
            <Text>13h00</Text>
          </VStack>

          <VStack alignItems="flex-end">
            <Text className="font-bold">20h05</Text>
            <Text className="font-bold text-gray-500">NRT</Text>
          </VStack>
        </HStack>
        <Image
          className="ml-[-18] mt-4 mb-4"
          source={require("../assets/2a.png")}
        ></Image>

        <HStack justifyContent="space-between">
          <VStack alignItems="center">
            <Text>Economy</Text>
            <Text className="font-bold">Class</Text>
          </VStack>
          <VStack alignItems="center">
            <Text>8</Text>
            <Text className="font-bold">Gate</Text>
          </VStack>
          <VStack alignItems="center">
            <Text>3</Text>
            <Text className="font-bold">Terminal</Text>
          </VStack>
          <VStack alignItems="center">
            <Text>AC006</Text>
            <Text className="font-bold">Flight</Text>
          </VStack>
        </HStack>
        <Image
          className="ml-[-18] mt-3 mb-3"
          source={require("../assets/2a.png")}
        ></Image>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            <Avatar source={require("../assets/ava.png")}></Avatar>
            <VStack>
              <Text>Cathrina Dion</Text>
              <Text>24 years, Female</Text>
            </VStack>
          </HStack>
          <HStack alignItems="center">
            <Image source={require("../assets/Sofa.png")}></Image>
            <Text>29A</Text>
          </HStack>
        </HStack>

        <Image source={require("../assets/2.png")} className="mt-3"></Image>
      </Box>

      <Image source={require("../assets/Scan.png")} className="mt-4"></Image>
    </Box>
  </ImageBackground>
);

export default function BoardingPass() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 550,
      duration: 2000,
      useNativeDriver: false,
      // easing: Easing.bezierFn(0.7, 0.5, 1, 0.1),
      easing: Easing.out(Easing.back(0.7)),
    }).start();
  }, []);
  return (
    <Box
      flex={1}
      safeAreaTop
      bg={{
        linearGradient: {
          colors: ["#A3BFF3", "#FCFCFE"],
          start: [0, 1],
          end: [1, 1],
        },
      }}
      alignItems="center"
    >
      <Center>
        <Box className="z-50">
          {""}
          <Heading>Boarding Pass</Heading>
          {""}
        </Box>

        <Box alignItems="center">
          <MaskedView
            style={{ width: 390, height: 650 }}
            maskElement={
              <View
                style={{
                  // Transparent background because mask is based off alpha channel.
                  backgroundColor: "white",
                  height: 700,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></View>
            }
          >
            {/* Shows behind the mask, you can put anything here, such as an image */}
            <Animated.View style={{ marginTop: fadeAnim }}>
              <ImageBackground
                className=" w-[390] h-[650] mt-[-550]"
                source={require("../assets/Base2.png")}
                resizeMode="cover"
                alignItems="center"
              >
                <Box alignItems="center" justifyContent="center" mt={2}>
                  <Box w={250}>
                    <HStack
                      mt={2}
                      justifyContent="space-between"
                      alignItems="flex-end"
                    >
                      <VStack alignItems="center">
                        <Image source={require("../assets/ca.png")}></Image>
                        <Text className="font-bold">Air Canada</Text>
                      </VStack>
                      <Box>Decenber 16th, 2022</Box>
                    </HStack>

                    <HStack justifyContent="space-between" mt={5}>
                      <VStack>
                        <Text className="font-bold">07h05</Text>
                        <Text className="font-bold text-gray-500">YUL</Text>
                      </VStack>

                      <VStack alignItems="center">
                        <Image source={require("../assets/maybay.png")}></Image>
                        <Text>13h00</Text>
                      </VStack>

                      <VStack alignItems="flex-end">
                        <Text className="font-bold">20h05</Text>
                        <Text className="font-bold text-gray-500">NRT</Text>
                      </VStack>
                    </HStack>
                    <Image
                      className="ml-[-18] mt-4 mb-4"
                      source={require("../assets/2a.png")}
                    ></Image>

                    <HStack justifyContent="space-between">
                      <VStack alignItems="center">
                        <Text>Economy</Text>
                        <Text className="font-bold">Class</Text>
                      </VStack>
                      <VStack alignItems="center">
                        <Text>8</Text>
                        <Text className="font-bold">Gate</Text>
                      </VStack>
                      <VStack alignItems="center">
                        <Text>3</Text>
                        <Text className="font-bold">Terminal</Text>
                      </VStack>
                      <VStack alignItems="center">
                        <Text>AC006</Text>
                        <Text className="font-bold">Flight</Text>
                      </VStack>
                    </HStack>
                    <Image
                      className="ml-[-18] mt-3 mb-3"
                      source={require("../assets/2a.png")}
                    ></Image>
                    <HStack justifyContent="space-between" alignItems="center">
                      <HStack alignItems="center">
                        <Avatar source={require("../assets/ava.png")}></Avatar>
                        <VStack>
                          <Text>Cathrina Dion</Text>
                          <Text>24 years, Female</Text>
                        </VStack>
                      </HStack>
                      <HStack alignItems="center">
                        <Image source={require("../assets/Sofa.png")}></Image>
                        <Text>29A</Text>
                      </HStack>
                    </HStack>

                    <Image
                      source={require("../assets/2.png")}
                      className="mt-3"
                    ></Image>
                  </Box>

                  <Image
                    source={require("../assets/Scan.png")}
                    className="mt-4"
                  ></Image>
                </Box>
              </ImageBackground>
            </Animated.View>
          </MaskedView>

          <Image
            source={require("../assets/khr.png")}
            className="absolute"
          ></Image>
          <TouchableOpacity>
            <ImageBackground
              className="w-32 h-16 flex-row "
              source={require("../assets/nut.png")}
            >
              <Image
                className="ml-5"
                source={require("../assets/iconnut.png")}
              ></Image>
              <Text className="mt-4 ml-1">Print</Text>
            </ImageBackground>
          </TouchableOpacity>
        </Box>
      </Center>
    </Box>
  );
}
