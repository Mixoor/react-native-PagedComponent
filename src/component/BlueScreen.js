import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class BlueScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> BlueScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "900"
  }
});
