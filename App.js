import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import BoardingPass from "./screens/BoardingPass";
import Notifycation from "./screens/Notifycation";

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};
export default function App() {
  return (
    <NativeBaseProvider config={config}>
      {/* <Notifycation></Notifycation> */}
      <BoardingPass></BoardingPass>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
