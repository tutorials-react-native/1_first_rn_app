import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Platform
} from "react-native";

const GoalInput = ({ handleAddGoal, isAddMode, handleCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const handleGoalInput = enteredText => {
    setEnteredGoal(enteredText);
  };

  const handleAddButtonPressed = () => {
    handleAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  const handleCancelButtonPressed = () => {
    handleCancel();
    setEnteredGoal("");
  };

  return (
    <Modal
      visible={isAddMode}
      animationType={Platform.OS === "ios" ? "slide" : "fade"}
    >
      <View style={styles.textContainer}>
        <TextInput
          placeholder="Course goals"
          style={styles.text}
          onChangeText={handleGoalInput}
          value={enteredGoal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={handleAddButtonPressed} />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="red"
              onPress={handleCancelButtonPressed}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonsContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: "40%"
  }
});

export default GoalInput;
