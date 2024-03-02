import React, { type ReactElement } from "react";
import { SafeAreaView, Text } from "react-native";

export const App = (): ReactElement => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>{"App"}</Text>
    </SafeAreaView>
  );
};
