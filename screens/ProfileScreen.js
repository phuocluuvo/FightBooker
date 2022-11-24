import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Avatar,
  Box,
  Button,
  Center,
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
import { ImageBackground, TouchableOpacity, View } from "react-native";
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
        source={require("../assets/6d724fed3957ccb6ecfd2ddf4bc3dc20.jpeg")}
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
        <Center>
          <View style={{ overflow: "hidden" }} className="w-[90%] rounded-3xl">
            <BlurView intensity={70}>
              <VStack px="5" space={3}>
                <TouchableOpacity>
                  <HStack p="3" mt={2}>
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
                  <HStack p="3">
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
                  <HStack p="3">
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
                  <HStack p="3">
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
                  <HStack p="3">
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
          </View>
        </Center>
      </Box>
    </Box>
  );
};

export default ProfileScreen;
