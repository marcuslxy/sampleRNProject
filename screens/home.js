import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Card from "../shares/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation: { navigate } }) {
  const [reviews, setReviews] = useState([
    {
      title: "Game A",
      body: "The sample body text for game A",
      rating: 5,
      key: "1",
    },
    {
      title: "Game B",
      body: "The sample body text for game B",
      rating: 3,
      key: "2",
    },
    {
      title: "Game C",
      body: "The sample body text for game C",
      rating: 4,
      key: "3",
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews]
    });
    console.log(review);
    setModalVisible(false);
  }
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalVisible} animationType="slide">
        <View style={[styles.modalContent, { padding: 20 }]}>
          <TouchableOpacity
            style={{ paddingHorizontal: 20, paddingVertical: 20 }}
            onPress={() => setModalVisible(false)}
          >
            <MaterialIcons name="close" size={28} style={{...styles.modalToggle, ...styles.modalClose}} />
          </TouchableOpacity>
          <ReviewForm addReview={addReview} />
        </View>
      </Modal>
      <TouchableOpacity
        style={{ paddingHorizontal: 20, paddingVertical: 20 }}
        onPress={() => setModalVisible(true)}
      >
        <MaterialIcons name="add" size={28} style={styles.modalToggle} />
      </TouchableOpacity>
      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigate("ReviewDetails", item)}
              style={styles.item}
            >
              <Card>
                <Text style={globalStyles.title}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
