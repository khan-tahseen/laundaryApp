import React from "react";
import { View, Pressable, Image, Text, TouchableOpacity } from "react-native";
import styles from "./dressItem.style";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity } from "../CartReducer";
import { decrementQty, incrementQty } from "../ProductReducer";

const DressItem = ({ item }) => {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(item));
    dispatch(incrementQty(item));
  };

  const decrementCount = () => {
    dispatch(decrementQuantity(item)); // cart
    dispatch(decrementQty(item)); // product
  };

  const incrementCount = () => {
    dispatch(incrementQuantity(item)); // cart
    dispatch(incrementQty(item)); // product
  };

  return (
    <View>
      <Pressable style={styles.cardContainer}>
        <View>
          <Image
            source={{ uri: item.image }}
            style={{ width: 70, height: 70 }}
          />
        </View>

        <View>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
        </View>

        {cart.some((c) => c.id === item.id) ? (
          <Pressable style={styles.buttonContainer}>
            <TouchableOpacity onPress={decrementCount} style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>

            <View>
              <Text style={styles.quantityStyle}>{item.quantity}</Text>
            </View>

            <TouchableOpacity onPress={incrementCount} style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </Pressable>
        ) : (
          <TouchableOpacity onPress={addItemToCart} style={{ width: 60 }}>
            <Text style={styles.buyButton}>Add</Text>
          </TouchableOpacity>
        )}
      </Pressable>
    </View>
  );
};

export default DressItem;
