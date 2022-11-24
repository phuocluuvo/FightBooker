import {
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
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
// const data = [
//   {
//     city: "Paris",
//     country: "France",
//     price: 450,
//     img: "https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     city: "Bali",
//     country: "Indonesia",
//     price: 375,
//     img: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     city: "Moscow",
//     country: "Russia",
//     price: 365,
//     img: "https://images.pexels.com/photos/92412/pexels-photo-92412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
// ];
const Homepage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://637f0143cfdbfd9a63bb6e29.mockapi.io/FightBooker/dataHome")
      .then((data) => setData(data.data));
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
              uri: "https://th.bing.com/th/id/R.fa80875ff296e70099950717d1efd03c?rik=mclEqGePnpFZQA&riu=http%3a%2f%2ffc00.deviantart.net%2ffs71%2ff%2f2011%2f342%2f3%2fa%2fthere_goes_that_weird_guy_with_the_mustache_by_angelak47-d4ihllt.jpg&ehk=lxXeQ4cy1sef0bv49hpgsIHHsByZy%2bc%2bZAS3ITaXfWw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
            }}
          />
          <Text color="white" className="text-lg">
            Hi,{" "}
          </Text>
          <Text color="white" className="text-lg font-bold">
            Mustadermort!
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
            data={data}
            horizontal
            renderItem={({ item }) => {
              return (
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
            data={data}
            horizontal
            renderItem={({ item }) => {
              return (
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
                        <Box w="120">
                          <Text color="white" className="font-bold">
                            {item.city}
                          </Text>
                          <HStack className="justify-between w-full">
                            <Text color="white" className="text-[16px]">
                              {item.country}
                            </Text>
                            <View className="flex-row w-full ">
                              <Text
                                color="white"
                                style={{ fontFamily: "Inter_900Black" }}
                                className="text-[16px]"
                              >
                                ${item.price}
                              </Text>
                            </View>
                          </HStack>
                        </Box>
                      </View>
                    </BlurView>
                  </View>
                </Center>
              );
            }}
          ></FlatList>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Homepage;
