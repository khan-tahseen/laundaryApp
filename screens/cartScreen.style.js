import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  headerTitle: {
    marginLeft: 8,
    fontSize: 18,
  },
  cartItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderColor: "gray",
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
    margin: 8,
  },
  buttonText: {
    fontSize: 20,
    color: "#088F8F",
    paddingHorizontal: 4,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: "#BEBEBE",
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityStyle: {
    fontSize: 18,
    color: "#088F8F",
    marginHorizontal: 8,
    fontWeight: "bold",
  },
});
