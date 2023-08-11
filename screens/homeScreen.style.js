import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  locationAndPic: {
    padding: 8,
    flexDirection: "row",
  },
  homeText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 24,
  },
  inputAndIconStyle: {
    padding: 8,
    margin: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#C0C0C0",
  },
  proceedButton: {
    padding: 8,
    backgroundColor: "#088F8F",
    marginHorizontal: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalItemAndPrice: {
    fontSize: 17,
    color: "white",
    fontWeight: "500",
    marginBottom: 4,
  },
});
