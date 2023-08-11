import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./pickupScreen.style";
import { TIMES } from "../constants/pickupScreenData";

const PickupScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
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
      <ScrollView key={Math.random()} horizontal showsHorizontalScrollIndicator={false}>
        {TIMES.map((item, index) => (
          <TouchableOpacity style={styles.selectTime}>
            <Text>{item.time}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default PickupScreen;
