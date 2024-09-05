import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "./Styles";
import images from "@/Assets/Images/Index";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LineIcon, HappyIcon, AngryIcon } from "@/Assets/Icons";
import { useNavigation } from "@react-navigation/native";

const Score = ({ route }) => {
  const { score } = route.params;
  const { navigate } = useNavigation();
  return (
    <ImageBackground source={images.backGround} style={styles.image}>
      <Text style={styles.resultText}>Results</Text>
      <View style={styles.questionContainer}>
        <Text style={{ textAlign: "center" }}>Total Time Used: 01:00</Text>
        <View style={styles.scoreContainer}>
          <View style={[styles.score, {}]}>
            <Text>{score} Correct</Text>
            <Ionicons name="checkmark-circle-sharp" size={24} color="#00c449" />
          </View>
          <LineIcon />
          <View style={styles.score}>
            <Text>{10 - score} Incorrect</Text>
            <MaterialIcons name="cancel" size={24} color="#f9474b" />
          </View>
        </View>
      </View>
      <View style={styles.congratulationContainer}>
        {score === 10 && <HappyIcon />}
        {score !== 10 && <AngryIcon />}
        <Text>Better luck next time</Text>
        {score === 10 && <Text>Congratulations You won 🎉</Text>}
        {score !== 10 && (
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Sorry You Didn't win
          </Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigate("Home");
          }}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 15 }}
          >
            Go Home
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Score;
