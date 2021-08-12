import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Card from "../shares/card";

export default function ReviewDetails({ route, navigation }) {
  const { title, body, rating } = route.params;
  const ratingIcons = () => {
    let images = [];
    for (let i = 0; i < rating; i++) {
      let heart = [];
      heart.push(<Image key={i} source={require("../assets/rating-1.png")} />);
      images.push(heart);
    }
    return images;
  };

  return (
    <View style={[globalStyles.container, styles.view]}>
      <Card>
        <Text style={[globalStyles.title, { paddingBottom: 10 }]}>{title}</Text>
        <Text style={[globalStyles.title, { paddingBottom: 10 }]}>{body}</Text>
        <View style={styles.ratingView}>
          <Text style={globalStyles.title}>GameZone rating: </Text>
          <View style={styles.rating}>{ratingIcons()}</View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 20,
  },
  ratingView: {
    borderColor: "#ddd",
    borderTopWidth: 1,
    marginTop: 5,
    paddingTop: 10,
  },
  rating: {
    flexDirection: "row",
    paddingTop: 5,
  },
});
