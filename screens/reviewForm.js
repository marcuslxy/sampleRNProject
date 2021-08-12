import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shares/flatButton";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(4),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm;
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={handleChange("title")}
              value={values.title}
              onBlur={handleBlur("title")}
            />

            <Text style={globalStyles.errorText}>
              {touched.title && errors.title}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={handleChange("body")}
              value={values.body}
              onBlur={handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>{errors.body}</Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={handleChange("rating")}
              value={values.rating}
              onBlur={handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>{errors.rating}</Text>

            <FlatButton text="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
