import {
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Avatar,
  Box,
  Center,
  HStack,
  isEmptyObj,
  ScrollView,
  Text,
} from "native-base";
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import axios from "axios";
import { BlurView } from "expo-blur";
import { DataContext } from "../provider/Provider";
import { useNavigation } from "@react-navigation/native";

const Homepage = () => {
  const [data1, setData1] = useState();
  const { user, setData, setD } = useContext(DataContext);
  const nav = useNavigation();
  useEffect(() => {
    axios
      .get("https://637f0143cfdbfd9a63bb6e29.mockapi.io/FightBooker/dataHome")
      .then((data1) => setData1(data1.data));
  }, []);
  return (
    <ScrollView>
      <Box
        w="full"
        flex="1"
        pb="20"
        safeArea
        bg={{
          linearGradient: {
            colors: ["#FCFCFE", "#A3BFF3"],
            start: [0, 0],
            end: [0, 1],
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
        <StatusBar style="auto"></StatusBar>
        <HStack className="w-full items-center p-5">
          <Avatar
            mx="2"
            source={{
              uri: user.pic,
            }}
          />
          <Text color="white" className="text-lg">
            Hi,{" "}
          </Text>
          <Text color="white" className="text-lg font-bold">
            {user.name}
          </Text>
        </HStack>
        <View className="items-center">
          <Image
            source={require("../assets/TopCard.png")}
            className=""
            resizeMode="contain"
          />
          <HStack space={8} className="flex-row p-5">
            <Center>
              <TouchableOpacity
                style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                className="rounded-full bg-slate-300 p-1 w-[60px] h-[60px] items-center justify-center"
              >
                <MaterialCommunityIcons
                  name="airplane"
                  size={40}
                  color="#346ad2"
                />
              </TouchableOpacity>
              <Text color="white" className="w-full text-center font-bold">
                Flight
              </Text>
            </Center>
            <Center>
              <TouchableOpacity
                style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                className="rounded-full bg-slate-300 p-1 w-[60px] h-[60px] items-center justify-center"
              >
                <MaterialCommunityIcons
                  name="bed-king"
                  size={40}
                  color="#346ad2"
                />
              </TouchableOpacity>
              <Text color="white" className="font-bold">
                Hotel
              </Text>
            </Center>
            <Center>
              <TouchableOpacity
                style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                className=" rounded-full bg-slate-300 p-3 w-[60px] h-[60px] items-center justify-center"
              >
                <FontAwesome name="car" size={30} color="#346AD2" />
              </TouchableOpacity>
              <Text color="white" className="font-bold">
                Car
              </Text>
            </Center>
            <Center>
              <TouchableOpacity
                style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                className="rounded-full bg-slate-300 p-1 w-[60px] h-[60px] items-center justify-center"
              >
                <MaterialCommunityIcons
                  name="train"
                  size={40}
                  color="#346AD2"
                />
              </TouchableOpacity>
              <Text color="white" className="font-bold">
                Train
              </Text>
            </Center>
          </HStack>
        </View>
        <Box my="5">
          <Text
            color="white"
            style={{ fontFamily: "Inter_900Black" }}
            className="text-xl px-5"
          >
            Explore Destination
          </Text>
          <FlatList
            className="w-full"
            data={data1}
            horizontal
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    fetch(
                      "https://633f93fb0dbc3309f3cce759.mockapi.io/api/flight"
                    )
                      .then((data) => data.json())
                      .then((data) => {
                        setData(data.filter((x) => x.desination == item.city));

                        setD(item.city);
                        nav.navigate("SelectYourFlightScreen");
                      });
                  }}
                >
                  <Center className="mt-2">
                    <View
                      style={{ overflow: "hidden" }}
                      className="rounded-2xl ml-6"
                    >
                      <BlurView className="p-3 " intensity={120}>
                        <ImageBackground
                          source={{ uri: item.img }}
                          imageStyle={{
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                          }}
                          className="p-3 items-end h-[160] w-[150]"
                        >
                          <Feather name="heart" size={24} color="white" />
                        </ImageBackground>
                        <View className="flex-row pt-2">
                          <View className="justify-center">
                            <Ionicons
                              name="ios-location-sharp"
                              size={24}
                              color="#346AD2"
                            />
                          </View>
                          <View>
                            <Text color="white" className="font-bold">
                              {item.city}
                            </Text>
                            <View className="flex-row">
                              <Text
                                color="white"
                                className="text-[16px] text-slate-400"
                              >
                                {item.country}
                              </Text>
                              <View className="flex-row">
                                <Text color="white" className="text-[16px]">
                                  4.5
                                </Text>
                                <FontAwesome
                                  name="star"
                                  size={16}
                                  color="black"
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                      </BlurView>
                    </View>
                  </Center>
                </TouchableOpacity>
              );
            }}
          ></FlatList>
        </Box>
        <Box my="5">
          <Text
            color="white"
            style={{ fontFamily: "Inter_900Black" }}
            className="text-xl px-5"
          >
            Best Offers
          </Text>
          <FlatList
            className="w-full"
            data={data1}
            horizontal
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    fetch(
                      "https://633f93fb0dbc3309f3cce759.mockapi.io/api/flight"
                    )
                      .then((data) => data.json())
                      .then((data) => {
                        setData(data.filter((x) => x.desination == item.city));

                        setD(item.city);
                        nav.navigate("SelectYourFlightScreen");
                      });
                  }}
                >
                  <Center className="mt-2">
                    <View
                      style={{ overflow: "hidden" }}
                      className="rounded-2xl ml-6"
                    >
                      <BlurView className="p-3 " intensity={120}>
                        <ImageBackground
                          source={{ uri: item.img }}
                          imageStyle={{
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                          }}
                          className="p-3 items-end h-[160] w-[150]"
                        >
                          <Feather name="heart" size={24} color="white" />
                        </ImageBackground>
                        <View className="flex-row pt-2">
                          <View className="justify-center">
                            <Ionicons
                              name="ios-location-sharp"
                              size={24}
                              color="#346AD2"
                            />
                          </View>
                          <View>
                            <Text color="white" className="font-bold">
                              {item.city}
                            </Text>
                            <View className="flex-row">
                              <Text
                                color="white"
                                className="text-[16px] text-slate-400"
                              >
                                {item.country}
                              </Text>
                              <View className="flex-row">
                                <Text color="white" className="text-[16px]">
                                  4.5
                                </Text>
                                <FontAwesome
                                  name="star"
                                  size={16}
                                  color="black"
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                      </BlurView>
                    </View>
                  </Center>
                </TouchableOpacity>
              );
            }}
          ></FlatList>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Homepage;
