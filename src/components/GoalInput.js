import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = ({ handleAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const handleGoalInput = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.textContainer}>
      <TextInput
        placeholder="Course goals"
        style={styles.text}
        onChangeText={handleGoalInput}
        value={enteredGoal}
      />
      <Button title="Add" onPress={handleAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  }
});

export default GoalInput;
