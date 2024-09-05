import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    paddingHorizontal: 20,
  },
  resultText: {
    marginTop: 40,
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  questionContainer: {
    borderWidth: 4,
    width: "100%",
    height: 76,
    borderColor: "#08b4e4",
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  score: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  congratulationContainer: {
    borderWidth: 4,
    width: "100%",
    height: 256,
    borderColor: "#08b4e4",
    marginTop: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  button: {
    height: 63,
    width: "100%",
    backgroundColor: "#00cbf7",
    marginBottom: 40,
    borderRadius: 50,
    flexDirection: "column",
    justifyContent: "center",
    borderBottomWidth: 3,
    borderBottomColor: "#cb8645",
  },
});
