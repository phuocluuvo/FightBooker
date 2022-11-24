import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import React from "react";

const Splash = () => {
  return (
    <SafeAreaView className=" bg-blue-700 flex-1 justify-center items-center">
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
        blurRadius={170}
      ></ImageBackground>
      <Text className="text-white text-[35px] font-bold">Flight Booker.</Text>
    </SafeAreaView>
  );
};

export default Splash;
