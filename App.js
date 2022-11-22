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
        <Stack.Navigator initialRouteName="BookingScreen">
          <Stack.Screen
            component={BookingScreen}
            name="BookingScreen"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditProfileScreen"
            component={EditProfileScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
