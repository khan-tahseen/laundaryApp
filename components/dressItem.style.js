import { StyleSheet } from "react-native";

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 16,
  },
  buyButton: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    textAlign: "center",
    padding: 4,
    color: "#088F8F",
    fontWeight: "bold",
    fontSize: 16,
  },
  itemName: {
    width: 70,
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 4,
  },
  itemPrice: {
    width: 60,
    color: "gray",
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 4,
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
  buttonText: {
    fontSize: 20,
    color: "#088F8F",
    paddingHorizontal: 4,
    fontWeight: "bold",
    textAlign: "center",
  },
  quantityStyle: {
    fontSize: 18,
    color: "#088F8F",
    marginHorizontal: 8,
    fontWeight: "bold",
  },
});
