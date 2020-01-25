import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({ goal, onPress, id }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{goal}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
});
