import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shares/header";

const Stack = createStackNavigator();

export default AboutStack = ({navigation}) => {
  return (
    <Stack.Navigator
      headerMode="screen"
      //Default screen options
      screenOptions={{
        headerStyle: { backgroundColor: "silver" },
        headerBackground: () => (
          <Image
            source={require("../assets/game_bg.png")}
            style={styles.bgImage}
          />
        ),
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{ headerTitle: () => <Header navigation={navigation} headerTitle={'About GameZone'} /> }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    resizeMode:'stretch',
    height: '100%',
    width: Dimensions.get('screen').width
  }
})
