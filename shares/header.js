import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, headerTitle }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View>
      <TouchableOpacity onPress={openMenu} style={styles.menu}>
        <MaterialIcons name="menu" size={28} />
      </TouchableOpacity>
      <View style={styles.headerView}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.logo}
        />
        <Text style={styles.headerText}>{headerTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    zIndex: 1,
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 22,
    height: 22,
    resizeMode: "stretch",
    marginRight: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    textAlign: "center",
  },
});
