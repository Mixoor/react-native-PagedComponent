﻿# Paged Scroller
## Horizontal Paged for component

```javascript
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
    </Screen>
  );
};

```

![](https://raw.githubusercontent.com/Mixoor/react-native-PagedComponent/master/Capture.png)
