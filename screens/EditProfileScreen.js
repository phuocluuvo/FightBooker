import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Avatar,
  Box,
  Button,
  ChevronLeftIcon,
  HStack,
  IconButton,
  Input,
  InputGroup,
  Text,
  VStack,
} from "native-base";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
const EditProfileScreen = () => {
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
      safeAreaTop
    >
      <ImageBackground
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/875f/1388/6d724fed3957ccb6ecfd2ddf4bc3dc20?Expires=1670198400&Signature=AzT-YPHY-IfP6xM-wtqPUjqxN29Qzk997L~27zbkezqTVl25FgAnuc-08QlmiN3QlzlsD3y9jEg-qzSaBb83qp6a-FfDGsivpCIfInRbCIYSkefqTjWb099f9CRnT5gewl7cgGT2NIcv8DEOJVGpevM7BYsTiFGxq8L6G-MrXFFxL74a-TxufhyG3U5O7Lfp8GKw-sLJeYlVf17xVDSh12PJf1l65zqLintObghAatJcAlZd5hGda5wgUrJgbJHWgkhNKDI3UVSWh5aai-GV50xx0~wOTXkRUY45JqAz67krAkJRggZ2hz7Fv~UAXBoaTPJFYLmTm6KGwtRwgydsxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          opacity: 0.9,
          zIndex: 0,
        }}
        resizeMode="cover"
        blurRadius={110}
      ></ImageBackground>
      <StatusBar style="auto" />
      <Box flex={1} w="full" position={"relative"} zIndex="1">
        <HStack
          width="full"
          py="5"
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <BlurView style={{ borderRadius: 9999 }}>
            <IconButton
              onPress={() => nav.navigate("ProfileScreen")}
              icon={<ChevronLeftIcon size="lg" color={"white"} />}
            ></IconButton>
          </BlurView>
          <Button variant={"link"}>
            <Text
              style={{
                fontFamily: "Inter_900Black",
                fontSize: 25,
                lineHeight: 25,
                textAlign: "center",
              }}
              color={"white"}
            >
              Edit Profile
            </Text>
          </Button>

          <Text color={"darkBlue.500"} fontSize="xl">
            Done
          </Text>
        </HStack>
        <VStack alignItems={"center"} my="7">
          <Avatar
            size="2xl"
            source={{
              uri: "https://th.bing.com/th/id/R.fa80875ff296e70099950717d1efd03c?rik=mclEqGePnpFZQA&riu=http%3a%2f%2ffc00.deviantart.net%2ffs71%2ff%2f2011%2f342%2f3%2fa%2fthere_goes_that_weird_guy_with_the_mustache_by_angelak47-d4ihllt.jpg&ehk=lxXeQ4cy1sef0bv49hpgsIHHsByZy%2bc%2bZAS3ITaXfWw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
            }}
          ></Avatar>
          <Text fontSize="2xl" color={"white"}>
            Mustadermort
          </Text>
          <Text fontSize="xl" color={"darkBlue.500"}>
            Change Avatar
          </Text>
        </VStack>
        <VStack mx="5" space={2}>
          <Text fontSize="xl" fontWeight="bold" color="white">
            First Name
          </Text>
          <InputGroup>
            <BlurView style={{ width: "100%", borderRadius: 20 }}>
              <Input w="full" variant={"outline"} rounded="2xl" />
            </BlurView>
          </InputGroup>

          <Text fontSize="xl" fontWeight="bold" color="white">
            Last Name
          </Text>
          <InputGroup>
            <BlurView style={{ width: "100%", borderRadius: 20 }}>
              <Input w="full" variant={"outline"} rounded="2xl" />
            </BlurView>
          </InputGroup>

          <Text fontSize="xl" fontWeight="bold" color="white">
            Location
          </Text>
          <InputGroup>
            <BlurView style={{ width: "100%", borderRadius: 20 }}>
              <Input w="full" variant={"outline"} rounded="2xl" />
            </BlurView>
          </InputGroup>
          <Text fontSize="xl" fontWeight="bold" color="white">
            Mobile Number
          </Text>
          <InputGroup>
            <BlurView style={{ width: "100%", borderRadius: 20 }}>
              <Input
                InputLeftElement={<Text p="1">+88</Text>}
                w="full"
                variant={"outline"}
                rounded="2xl"
              />
            </BlurView>
          </InputGroup>
        </VStack>
      </Box>
    </Box>
  );
};

export default EditProfileScreen;
