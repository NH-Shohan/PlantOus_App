import { StyleSheet } from "react-native";
import { color } from "./color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: color.white,
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

  countIcon: {
    backgroundColor: color.green,
    borderRadius: 50,
    marginHorizontal: 5,
    padding: 3,
  },
  productButtonContainer: {
    backgroundColor: color.green,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    marginTop: 15,
  },
  productButtonText: {
    fontSize: 20,
    fontWeight: "600",
    color: color.white,
  },
});
