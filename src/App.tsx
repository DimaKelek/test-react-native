import React, { type ReactElement } from "react";
import { SafeAreaView, Text } from "react-native";
import { FLEX_CENTER } from "@commonStyles";

export const App = (): ReactElement => {
  return (
    <SafeAreaView style={{ flex: 1, ...FLEX_CENTER }}>
      <Text>{"App"}</Text>
    </SafeAreaView>
  );
};
