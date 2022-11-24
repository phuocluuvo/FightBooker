import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList, Box, Center, Avatar } from "native-base";

const Item = ({ item }) => (
  <Box
    key={item._id}
    w="full"
    rounded="lg"
    flexDirection="row"
    justifyContent="space-between"
    mb={1}
    bg="white:alpha.20"
    p={4}
  >
    <Center flexDirection="row">
      <Avatar
        mr={2}
        size="lg"
        bg="green.500"
        source={{
          uri: "https://vuongquocanh.com/wp-content/uploads/2018/05/london-eye-800x534.jpg",
        }}
      ></Avatar>

      <Box _text={{ color: "white:alpha.60" }}>
        <Text style={{ fontSize: 20, color: "white" }}>Sufer Quiwe</Text>
        Jhon Wdsaw
      </Box>
    </Center>

    <Center>
      <Center _text={{ color: "white:alpha.60" }}>Mon 12 , 4pm</Center>
    </Center>
  </Box>
);

const data = [{}, {}];

export default function FirstRoute() {
  return <FlatList data={data} renderItem={Item}></FlatList>;
}
