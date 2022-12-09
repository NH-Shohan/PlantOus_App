import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    FlatList,
    Image,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from "react-native";
import { color } from "../../color";
import { plants } from "../../Data/plants";
import { styles } from "../../styles";

export default function Home({ navigation }) {
  const categorys = ["PPOPULAR", "ORGANIC", "INDOOR", "SYTHETIC"];
  const [isActive, setIsActive] = useState(false);

  const renderPlants = ({ item }) => {
    const images = item.image;
    return (
      <Pressable
        onPress={() =>
          navigation.navigate("Product", {
            itemName: item.name,
            itemImage: images,
            rating: item.rating,
            reviews: item.reviews,
            price: item.price,
            description: item.desc,
          })
        }
        style={{
          backgroundColor: color.light,
          margin: 5,
          borderRadius: 10,
          padding: 15,
          width: 180,
          shadowColor: color.green,
          elevation: 4,
          zIndex: 0,
        }}
      >
        <View
          style={{
            flex: 100,
            flexDirection: "row",
            justifyContent: "flex-end",
            position: "absolute",
            zIndex: 1,
            right: 7,
            top: 7,
          }}
        >
          <View
            style={{
              backgroundColor: "#d9d9d9",
              justifyContent: "center",
              alignItems: "center",
              width: 30,
              aspectRatio: 1,
              borderRadius: 50,
              marginBottom: 7,
              position: "relative",
            }}
          >
            <MaterialIcons name="favorite" size={18} color="black" />
          </View>
        </View>
        <Image
          source={{ uri: images }}
          style={{ width: "100%", height: 150, borderRadius: 7 }}
        />
        <Text style={{ fontSize: 18, fontWeight: "600" }}>{item.name}</Text>
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            name="star"
            size={14}
            style={{ color: "#ddcc00" }}
            color="black"
          />
          <Text style={{ color: color.gray, marginRight: 5, marginLeft: 3 }}>
            {item.rating}
          </Text>
          <Text style={{ color: color.gray }}>({item.reviews} Reviews)</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 100,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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
            {item.price}
          </Text>

          <View
            style={{
              backgroundColor: color.green,
              justifyContent: "center",
              alignItems: "center",
              width: 32,
              aspectRatio: 1,
              borderRadius: 5,
              color: color.white,
            }}
          >
            <Entypo name="plus" size={24} color="white" />
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={styles.header}>Welcome</Text>
          <Text style={styles.headerLogoName}>PlantOus</Text>
        </View>
        <View
          style={{
            justifyContent: "flex-start",
            marginTop: 10,
            marginRight: 10,
          }}
        >
          <AntDesign name="shoppingcart" size={30} color="black" />
        </View>
      </View>

      <View style={styles.searchSection}>
        <View style={styles.input}>
          <Ionicons style={styles.inputIcon} name="search" size={22} />
          <TextInput
            style={styles.inputText}
            placeholder="Search"
            keyboardType="default"
          />
        </View>
        <View style={styles.filterSection}>
          <Ionicons name="filter" size={24} color="color.green" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {categorys.map((category, index) => (
          <TouchableHighlight
            underlayColor={color.lightGreen}
            key={index}
            onPress={() => setIsActive(index)}
            style={{
              backgroundColor:
                isActive == index ? color.lightGreen : color.light,
              borderColor: isActive == index ? color.green : color.gray,
              alignContent: "center",
              paddingHorizontal: 12,
              paddingVertical: 7,
              borderRadius: 50,
              marginBottom: 15,
              borderWidth: 1.5,
              elevation: 3,
            }}
          >
            <View key={index}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  color: isActive == index ? color.green : color.gray,
                }}
              >
                {category}
              </Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>

      <ScrollView
        alwaysBounce={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          contentContainerStyle={styles.content}
          style={styles.flatlist}
          data={plants}
          renderItem={renderPlants}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </ScrollView>
    </View>
  );
}
