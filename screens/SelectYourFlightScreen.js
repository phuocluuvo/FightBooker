import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Ticket from "../components/Ticket";
import { Box, Text } from "native-base";
import axios from "axios";
// const DATA = [
//   {
//     timeStart: "7:05 AM",
//     timeEnd: "8:05 PM",
//     timing: "13:00",
//     start: "YUL",
//     end: "NRT",
//     nameAir: "Air Canada",
//     price: "$1.400",
//   },
//   {
//     timeStart: "9:05 AM",
//     timeEnd: "4:55 PM",
//     timing: "18:55",
//     start: "YUL",
//     end: "NRT",
//     nameAir: "Scoot",
//     price: "$1.300",
//   },
//   {
//     timeStart: "10:00 AM",
//     timeEnd: "11:00 PM",
//     timing: "13:00",
//     start: "YUL",
//     end: "NRT",
//     nameAir: "Air Canada",
//     price: "$1.400",
//   },
//   {
//     timeStart: "7:05 AM",
//     timeEnd: "8:05 PM",
//     timing: "13:00",
//     start: "YUL",
//     end: "NRT",
//     nameAir: "Air Canada",
//     price: "$1.400",
//   },
// ];
export default function SelectYourFlightScreen() {
  const [DATA, setDATA] = useState();
  useEffect(() => {
    axios
      .get("https://637f0143cfdbfd9a63bb6e29.mockapi.io/FightBooker/dataSelectYourFlightScreen")
      .then((data) => setDATA(data.data));

  }, []);
  const fAnim = useRef(new Animated.Value(65)).current
  const Move = () => {
    Animated.loop(
      Animated.timing(
        fAnim,
        {
          toValue: windowWidth-105,
          duration: 4000,
          useNativeDriver: false,
        }
      )
    ).start();
  }
  useEffect(() => {
    Move()

  }, [])
  const nav = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#8B93DB",
        flex: 1,
      }}
    >
      <StatusBar />
      {/* <LinearGradient
        colors={["#FCFCFA", "#8B93DB"]}
        style={{
          position: "absolute",

          bottom: (windowHeight / 4) * 3,
          width: windowWidth,
          height: windowHeight - (windowHeight / 4) * 3 + 40,
        }}
      ></LinearGradient> */}
      <ImageBackground
        source={require("../assets/richard.png")}
        style={{
          width: windowWidth,
          height: (windowHeight * 3) / 4,
          bottom: 0,
          position: "absolute",
        }}
        blurRadius={15}
      />
      <Image
        source={require("../assets/nasa.png")}
        style={{
          bottom: (windowHeight / 4) * 3,
          width: windowWidth,
          height: windowHeight - (windowHeight / 4) * 3 + 40,
          position: "absolute",
        }}
      />

      <View
        style={{
          width: windowWidth,
          height: windowHeight - (windowHeight / 4) * 3,
          bottom: (windowHeight / 4) * 3,
          position: "absolute",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <Box
          style={{
            position: "absolute",
            width: windowWidth - 100,
            height: 80,
            top: 150,
            left: 40,
            borderTopWidth: 2,
            borderStyle: "dashed",
            borderColor: "rgba(0, 0, 0, 0.3)",
          }}
        ></Box>
        <Animated.View
          style={{
            position: "absolute",
            top: 135,
            marginLeft: fAnim,
          }}>
          <Ionicons
            name="airplane"
            size={30}
          />
        </Animated.View>
        <View
          style={{
            backgroundColor: "#C3C3EE",
            width: 44,
            height: 44,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100,
            position: "absolute",
            top: 135,
            left: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Inter_900Black",
            }}
          >
            YUL
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#C3C3EE",
            width: 44,
            height: 44,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100,
            position: "absolute",
            top: 135,
            right: 30,
          }}
        >
          <Text
            style={{
              fontFamily: "Inter_900Black",
            }}
          >
            NRT
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          height: 40,
        }}
      >
        <TouchableOpacity onPress={() => nav.goBack()}>
          <Ionicons name="chevron-back" size={25} color={"#000"} />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontFamily: "Inter_900Black",
            flex: 1,
          }}
        >
          Select Your Flight
        </Text>
      </View>

      <View
        style={{
          position: "absolute",
          width: windowWidth,
          height: (windowHeight / 4) * 3,
          left: 0,
          bottom: 0,
          borderTopWidth: 1,
          borderTopColor: "rgba(255, 255, 255, 0.4)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              width: 150,
              padding: 10,
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <Ionicons name="calendar-outline" size={25} />
            <Text>Dec 16th 2022</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              width: 150,
              padding: 10,
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <Ionicons name="person" size={25} />
            <Text>1 passenger</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <LinearGradient
            colors={["#81C6ED", "#346AD2"]}
            style={{
              marginTop: 20,
              borderRadius: 20,
              padding: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Inter_900Black",
                fontSize: 16,
              }}
            >
              Economy
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <FlatList
          style={{
            marginTop: 20,
          }}
          data={DATA}
          renderItem={({ item }) => (
            <Ticket item={item} handler={() => nav.navigate("BoardingPass")} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
