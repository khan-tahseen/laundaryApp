import React from "react";
import { View, ScrollView, Pressable, Image, Text } from "react-native";

const Services = () => {
  const service = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
      name: "Washing",
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
      name: "Laundry",
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
      name: "Wash & Iron",
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
      name: "Cleaning",
    },
  ];

  return (
    <View style={{ padding: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Services Available
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {service.map((item, index) => {
          return (
            <Pressable key={index} style={{ margin: 8, backgroundColor: 'white', padding: 16, borderRadius: 8 }}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 70, height: 70 }}
              />
              <Text style={{textAlign: 'center', marginTop: 4}}>{item.name}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Services;
