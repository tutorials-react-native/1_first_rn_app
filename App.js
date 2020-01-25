import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "components/GoalItem";
import GoalInput from "components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const handleAddGoal = enteredGoal => {
    setCourseGoals(currentGoals => [
      { id: Math.random().toString(), value: enteredGoal },
      ...currentGoals
    ]);
  };

  const handleDeleteGoal = id => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput handleAddGoal={handleAddGoal} />
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
