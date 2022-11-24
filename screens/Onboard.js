import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import axios from "axios";

// const data = [
//   {
//     id: 1,
//     img: "https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     text: "Life is short and the world is ",
//     text1: "wide",
//     textbutton: "Next",
//   },
//   {
//     id: 2,
//     img: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     text: "It's a big world out there go ",
//     text1: "explore",
//     textbutton: "Next",
//   },
//   {
//     id: 3,
//     img: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     text: "People don't take trips, trips take ",
//     text1: "people",
//     textbutton: "Get Started",
//   },
// ];
const SLIDER_WIDTH = Dimensions.get("window").width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const Onboard = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const isCarousel = React.useRef(null);
  const [index, setIndex] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://637f0143cfdbfd9a63bb6e29.mockapi.io/FightBooker/dataOnboard"
      )
      .then((data) => setData(data.data));
  }, []);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return loading ? (
    <SafeAreaView className="bg-blue-700 relative flex-1 justify-center items-center">
      <Text className="text-white text-[35px] font-bold">Flight Booker.</Text>
    </SafeAreaView>
  ) : (
    <SafeAreaView className="flex-1 bg-black items-center">
      <Carousel
        layout="stack"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        onSnapToItem={(index) => setIndex(index)}
        renderItem={({ item, index }) => {
          return (
            <View className="bg-black" key={index}>
              <View className=" h-[45%] w-[100%] items-center">
                <Image
                  source={{ uri: item.img }}
                  className="rounded-3xl"
                  style={styles.image}
                />
              </View>
              <View className="h-[60%] w-[100%] items-center  ">
                <Text className="text-[30px] font-bold ml-[10px] text-white text-center mt-8">
                  {item.text}
                  <Text className="text-orange-500">{item.text1}</Text>
                </Text>
                <Text className="p-3 font-bold text-[25px] mt-4 mx-3 text-center text-slate-500">
                  At Friends tours and travel. we customize reliable and
                  trutworthy educational tours to destinations all over the
                  world
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("SignInScreen");
                  }}
                  className=" mx-2 items-center justify-center rounded-2xl w-[350px] h-[50px] bg-blue-600"
                >
                  <Text style={styles.body}>{item.textbutton}</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        sliderWidth={500}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      ></Carousel>
      <View className="absolute bottom-[20]">
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 20,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 10,
            backgroundColor: "white",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        ></Pagination>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderRadius: 8,
    width: "100%",
    height: "100%",
    paddingBottom: 0,
    shadowColor: "#000",
    alignItems: "center",
  },
  image: {
    width: ITEM_WIDTH,
    height: 400,
  },
  header: {
    color: "#FFFF",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: "#FFF",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default Onboard;
