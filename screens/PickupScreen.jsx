import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import React, { useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
} from "react-native";
import styles from "./pickupScreen.style";
import { DELIVERY_TIME, TIMES } from "../constants/pickupScreenData";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const PickupScreen = () => {
    const navigation = useNavigation();
    const cart = useSelector((state) => state.cart.cartItems);
    const totalPrice = cart
        .map((item) => item.quantity * item.price)
        .reduce((curr, prev) => curr + prev, 0);

    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState([]);
    const [delivery, setDelivery] = useState([]);

    const getTimeStyle = (item) => {
        return [
            styles.selectTime,
            {
                borderColor: selectedTime.includes(item.time) ? "red" : "gray",
            },
        ];
    };

    const getDeliveryStyle = (item) => {
        return [
            styles.selectTime,
            {
                borderColor: delivery.includes(item.name) ? "red" : "gray",
            },
        ];
    };

    const proceedToCart = () => {
        if (!selectedDate || !selectedTime || !delivery) {
            Alert.alert("Empty or Invalid", "Please select all the fields", [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
            ]);
        }
        if (selectedDate && selectedTime && delivery) {
            navigation.replace("Cart");
        }
    };

    return (
        <>
            <SafeAreaView style={{ marginHorizontal: 8 }}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    Enter Your Address
                </Text>
                <TextInput style={styles.addressInput} />
                <Text style={styles.title}>Pick Up Date</Text>
                <HorizontalDatepicker
                    mode="gregorian"
                    startDate={new Date("2020-08-20")}
                    endDate={new Date("2020-08-31")}
                    initialSelectedDate={new Date("2020-08-22")}
                    onSelectedDateChange={(date) => setSelectedDate(date)}
                    selectedItemWidth={170}
                    unselectedItemWidth={38}
                    itemHeight={38}
                    itemRadius={10}
                />

                <Text style={styles.title}>Select time</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {TIMES.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setSelectedTime(item.time)}
                            style={getTimeStyle(item)}
                        >
                            <Text>{item.time}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <Text style={styles.title}>Delivery Date</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {DELIVERY_TIME.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setDelivery(item.name)}
                            style={getDeliveryStyle(item)}
                        >
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </SafeAreaView>

            {totalPrice !== 0 ? (
                <TouchableOpacity onPress={proceedToCart} style={styles.proceedButton}>
                    <View>
                        <Text style={styles.totalItemAndPrice}>
                            {cart.length} items | $ {totalPrice}
                        </Text>
                        <Text style={{ fontSize: 13, color: "white" }}>
                            Extra charges might apply
                        </Text>
                    </View>
                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
                        Proceed to Cart
                    </Text>
                </TouchableOpacity>
            ) : null}
        </>
    );
};
export default PickupScreen;
