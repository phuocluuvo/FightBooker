import React, { useContext, useEffect, useState } from "react";
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
import { DataContext } from "../provider/Provider";
const BookingScreen = () => {
  const nav = useNavigation();
  const { data, setData, setL, setD } = useContext(DataContext);
  const [selected, setSelected] = useState(1);
  const [location, setLocation] = useState("");
  const [desination, setDesination] = useState("");
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
      safeArea
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
      <StatusBar style="auto" />
      <Box flex="1" position={"relative"} zIndex="100">
        {/* navigation bar */}

        <HStack width="full" py="10" position={"relative"}>
          <IconButton
            onPress={() => nav.goBack()}
            position="absolute"
            zIndex="10"
            top="6"
            left="7"
            icon={<ChevronLeftIcon size="lg" color="white" />}
          ></IconButton>
          <Text
            style={{
              fontFamily: "Inter_900Black",
              fontSize: 25,
              width: "100%",
              lineHeight: 25,
              textAlign: "center",
              color: "white",
            }}
          >
            Book Your Flight
          </Text>
        </HStack>

        <BlurView
          style={{
            flex: 1,
            marginTop: "25%",
          }}
          intensity={60}
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
                          ? "white:alpha.20"
                          : {
                              linearGradient: {
                                end: [1.28, 0],
                                start: [0, 1],
                                locations: [0.16, 0.8],
                                colors: ["#7ABEEB", "#3E75D2"],
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
                            end: [1, 0],
                            start: [0, 1.28],
                            locations: [0.16, 0.8],
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
            <Box m={"auto"} overflow="hidden" className="rounded-3xl">
              <BlurView
                style={{
                  width: 350,

                  paddingHorizontal: 15,
                  paddingVertical: 30,
                }}
                intensity={90}
              >
                <VStack space={3}>
                  <VStack>
                    <Text color={"black"} fontSize="xl" fontWeight={"bold"}>
                      Location:
                    </Text>
                    <Input
                      w="full"
                      value={location}
                      onChangeText={setLocation}
                      bg="white:alpha.10"
                      rounded="full"
                    ></Input>
                  </VStack>
                  <VStack>
                    <Text color={"black"} fontSize="xl" fontWeight={"bold"}>
                      Desination:
                    </Text>
                    <Input
                      bg="white:alpha.10"
                      value={desination}
                      onChangeText={setDesination}
                      w="full"
                      rounded="full"
                    ></Input>
                  </VStack>
                  <HStack space={3}>
                    <VStack flex="1">
                      <Text color={"black"} fontSize="xl" fontWeight={"bold"}>
                        Departure:
                      </Text>
                      <Input
                        bg="white:alpha.10"
                        w="full"
                        rounded="full"
                      ></Input>
                    </VStack>
                    <VStack flex="1">
                      <Text color={"black"} fontSize="xl" fontWeight={"bold"}>
                        Return:
                      </Text>
                      <Input
                        borderColor={"#FDFCFE"}
                        bg="white:alpha.10"
                        w="full"
                        rounded="full"
                      ></Input>
                    </VStack>
                  </HStack>
                  <VStack>
                    <Text color={"black"} fontSize="xl" fontWeight={"bold"}>
                      Passenger:
                    </Text>
                    <Input bg="white:alpha.10" w="full" rounded="full"></Input>
                  </VStack>
                  <Box w="full" flexDir={"row"} my="2" justifyContent="center">
                    <Pressable
                      onPress={() => {
                        fetch(
                          "https://633f93fb0dbc3309f3cce759.mockapi.io/api/flight"
                        )
                          .then((data) => data.json())
                          .then((data) => {
                            setData(
                              data.filter(
                                (x) =>
                                  x.location == location &&
                                  x.desination == desination
                              )
                            );
                            setL(location);
                            setD(desination);
                            nav.navigate("SelectYourFlightScreen");
                          });
                      }}
                    >
                      <Box
                        px="4"
                        py="2"
                        rounded="2xl"
                        bg={{
                          linearGradient: {
                            end: [1.28, 0],
                            start: [0, 1],
                            locations: [0.16, 0.8],
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
            source={require("../assets/0afbc71956512f36c723261aaaf130b8.png")}
          ></ImageBackground>
        </Animated.View>
        <Animated.View
          entering={PinwheelIn.duration(5000)}
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
            source={require("../assets/91a5da7fbe9bb81aef5e8843a1dc3c5c.png")}
          ></ImageBackground>
        </Animated.View>
      </Box>
      {/* background purple fillter */}
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={{
          width: "100%",
          height: "110%",
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
