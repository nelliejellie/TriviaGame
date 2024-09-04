import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";
import images from "@/Assets/Images/Index";
import React from "react";
import StackNavigator from "@/Navigation/StackNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={images.backGround} style={styles.image}>
        <StackNavigator />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
