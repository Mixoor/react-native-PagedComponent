import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class BlackScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> BlackScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "900"
  }
});
