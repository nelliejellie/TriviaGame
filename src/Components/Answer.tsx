import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface AnswerProps {
  option: string;
  answerOption: string;
  correct: "correct" | "wrong" | "not selected";
  onPress: () => void;
  disabled: boolean;
}

const Answer = ({
  option,
  answerOption,
  correct,
  onPress,
  disabled,
}: AnswerProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor:
            correct === "correct"
              ? "#009028"
              : correct === "wrong"
              ? "#c30012"
              : correct === "not selected"
              ? "white"
              : "transparent",
        },
      ]}
    >
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 17, marginLeft: 30 }}>{option}.</Text>
        <Text style={{ marginLeft: 20, fontSize: 17 }}>{answerOption}</Text>
      </View>
      {correct === "correct" && (
        <View style={{ marginLeft: 70 }}>
          <Ionicons name="checkmark-circle-sharp" size={24} color="#00c449" />
        </View>
      )}
      {correct === "wrong" && (
        <View style={{ marginLeft: 70 }}>
          <MaterialIcons name="cancel" size={24} color="#ffcbd2" />
        </View>
      )}
      {correct === "not selected" && (
        <View style={{ marginLeft: 70 }}>
          {/* //<Ionicons name="checkmark-circle-sharp" size={24} color="#00c449" /> */}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Answer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 66,
    borderColor: "#08b4e4",
    marginTop: 20,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    borderWidth: 2,
  },
  textContainer: {
    flexDirection: "row",
  },
});
