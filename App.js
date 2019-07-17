/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";

import Screen from "./src/component/Screen";
import BlackScreen from "./src/component/BlackScreen";
import BlueScreen from "./src/component/BlueScreen";
import RedScreen from "./src/component/RedScreen";
const App = () => {
  return (
    <Screen index={0}>
      <BlueScreen />
      <RedScreen />
      <BlackScreen />
      <BlueScreen />
      <RedScreen />
      <BlackScreen />
      <BlueScreen />
      <RedScreen />
      <BlackScreen />
    </Screen>
  );
};

export default App;
