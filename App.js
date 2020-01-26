import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "components/GoalItem";
import GoalInput from "components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleAddGoal = enteredGoal => {
    setCourseGoals(currentGoals => [
      { id: Math.random().toString(), value: enteredGoal },
      ...currentGoals
    ]);
    setIsAddMode(false);
  };

  const handleDeleteGoal = id => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id);
    });
  };

  const handleCancel = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        handleAddGoal={handleAddGoal}
        isAddMode={isAddMode}
        handleCancel={handleCancel}
      />
      <FlatList
        keyExtractor={item => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            goal={itemData.item.value}
            onPress={handleDeleteGoal}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 }
});
