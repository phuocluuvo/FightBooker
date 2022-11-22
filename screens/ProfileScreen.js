import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Avatar,
  Box,
  Button,
  ChevronLeftIcon,
  ChevronRightIcon,
  Divider,
  HStack,
  IconButton,
  Input,
  InputGroup,
  Text,
  VStack,
} from "native-base";
import { ImageBackground, TouchableOpacity } from "react-native";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const nav = useNavigation();

  return (
    <Box
      flex={1}
      w="full"
      bg={{
        linearGradient: {
          end: { x: 0.3, y: 1 },
          start: { x: 0.5, y: 0.75 },
          locations: [0, 0.5],
          colors: ["#FCFCFE", "#8B93DB"],
        },
      }}
      safeArea
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
      <StatusBar style="auto" />
      <Box flex={1} w="full" position={"relative"} zIndex="1">
        <HStack
          width="full"
          py="7"
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <IconButton
            borderRadius={"full"}
            onPress={() => nav.goBack()}
            icon={<ChevronLeftIcon size="lg" color="white" />}
          ></IconButton>

          <Text
            style={{
              fontFamily: "Inter_900Black",
              fontSize: 25,
              lineHeight: 25,
              textAlign: "center",
            }}
            color="white"
          >
            Profile
          </Text>

          <IconButton
            variant={"link"}
            rounded="full"
            p="2"
            onPress={() => nav.navigate("EditProfileScreen")}
            icon={<FontAwesome5 name="edit" size={24} color="white" />}
          ></IconButton>
        </HStack>

        <VStack alignItems={"center"} my="7">
          <Avatar
            size="2xl"
            source={{
              uri: "https://th.bing.com/th/id/R.fa80875ff296e70099950717d1efd03c?rik=mclEqGePnpFZQA&riu=http%3a%2f%2ffc00.deviantart.net%2ffs71%2ff%2f2011%2f342%2f3%2fa%2fthere_goes_that_weird_guy_with_the_mustache_by_angelak47-d4ihllt.jpg&ehk=lxXeQ4cy1sef0bv49hpgsIHHsByZy%2bc%2bZAS3ITaXfWw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
            }}
          ></Avatar>
          <Text fontSize="2xl" color="white">
            Mustadermort
          </Text>
          <Text fontSize="sm" color="white" opacity={0.7}>
            fuharrypotter@gmail.com
          </Text>
        </VStack>
        <BlurView
          intensity={50}
          style={{
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 7,
            marginHorizontal: 20,
            marginVertical: 10,
          }}
        >
          <HStack
            space={3}
            justifyContent={"space-evenly"}
            divider={<Divider orientation="vertical" color={"white"}></Divider>}
          >
            <VStack alignItems={"center"}>
              <Text fontSize={"xl"} color="white" fontWeight="bold">
                Reward Points
              </Text>
              <Text color="blue.500" fontSize={"xl"} fontWeight="bold">
                360
              </Text>
            </VStack>
            <VStack alignItems={"center"}>
              <Text fontSize={"xl"} color="white" fontWeight="bold">
                Flight Numbers
              </Text>
              <Text color="blue.500" fontSize={"xl"} fontWeight="bold">
                12
              </Text>
            </VStack>
            <VStack alignItems={"center"}>
              <Text fontSize={"xl"} color="white" fontWeight="bold">
                Rank
              </Text>
              <Text color="blue.500" fontSize={"xl"} fontWeight="bold">
                Diamond
              </Text>
            </VStack>
          </HStack>
        </BlurView>
        <BlurView
          intensity={50}
          style={{
            borderRadius: 20,
            paddingHorizontal: 5,
            paddingVertical: 3,
            marginHorizontal: 20,
            marginVertical: 10,
          }}
        >
          <VStack
            w="full"
            rounded={"lg"}
            px="5"
            space={3}
            divider={<Divider color={"white"}></Divider>}
          >
            <TouchableOpacity>
              <HStack p="5" pb="3">
                <FontAwesome name="user" size={24} color="white" />
                <Text
                  flex="1"
                  px="2"
                  fontSize="xl"
                  fontWeight={"bold"}
                  color="white"
                >
                  Profile
                </Text>
                <ChevronRightIcon size="sm" color="white" />
              </HStack>
            </TouchableOpacity>

            <TouchableOpacity>
              <HStack p="5" pb="3">
                <Ionicons name="md-bookmark" size={24} color="white" />
                <Text
                  flex="1"
                  px="2"
                  fontSize="xl"
                  color="white"
                  fontWeight={"bold"}
                >
                  Bookmarked
                </Text>
                <ChevronRightIcon size="sm" color="white" />
              </HStack>
            </TouchableOpacity>

            <TouchableOpacity>
              <HStack p="5" pb="3">
                <Fontisto name="plane-ticket" size={24} color="white" />
                <Text
                  flex="1"
                  px="2"
                  fontSize="xl"
                  color="white"
                  fontWeight={"bold"}
                >
                  Trips History
                </Text>
                <ChevronRightIcon size="sm" color="white" />
              </HStack>
            </TouchableOpacity>

            <TouchableOpacity>
              <HStack p="5" pb="3">
                <AntDesign name="setting" size={24} color="white" />
                <Text
                  flex="1"
                  px="2"
                  fontSize="xl"
                  color="white"
                  fontWeight={"bold"}
                >
                  Settings
                </Text>
                <ChevronRightIcon size="sm" color="white" />
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => nav.navigate("SignInScreen")}>
              <HStack p="5" pb="3">
                <MaterialCommunityIcons
                  name="logout-variant"
                  size={24}
                  color="white"
                />
                <Text
                  flex="1"
                  px="2"
                  fontSize="xl"
                  color="white"
                  fontWeight={"bold"}
                >
                  Log out
                </Text>
                <ChevronRightIcon size="sm" color="white" />
              </HStack>
            </TouchableOpacity>
            <Box></Box>
          </VStack>
        </BlurView>
      </Box>
    </Box>
  );
};

export default ProfileScreen;
