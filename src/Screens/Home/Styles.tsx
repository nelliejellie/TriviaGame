import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  topBackground: {
    backgroundColor: "#fff",
    height: 250,
    borderBottomRightRadius: 50,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    height: 200,
    width: "100%",
    marginRight: 200,
    justifyContent: "center",
  },
  firstLayer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  cleanerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    width: 50,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "white",
    height: 30,
  },
  rightSide: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 200,
  },
  whitemoney: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
  },
  HeaderText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 23,
    marginLeft: 10,
  },
  wave: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    gap: 5,
  },
  cardContainer: {
    backgroundColor: "#ffffff", // Card background color
    width: "90%",
    height: 246,
    alignSelf: "center",
    borderRadius: 10, // Rounded corners
    margin: 10, // Margin around the card
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow blur radius
    elevation: 5, // Elevation for Android
    marginTop: -70,
    zIndex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  questionContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },
  blueBottom: {
    backgroundColor: "#2364aa",
    height: "20%",
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
    alignContent: "center",
    alignItems: "center",
  },
  textOne: {
    fontSize: 20,
    color: "#2364aa",
  },
  textTwo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#2364aa",
  },
  textThree: {
    fontSize: 10,
  },
  joinGame: {
    backgroundColor: "white",
    padding: 5,
    color: "#2364aa",
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  gamersContainer: {
    flexDirection: "column",
    gap: 10,
  },
  lastContainer: {
    width: "90%",
    height: 140,
    alignSelf: "center",
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#2364aa",
    position: "static",
    borderRadius: 20,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  referContainer: {
    width: "60%",
    marginLeft: 10,
  },
});
