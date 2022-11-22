import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function SignInScreen() {
  const nav = useNavigation();
  const [visible, setVisible] = useState(true);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#16181F",
        flex: 1,
        padding: 20,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => nav.goBack()}
          style={{
            backgroundColor: "#20232D",
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100,
          }}
        >
          <Ionicons name="chevron-back" size={23} color={"#fff"} />
        </TouchableOpacity>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 33,
            fontWeight: "500",
            marginTop: 50,
          }}
        >
          Sign in now{" "}
        </Text>
        <Text
          style={{
            color: "#7D848D",
            textAlign: "center",
            fontSize: 16,
            marginTop: 10,
          }}
        >
          Please sign in to continue our app
        </Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor={"#7D848D"}
          backgroundColor={"#20232D"}
          style={{
            color: "#fff",
            width: "100%",
            fontSize: 16,
            height: 50,
            padding: 10,
            borderRadius: 10,
            marginTop: 50,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            padding: 10,
            height: 50,
            borderRadius: 10,
            marginTop: 25,
            backgroundColor: "#20232D",
          }}
        >
          <TextInput
            style={{
              fontSize: 16,
              color: "#fff",
              width: "90%",
              maxWidth: "90%",
            }}
            placeholder="Password"
            placeholderTextColor={"#7D848D"}
            secureTextEntry={visible}
          />
          <TouchableOpacity
            style={{ width: "10%" }}
            onPress={() => {
              setVisible(!visible);
            }}
          >
            <Ionicons
              name={visible === false ? "eye-outline" : "eye-off-outline"}
              size={26}
              color={"#7D848D"}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            alignItems: "flex-end",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "#0D6EFD",
              fontSize: 15,
            }}
          >
            Forget Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => nav.navigate("HomePageRoute")}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0D6EFD",
            borderRadius: 10,
            padding: 15,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: "#7D848D",
              marginRight: 5,
              size: 15,
            }}
          >
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => nav.navigate("SignUpScreen")}>
            <Text
              style={{
                size: 15,
                color: "#0D6EFD",
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: "center",
            color: "#7D848D",
            marginTop: 20,
          }}
        >
          Or connect
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 80,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/facebook.png")}
              style={{
                width: 45,
                height: 45,
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/instagram.png")}
              style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginLeft: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/twitter.png")}
              style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginLeft: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
