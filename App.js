import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Image, NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import BookingScreen from "./screens/BookingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import {
  useFonts,
  Inter_900Black,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import EditProfileScreen from "./screens/EditProfileScreen";
import Onboard from "./screens/Onboard";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import Homepage from "./screens/Homepage";
import SelectYourFlightScreen from "./screens/SelectYourFlightScreen";
import HomePageRoute from "./HomePageRoute";
import BoardingPass from "./screens/BoardingPass";
const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  const config = {
    dependencies: {
      "linear-gradient": LinearGradient,
    },
  };
  return (
    <NavigationContainer>
      <NativeBaseProvider config={config}>
        <Stack.Navigator
          initialRouteName="Onboard"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen component={BookingScreen} name="BookingScreen" />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen
            name="EditProfileScreen"
            component={EditProfileScreen}
          />
          <Stack.Screen name="Onboard" component={Onboard} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="HomePageRoute" component={HomePageRoute} />
          <Stack.Screen name="BoardingPass" component={BoardingPass} />
          <Stack.Screen
            name="SelectYourFlightScreen"
            component={SelectYourFlightScreen}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
