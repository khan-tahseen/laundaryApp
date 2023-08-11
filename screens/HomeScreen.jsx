import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./homeScreen.style";
import React, { useEffect, useState } from "react";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import DressItem from "../components/DressItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../ProductReducer";
import { useNavigation } from "@react-navigation/native";
import { PROFILE, SERVICES } from "../constants/homeScreenData";

const HomeScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cartItems);
  const totalPrice = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);

  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "location loading...!"
  );
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);

  useEffect(() => {
    // get location services status and display current address if enabled
    checkIfLocationEnabled();
    getCurrentUserLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    const enabled = await Location.hasServicesEnabledAsync();
    console.log(`enabled: ${JSON.stringify({ enabled })}`);
    if (!enabled) {
      alert("location is not enabled..!");
    } else {
      setLocationServicesEnabled(enabled);
    }
  };

  const getCurrentUserLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
    }

    const { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;
      const response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      // console.log("response of coordinates => ", response);

      for (let item of response) {
        const address = `${item.name} ${item.city} ${item.postalCode}`;
        setDisplayCurrentAddress(address);
      }
    }
  };

  const product = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product.length > 0) return;
    const fetchProducts = () => {
      SERVICES.map((service) => dispatch(getProducts(service)));
    };
    fetchProducts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* location and Profile */}
        <View style={styles.locationAndPic}>
          <MaterialIcons name="location-on" size={24} color="orangered" />
          <View>
            <Text style={styles.homeText}>Home</Text>
            <Text>{displayCurrentAddress}</Text>
          </View>

          <TouchableOpacity style={{ marginLeft: "auto" }}>
            <Image style={styles.profileIcon} source={{ uri: PROFILE }} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.inputAndIconStyle}>
          <TextInput placeholder="Search for item or More..." />
          <Feather name="search" size={24} color="orangered" />
        </View>

        {/* Image Carousel */}
        <Carousel />

        {/* Services data */}
        <Services />

        {/* Render all the data */}
        {product.map((item, index) => (
          <DressItem item={item} key={index} />
        ))}
      </ScrollView>

      {totalPrice !== 0 ? (
        <TouchableOpacity style={styles.proceedButton}>
          <View>
            <Text style={styles.totalItemAndPrice}>
              {cart.length} items | $ {totalPrice}
            </Text>
            <Text style={{ fontSize: 13, color: "white" }}>
              Extra charges might apply
            </Text>
          </View>
          <Text
            onPress={() => navigation.navigate("pickUp")}
            style={{ fontSize: 16, color: "white", fontWeight: "bold" }}
          >
            Proceed to pickup
          </Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

export default HomeScreen;
