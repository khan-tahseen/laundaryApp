import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "./loginScreen.style";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser != null && !authUser?.isAnonymous) {
        navigation.navigate("Home");
      } else {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = () => {
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredentails) => {
          console.log("User credentials", userCredentails);
          const user = userCredentails.user;
          console.log("user Details => ", user);
        }
      );
    } else {
      alert("Please enter all the details");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {!loading ? (
        <KeyboardAvoidingView>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Sign In</Text>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>
              Sign in to your account
            </Text>
          </View>

          <View style={{ marginTop: 50 }}>
            <View style={styles.inputContainer}>
              <MaterialIcons name="email" size={24} color="black" />
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="abc@gmail.com"
                style={styles.input}
              />
            </View>

            <View style={styles.inputContainer}>
              <Ionicons name="key" size={24} color="black" />
              <TextInput
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="7fw5wrt"
                style={styles.input}
              />
            </View>

            <TouchableOpacity
              onPress={handleLogin}
              style={styles.buttonContainer}
            >
              <Text style={styles.buttonTitle}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.signUp}>Don't have an account? Sing Up</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator color="#088F8F" size="large" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;
