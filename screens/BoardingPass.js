import { View, Image, ImageBackground, Animated } from "react-native";
import React, { useRef, useEffect, useContext } from "react";
import {
  Box,
  Text,
  Center,
  Heading,
  VStack,
  HStack,
  Avatar,
  Pressable,
  ChevronLeftIcon,
} from "native-base";
import MaskedView from "@react-native-community/masked-view";
import { Easing } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { DataContext } from "../provider/Provider";

export default function BoardingPass() {
  const { bp, user } = useContext(DataContext);
  console.log(bp);

  const nav = useNavigation();
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
          colors: ["#FCFCFE", "#A3BFF3"],
        },
      }}
      alignItems="center"
      position={"relative"}
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
        blurRadius={100}
      ></ImageBackground>
      <Center>
        <HStack
          justifyContent="space-around"
          p="6"
          w="full"
          alignItems="center"
          position={"relative"}
        >
          <Pressable
            onPress={() => {
              console.log("first");
              nav.goBack();
            }}
            style={{ width: 50, zIndex: 50, left: 0, position: "relative" }}
          >
            <ChevronLeftIcon size="25" color="white" />
          </Pressable>

          <Text
            style={{
              fontFamily: "Inter_900Black",
              fontSize: 25,
              lineHeight: 30,
              flex: 1,
              textAlign: "center",
              color: "white",
            }}
          >
            Boarding Pass
          </Text>
          <Box
            style={{
              width: 50,
              zIndex: 50,
              left: 0,
              position: "relative",
              opacity: 0,
            }}
          >
            <ChevronLeftIcon size="25" color="white" />
          </Box>
        </HStack>
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
                        <Text className="">{bp.flight}</Text>
                      </VStack>
                      <Box>Decenber 16th, 2022</Box>
                    </HStack>

                    <HStack justifyContent="space-between" mt={5}>
                      <VStack>
                        <Text className="">{bp.timeIn}</Text>
                        <Text className=" text-gray-500">{bp.location}</Text>
                      </VStack>

                      <VStack alignItems="center">
                        <Image source={require("../assets/maybay.png")}></Image>
                        <Text>{bp.time}</Text>
                      </VStack>

                      <VStack alignItems="flex-end">
                        <Text className="">{bp.timeOut}</Text>
                        <Text className=" text-gray-500">{bp.desination}</Text>
                      </VStack>
                    </HStack>
                    <Image
                      className="ml-[-18] mt-4 mb-4"
                      source={require("../assets/2a.png")}
                    ></Image>

                    <HStack justifyContent="space-between">
                      <VStack alignItems="center">
                        <Text>Economy</Text>
                        <Text className="">Class</Text>
                      </VStack>
                      <VStack alignItems="center">
                        <Text>8</Text>
                        <Text className="">Gate</Text>
                      </VStack>
                      <VStack alignItems="center">
                        <Text>3</Text>
                        <Text className="">Terminal</Text>
                      </VStack>
                      <VStack alignItems="center">
                        <Text>AC006</Text>
                        <Text className="">Flight</Text>
                      </VStack>
                    </HStack>
                    <Image
                      className="ml-[-18] mt-3 mb-3"
                      source={require("../assets/2a.png")}
                    ></Image>
                    <HStack justifyContent="space-between" alignItems="center">
                      <HStack alignItems="center">
                        <Avatar
                          mr="2"
                          source={{
                            uri: user.pic,
                          }}
                        ></Avatar>
                        <VStack>
                          <Text>{user.name}</Text>
                          <Text>
                            {user.age} years, {user.sex}
                          </Text>
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
        </Box>
      </Center>
      <Pressable className="absolute bottom-10 z-50">
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
      </Pressable>
    </Box>
  );
}
