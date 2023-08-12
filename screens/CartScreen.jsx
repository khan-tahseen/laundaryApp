import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./cartScreen.style";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../CartReducer";
import { decrementQty, incrementQty } from "../ProductReducer";

const CartScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View style={styles.headerStyle}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Text style={styles.headerTitle}>Your Bucket</Text>
      </View>
      <ScrollView>
        {cart.map((item, index) => (
          <View key={index} style={styles.cartItems}>
            <Text style={{ fontSize: 15, fontWeight: 400 }}>{item.name}</Text>
            <View
              style={{
                flexDirection: "row",
                padding: 4,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  dispatch(decrementQuantity(item)); // cart
                  dispatch(decrementQty(item)); // product
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>

              <View>
                <Text style={styles.quantityStyle}>{item.quantity}</Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  dispatch(incrementQuantity(item)); // cart
                  dispatch(incrementQty(item)); // product
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 14, marginTop: 4, fontWeight: "bold" }}>
              ${(item?.price * item.quantity).toFixed(2)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
