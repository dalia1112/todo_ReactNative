
import React from "react";
import { View, Text } from "react-native";

const CompletedTask = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Completed Tasks</Text>
    </View>
  );
};

export default CompletedTask;
