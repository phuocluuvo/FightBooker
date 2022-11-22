import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  Box,
  ChevronLeftIcon,
  HStack,
  Input,
  KeyboardAvoidingView,
  VStack,
  Pressable,
  ScrollView,
  IconButton,
} from "native-base";
import { ImageBackground } from "react-native";
import { BlurView } from "expo-blur";
import Animated, {
  Layout,
  LightSpeedInRight,
  PinwheelIn,
  PinwheelOut,
  ZoomInLeft,
} from "react-native-reanimated";

import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const BookingScreen = () => {
  const nav = useNavigation();

  const [selected, setSelected] = useState(1);

  const data_trip = [
    { id: 1, name: "Round Trip", icon: "circle", iconType: Entypo },
    { id: 2, name: "Multi City", icon: "recycle", iconType: FontAwesome5 },
    { id: 3, name: "One Way", icon: "arrow-right", iconType: Feather },
  ];
  //const [isSelected, setSelected] = useState(false);
  return (
    <Box
      flex="1"
      w="full"
      position={"relative"}
      shadow={0}
      bg={{
        linearGradient: {
          end: { x: 0.3, y: 1 },
          start: { x: 0.5, y: 1 },
          locations: [0, 0.5],
          colors: ["#FCFCFE", "#8B93DB"],
        },
      }}
      safeAreaTop
    >
      <StatusBar style="auto" />
      <Box flex="1" position={"relative"} zIndex="100">
        {/* navigation bar */}
        <HStack width="full" py="5" position={"relative"}>
          <IconButton
            onPress={() => nav.navigate("ProfileScreen")}
            position="absolute"
            zIndex="10"
            top="3"
            left="5"
            icon={<ChevronLeftIcon size="lg" color="black" />}
          ></IconButton>
          <Text
            style={{
              fontFamily: "Inter_900Black",
              fontSize: 25,
              width: "100%",
              lineHeight: 25,
              textAlign: "center",
            }}
          >
            Book Your Flight
          </Text>
        </HStack>

        <BlurView
          style={{
            flex: 1,
            marginTop: "40%",
            borderTopColor: "#fff",
            borderTopWidth: 1,
          }}
          intensity={130}
        >
          <KeyboardAvoidingView>
            <ScrollView horizontal w="full" py="4">
              <HStack space={1} px="8">
                {data_trip.map((t, index) => (
                  <TouchableOpacity
                    mx="4"
                    key={t.id}
                    onPress={() => setSelected(t.id)}
                  >
                    <Box
                      bg={
                        selected !== t.id
                          ? "#fffa"
                          : {
                              linearGradient: {
                                end: { x: 0.3, y: 1 },
                                start: { x: 0.5, y: 1 },
                                locations: [0, 0.5],
                                colors: ["#7ABEEB", "#3E75D6"],
                              },
                            }
                      }
                      rounded="full"
                      p="1"
                      flexDir={"row"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Box
                        bg={{
                          linearGradient: {
                            end: { x: 0.3, y: 1 },
                            start: { x: 0.5, y: 1 },
                            locations: [0, 0.5],
                            colors:
                              selected !== t.id
                                ? ["#7ABEEB", "#3E75D6"]
                                : ["#3E75D6", "#7ABEEB"],
                          },
                        }}
                        p="1"
                        rounded={"full"}
                        m="1"
                      >
                        <t.iconType name={t.icon} size={24} color="white" />
                      </Box>
                      <Text
                        px="2"
                        color={selected !== t.id ? "black" : "white"}
                        style={{ fontFamily: "Inter_900Black" }}
                        fontSize={16}
                      >
                        {t.name}
                      </Text>
                    </Box>
                  </TouchableOpacity>
                ))}
              </HStack>
            </ScrollView>
            <Box m={"auto"}>
              <BlurView
                style={{
                  borderColor: "#fff",
                  borderWidth: 1,
                  width: 350,
                  borderRadius: 20,
                  paddingHorizontal: 15,
                  paddingVertical: 30,
                }}
                intensity={200}
              >
                <VStack space={3}>
                  <VStack>
                    <Text color={"black"} fontSize="xl" fontWeight={"bold"}>
                      Location:
                    </Text>
                    <Input variant={"filled"} w="full" rounded="full"></Input>
                  </VStack>
                  <VStack>
                    <Text color={"black"} fontSize="xl" fontWeight={"bold"}>
                      Desination:
                    </Text>
                    <Input variant={"filled"} w="full" rounded="full"></Input>
                  </VStack>
                  <HStack space={3}>
                    <VStack flex="1">
                      <Text color={"black"} fontSize="xl" fontWeight={"bold"}>
                        Departure:
                      </Text>
                      <Input variant={"filled"} w="full" rounded="full"></Input>
                    </VStack>
                    <VStack flex="1">
                      <Text color={"black"} fontSize="xl" fontWeight={"bold"}>
                        Return:
                      </Text>
                      <Input
                        borderColor={"#FDFCFE"}
                        variant={"filled"}
                        w="full"
                        rounded="full"
                      ></Input>
                    </VStack>
                  </HStack>
                  <VStack>
                    <Text color={"black"} fontSize="xl" fontWeight={"bold"}>
                      Passenger:
                    </Text>
                    <Input variant={"filled"} w="full" rounded="full"></Input>
                  </VStack>
                  <Box w="full" flexDir={"row"} my="2" justifyContent="center">
                    <Pressable>
                      <Box
                        px="4"
                        py="2"
                        rounded="2xl"
                        bg={{
                          linearGradient: {
                            start: { x: 0.4, y: 0 },
                            end: { x: 0.55, y: 0 },
                            locations: [0.3, 0.85],
                            colors: ["#81C6ED", "#346AD2"],
                          },
                        }}
                      >
                        <Text
                          fontSize="xl"
                          textTransform="uppercase"
                          fontStyle={"uppercase"}
                          style={{
                            fontFamily: "Inter_900Black",
                          }}
                        >
                          Search Flight
                        </Text>
                      </Box>
                    </Pressable>
                  </Box>
                </VStack>
              </BlurView>
            </Box>
          </KeyboardAvoidingView>
        </BlurView>
      </Box>
      {/* plane and earth background image */}
      <Box position={"absolute"} w="full" top="0">
        <Animated.View
          entering={ZoomInLeft.duration(3000).springify().delay(500)}
          layout={Layout.duration(3000).stiffness()}
          exiting={LightSpeedInRight}
          style={{
            shadowColor: "#8B93DB",
            position: "absolute",
            top: 10,
            zIndex: 3,
            width: 360,
            height: 250,
          }}
        >
          <ImageBackground
            resizeMode="contain"
            alt="plane"
            style={{
              shadowColor: "#8B93DB",
              position: "absolute",
              top: 10,
              zIndex: 3,
              width: 360,
              height: 250,
            }}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/46f1/eeef/0afbc71956512f36c723261aaaf130b8?Expires=1670198400&Signature=GZwWuZYWwfCSYr0n9Y7~wFjfTXF6fFu0CFNkH9ydWfBeIi0IX2PkCZH76C72wbOQoYSw9y6JVgCeQ3QMsFPeStTWTDKIYcWxfOXkKRfE5E5GNobiiEyyyS0-hyMkxufja0Cs5Wag8jct5FHqag8i3Ho~EzIcz3zKtG0esL0W6w73e1kghT~u19CpoJsJvuWZF4B1adAvLa2xj2VYsJEcS2nCt7hNbhRwMxmXjCJyBTLQmuLUW0QDjR9UVuv6eKiqF0PfA8405nK5kRJ1mQ09uUTIVx9ogREvJAAMJCJQmrSibNi96lnFJTQUwbCVb-r5styTk1Urzp20lE7kTw20SQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            }}
          ></ImageBackground>
        </Animated.View>
        <Animated.View
          entering={PinwheelIn.duration(5000).delay(100)}
          layout={Layout.damping()}
          exiting={PinwheelOut}
          style={{
            shadowColor: "#8B93DB",
            position: "absolute",
            zIndex: 1,
            top: 20,
            right: 0,
            width: 650,
            height: 650,
          }}
        >
          <ImageBackground
            style={{
              shadowColor: "#8B93DB",
              position: "absolute",
              zIndex: 1,
              top: 20,
              right: 0,
              width: 650,
              height: 650,
            }}
            alt="plane"
            source={{
              uri: "https://www.figma.com/file/3NB1gqrjWm2EBSQ6m1Eoyq/image/edab109591a5da7fbe9bb81aef5e8843a1dc3c5c?fuid=931003954664940227",
            }}
          ></ImageBackground>
        </Animated.View>
      </Box>
      {/* background purple fillter */}
      {/* <Box
        opacity={0.5}
        zIndex={2}
        position="absolute"
        bg={"#8B93DB"}
        w="full"
        h="full"
      ></Box> */}
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          opacity: 0.5,
          zIndex: 2,
        }}
        resizeMode="cover"
        blurRadius={100}
      ></ImageBackground>
    </Box>
  );
};

export default BookingScreen;
