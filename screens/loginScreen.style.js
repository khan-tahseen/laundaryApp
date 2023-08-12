import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 8,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#662d91",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  input: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    width: 300,
    padding: 4,
    marginLeft: 8,
  },
  buttonContainer: {
    backgroundColor: "#1D6FC0",
    marginTop: 50,
    borderRadius: 8,
  },
  buttonTitle: {
    padding: 16,
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  signUp: {
    marginTop: 16,
    textAlign: "center",
    color: "gray",
    fontSize: 15,
    fontWeight: 500,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 8,
  },
});