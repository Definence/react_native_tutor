# todo_react_native_client

Getting started with react native:
> https://facebook.github.io/react-native/docs/getting-started.html


## Commands
```
npm install -g react-native-cli
react-native init projectName
```

## Tags
```
<View></View> - like a div or span, it can be used as a container for other components
<Text></Text> - a text tag
<Image></Image> - an image tag
```

#### They should be imported like so:
```
import {Text, View} from 'react-native'
```

## Other imported objects from 'react-native'

#### Platform:
```
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})
```

And using:
```
<Text>{instructions}</Text>
```

#### StyleSheet:
```
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
```

They should be used like so:
```
<Text style={styles.welcome}>Welcome to React Native!!!</Text>
```

####
