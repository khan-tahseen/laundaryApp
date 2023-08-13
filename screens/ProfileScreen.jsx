import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";

const ProfileScreen = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("user signed out");
        navigation.replace("Login");
      })
      .catch((err) => {
        alert("Error signing out: ", err);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Welcome 🤠 {user.email}</Text>
      </View>

      <TouchableOpacity onPress={handleSignout} style={{ marginTop: 16 }}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
