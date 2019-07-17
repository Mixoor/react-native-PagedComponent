import React, { Component } from "react";
import {
  View,
  Animated,
  PanResponder,
  StyleSheet,
  Dimensions,
  Easing
} from "react-native";

/**
 * Const screens = {[
 * {
 *    screen : RedScreen
 * },
 *      {
 *          screen:BlueScreen
 *       }
 * ],
 * {
 *  initalRoute: 0
 * }
 *  }
 */

const { width, height } = Dimensions.get("screen");

export default class Screen extends Component {
  constructor(props) {
    super(props);

    let activeSreen = this.props.index;
    this.state = {
      activeSreen,
      animated: new Animated.Value(-activeSreen * width)
    };

    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gesture) => {
        this.state.animated.setValue(
          -this.state.activeSreen * width + gesture.dx
        );
      },
      onPanResponderRelease: (evt, gesture) => {
        let isFirst = this.state.activeSreen === 0;
        let islast = this.state.activeSreen === this.props.children.length - 1;
        if (gesture.dx > width / 5 && !isFirst) {
          //swipe to left
          let index = this.state.activeSreen;

          let newLeft = --index * width;
          Animated.timing(this.state.animated, {
            toValue: -newLeft,
            easing: Easing.linear,
            duration: 250
          }).start();
          this.setState(state => {
            return { activeSreen: state.activeSreen - 1 };
          });
        } else if (gesture.dx < -width / 5 && !islast) {
          //swipe to right
          let index = this.state.activeSreen;
          let newLeft = ++index * width;
          Animated.timing(this.state.animated, {
            toValue: -newLeft,
            easing: Easing.linear,
            duration: 250
          }).start();

          this.setState(state => {
            return { activeSreen: state.activeSreen + 1 };
          });
        } else {
          let index = this.state.activeSreen;
          let newLeft = index * width;
          Animated.timing(this.state.animated, {
            toValue: -newLeft,
            easing: Easing.linear,
            duration: 250
          }).start();
        }
      }
    });
  }

  render() {
    const { children } = this.props;

    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            { width, height },
            StyleSheet.absoluteFill,
            { top: 0, left: this.state.animated }
          ]}
          {...this._panResponder.panHandlers}
        >
          {React.Children.map(children, (item, index) => {
            return (
              <View
                key={index}
                style={[
                  { width, height },
                  StyleSheet.absoluteFillObject,
                  { top: 0, left: width * index }
                ]}
              >
                {item}
              </View>
            );
          })}
        </Animated.View>
        <View style={styles.indicator}>
          {this.props.children.map((item, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === this.state.activeSreen ? styles.border : null
                ]}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  indicator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
    position: "absolute",
    zIndex: 10000,
    width: "100%"
  },
  dot: {
    width: 15,
    height: 15,
    marginHorizontal: 4,
    borderRadius: 25,
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "white"
  },
  border: {
    backgroundColor: "#222"
  }
});
