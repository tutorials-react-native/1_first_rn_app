import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "components/GoalItem";
import GoalInput from "components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const handleAddGoal = enteredGoal => {
    setCourseGoals(currentGoals => [
      { key: Math.random().toString(), value: enteredGoal },
      ...currentGoals
    ]);
  };

  const handleDeleteGoal = index => {
    setCourseGoals(currentGoals => {
      const newGoals = [...currentGoals];
      newGoals.splice(index, 1);
      return newGoals;
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput handleAddGoal={handleAddGoal} />
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            goal={itemData.item.value}
            onPress={handleDeleteGoal.bind(this, itemData.index)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 }
});
