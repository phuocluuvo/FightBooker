import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList, Box, Center, Avatar } from "native-base";

const Item = ({ item }) => (
  <Box
    key={item._id}
    shadow="2"
    w="full"
    rounded="lg"
    flexDirection="row"
    justifyContent="space-between"
    mb={1}
    bg="white:alpha.30"
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
      <Box _text={{ color: "dark:alpha.60" }}>
        <Text style={{ fontSize: 20 }}>Sufer Quiwe</Text>
        Jhon Wdsaw
      </Box>
    </Center>

    <Center>
      <Center _text={{ color: "dark:alpha.60" }}>Mon 12 , 4pm</Center>
    </Center>
  </Box>
);

const data = [{}, {}];

export default function ThirdRoute() {
  return <FlatList data={data} renderItem={Item}></FlatList>;
}
