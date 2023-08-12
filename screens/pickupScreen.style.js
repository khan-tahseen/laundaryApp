import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {},
  addressInput: {
    borderWidth: 1,
    borderColor: "gray",
    height: 50,
    borderRadius: 8,
    marginVertical: 4,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 8,
  },
  selectTime: {
    padding: 8,
    margin: 8,
    borderWidth: 1,
    borderRadius: 8,
  },
  proceedButton: {
    padding: 8,
    backgroundColor: "#088F8F",
    marginHorizontal: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 'auto',
    marginBottom: 32
  },
  totalItemAndPrice: {
    fontSize: 17,
    color: "white",
    fontWeight: "500",
    marginBottom: 4,
  },
});