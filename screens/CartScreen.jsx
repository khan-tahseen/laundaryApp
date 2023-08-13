import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./cartScreen.style";
import { useDispatch, useSelector } from "react-redux";
import { cleanCart, decrementQuantity, incrementQuantity } from "../CartReducer";
import { decrementQty, incrementQty } from "../ProductReducer";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const CartScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const userUid = auth.currentUser.uid;
  const cart = useSelector((state) => state.cart.cartItems);
  const totalPrice = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const dispatch = useDispatch();

  const handleOrder = async () => {
    console.log("order placed");
    // navigate to order screen with the items in the cart as props and clear it out of redux store after placing an order
    navigation.navigate('Order');
    dispatch(cleanCart());
    await setDoc(doc, (db, 'users', `${userUid}`), {
      orders: [...cart],
      pickUpDetails: route.params
    }, {
      merge: true
    })
  }

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
      <ScrollView style={styles.cartItems}>
        {cart.map((item, index) => (
          <View
            key={index}
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: 500 }}>{item.name}</Text>
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

        <Text style={styles.billingText}>Billing Details</Text>
        <View>
          <View style={[styles.deliveryFee, { marginVertical: 0 }]}>
            <Text style={styles.detailsText}>Item Total</Text>
            <Text style={styles.detailsText}>${totalPrice}</Text>
          </View>

          <View style={styles.deliveryFee}>
            <Text style={styles.detailsText}>Delivery Fee | 1.2KM</Text>
            <Text style={styles.free}>FREE</Text>
          </View>

          <Text style={styles.detailsText}>Free Delivery on Your order</Text>

          <View style={styles.singleLine} />

          <View style={styles.deliveryFee}>
            <Text style={styles.detailsText}>selected Date</Text>
            <Text style={styles.free}>{/* {route.params.pickUpDate} */}</Text>
          </View>

          <View style={[styles.deliveryFee, { marginVertical: 0 }]}>
            <Text style={styles.detailsText}>No Of Days</Text>
            <Text style={styles.free}>{route.params.no_Of_days}</Text>
          </View>

          <View style={styles.deliveryFee}>
            <Text style={styles.detailsText}>selected Pick Up Time</Text>
            <Text style={styles.free}>{route.params.selectedTime}</Text>
          </View>

          <View style={styles.singleLine} />

          <View style={styles.deliveryFee}>
            <Text style={styles.pay}>To Pay</Text>
            <Text style={styles.pay}>{totalPrice + 65}</Text>
          </View>
        </View>
      </ScrollView>
      {totalPrice !== 0 ? (
        <TouchableOpacity onPress={handleOrder} style={styles.proceedButton}>
          <View>
            <Text style={styles.totalItemAndPrice}>
              {cart.length} items | $ {totalPrice + 65}
            </Text>
            <Text style={{ fontSize: 13, color: "white" }}>
              Extra charges might apply
            </Text>
          </View>
          <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
            Place Order
          </Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

export default CartScreen;
