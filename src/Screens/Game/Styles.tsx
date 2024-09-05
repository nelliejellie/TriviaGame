import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    paddingHorizontal: 20,
  },
  counterContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 40,
    alignItems: "center",
  },
  questionContainer: {
    borderWidth: 4,
    width: "100%",
    height: 182,
    borderColor: "#08b4e4",
    marginTop: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
