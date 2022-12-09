import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, Text, TouchableHighlight, View } from "react-native";
import { color } from "../../color";
import { styles } from "../../styles";

export default function ProductDetails({ route, navigation }) {
  const { itemName, itemImage, rating, reviews, price, description } =
    route.params;
  return (
    <View
      style={{ marginTop: 40, height: "100%", backgroundColor: color.white }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          marginHorizontal: 20,
        }}
      >
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Ionicons name="arrow-back" size={34} color="black" />
        </Pressable>
        <View
          style={{
            backgroundColor: color.light,
            borderRadius: 50,
            padding: 7,
          }}
        >
          <MaterialIcons name="favorite" size={30} color="black" />
        </View>
      </View>

      <Image
        source={{ uri: itemImage }}
        style={{
          height: "45%",
          borderRadius: 7,
          marginHorizontal: 20,
          marginTop: 5,
        }}
      />

      <View
        style={{
          backgroundColor: color.light,
          width: "100%",
          height: "100%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          padding: 30,
          borderColor: color.green,
          borderWidth: 1
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <AntDesign
              name="star"
              size={14}
              style={{ color: "#ddcc00" }}
              color="black"
            />
            <Text style={{ color: color.gray, marginRight: 5, marginLeft: 3 }}>
              {rating}
            </Text>
            <Text style={{ color: color.gray }}>({reviews} Reviews)</Text>
          </View>

          <Text
            style={{
              color: color.black,
              fontWeight: "600",
              fontSize: 30,
              marginTop: 5,
              backgroundColor: color.white,
              paddingHorizontal: 10,
              borderRadius: 7,
            }}
          >
            <Text style={{ color: color.green, marginRight: 15 }}>$</Text>
            {price}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "600", color: color.green }}>
            {itemName}
          </Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View style={styles.countIcon}>
              <AntDesign name="minus" size={20} color={color.white} />
            </View>

            <View
              style={{
                backgroundColor: color.white,
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 30,
                borderRadius: 50,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "700" }}>1</Text>
            </View>

            <View style={styles.countIcon}>
              <AntDesign name="plus" size={20} color={color.white} />
            </View>
          </View>
        </View>

        <Text style={{ fontSize: 26, fontWeight: "600", marginTop: 15 }}>
          About
        </Text>
        <Text style={{ fontSize: 18, textAlign: "justify", marginVertical: 5 }}>
          {description}
        </Text>

        <TouchableHighlight
          underlayColor={color.lightGreen}
          style={styles.productButtonContainer}
        >
          <Text style={styles.productButtonText}>ADD TO CART</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
