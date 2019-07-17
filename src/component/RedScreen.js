import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class RedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> RedScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "900"
  }
});
