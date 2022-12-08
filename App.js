import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  FlatList, Image, ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { color } from "./color";
import { plants } from "./Data/plants";

export default function App() {
  const categorys = ["PPOPULAR", "ORGANIC", "INDOOR", "SYTHETIC"];

  const renderPlants = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: color.light,
          margin: 5,
          borderRadius: 10,
          padding: 15,
          width: 180,
        }}
      >
        <Image source={{ uri: item.image }} />
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
        <Text
          style={{
            color: color.black,
            fontWeight: "600",
            fontSize: 26,
            marginTop: 5,
          }}
        >
          <Text style={{ color: color.green, marginRight: 15 }}>$</Text>
          {item.price}
        </Text>
      </View>
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
          justifyContent: "space-between",
          marginHorizontal: 5,
        }}
      >
        {categorys.map((category, index) => (
          <Text
            key={index}
            style={{
              backgroundColor: color.light,
              padding: 10,
              borderRadius: 50,
              fontSize: 15,
              fontWeight: "500",
              marginBottom: 15,
            }}
          >
            {category}
          </Text>
        ))}
      </View>

      <ScrollView
        alwaysBounce={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 25,
  },
  headerLogoName: {
    fontSize: 50,
    color: color.green,
    fontWeight: "600",
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 26,
  },
  input: {
    color: color.black,
    backgroundColor: color.light,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 7,
    flex: 80,
    height: 50,
    width: "100%",
  },
  inputIcon: {
    marginHorizontal: 10,
    color: color.gray,
  },
  inputText: {
    fontSize: 16,
    height: 50,
    flex: 100,
  },
  filterSection: {
    width: 50,
    height: 50,
    backgroundColor: color.lightGreen,
    color: color.green,
    flex: 14,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  flatlist: {
    flexDirection: "row",
    flex: 1,
  },
  content: {
    width: "100%",
    alignItems: "center",
  },
});
