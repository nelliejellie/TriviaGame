import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Answer = ({
  option,
  answerOption,
  correct,
  Answer,
  onPress,
  disabled,
}) => {
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
      <Text style={{ fontSize: 17 }}>{option}.</Text>
      <Text style={{ marginLeft: 20, fontSize: 17 }}>{answerOption}</Text>
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
    paddingLeft: 20,
    borderWidth: 2,
  },
});
