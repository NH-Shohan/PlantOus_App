import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { color } from "./color";

export default function App() {
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

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
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
});
