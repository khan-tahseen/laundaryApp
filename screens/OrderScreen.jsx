import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

const OrderScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 80 }}>🎉</Text>
      <Text>Order has been Places Successfully😃</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default OrderScreen;
