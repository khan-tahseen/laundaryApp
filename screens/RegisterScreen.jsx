import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import styles from "./registerScreen.style";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    if (email && password && phone) {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          console.log("user Credentials => ", userCredentials);
          // Create a new document in the users collection with their uid as id and add them to it
          const user = userCredentials._tokenResponse.email;
          const myUserUid = auth.currentUser.uid;

          setDoc(doc(db, "users", `${myUserUid}`), {
            email: user,
            phoneNumber: phone,
          });
        }
      );
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Register</Text>
        <Text style={{ fontSize: 16, fontWeight: 500 }}>
          Create a new account
        </Text>
      </View>

      <View style={{ marginTop: 50 }}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={24} color="black" />
          <TextInput
            placeholderTextColor={"gray"}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="abc@gmail.com"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="key" size={24} color="black" />
          <TextInput
            placeholderTextColor={"gray"}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="7fw5wrt"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="phone" size={24} color="black" />
          <TextInput
            keyboardType="number-pad"
            placeholderTextColor={"gray"}
            value={phone}
            onChangeText={(text) => setPhone(text)}
            placeholder="1243467656"
            style={styles.input}
          />
        </View>

        <TouchableOpacity
          onPress={handleRegister}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonTitle}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signUp}>Already have an account? Sing Ip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
