import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  iconContainer: {
    height: 15,
    width: 15,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  iconFocusedContainer: {
    backgroundColor: "#2a75bc",
    padding: 10,
    borderRadius: 50,
  },
  focusedContainer: {
    marginBottom: 20,
  },
  whiteLayer: {
    backgroundColor: "#f9f9f9",
    padding: 5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: "hidden",
    position: "relative",
    height: 50,
    zIndex: 0,
    marginTop: 10,
  },
});
