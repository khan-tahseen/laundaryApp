import React from "react";
import { View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1592502712785-9cca412cac87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80",
    "https://images.unsplash.com/photo-1611090925566-b1fc31065f63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    "https://plus.unsplash.com/premium_photo-1664443944751-fe44a3ec3924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
  ];

  return (
    <View style={{ marginVertical: 8 }}>
      <SliderBox
        images={images}
        autoplay
        circleLoop
        dotColor="orangered"
        inactiveDotColor="#90A4AE"
        onCurrentImagePressed={(index) =>
          console.warn(`image ${index} pressed`)
        }
        ImageComponentStyle={{
          borderRadius: 8,
          width: "95%",
        }}
      />
    </View>
  );
};

export default Carousel;
