import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>About</Text>
    </View>
  );
}

