import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
//comment because move to drawer navigator
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shares/header";

const Stack = createStackNavigator();

export default AppNavigator = ({ navigation }) => {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
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
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} headerTitle={"GameZone"} />
          ),
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: "Review Details",
        }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    resizeMode:'stretch',
    height: '100%',
    width: Dimensions.get('screen').width
  }
})
