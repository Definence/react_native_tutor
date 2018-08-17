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
<TextInput /> - an input
<Button /> - a button
```

Custom buttons:
```
<TouchableHighlight />
<TouchableOpacity />
<TouchableNativeFeedback />
<TouchableWithoutFeedback />
<TouchableHighlight />
```

#### They should be imported like so:
```
import {Text, View} from 'react-native'
```

## Other imported objects from 'react-native'

To see more details try to see appropriate component if exists

#### Platform
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

#### StyleSheet
```
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
```

#### TextInput
```
<TextInput
  style={{height: 40}}
  placeholder="Type here to translate!"
  onChangeText={(text) => this.setState({text})}
/>
```

#### Button
```
<Button
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Press Me"
/>
```

#### Alert
```
<Button
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Press Me"
/>
```

#### ScrollView (skrolling)
```
<ScrollView>
  lots of stuff
</ScrollView>
```

#### ViewPagerAndroid (several pages)
```
<ViewPagerAndroid
  style={styles.viewPager}
  initialPage={0}>
  <View style={styles.pageStyle} key="1">
    <Text>First page</Text>
  </View>
  <View style={styles.pageStyle} key="2">
    <Text>Second page</Text>
  </View>
</ViewPagerAndroid>
```

#### FlatList (list)
```
<FlatList
  data={[
    {key: 'Devin'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'}
  ]}
  renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
/>
```

#### SectionList (list with sections)
```
<SectionList
  sections={[
    {title: 'D letter', data: ['Devin']},
    {title: 'J letter', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']}
  ]}
  renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
  renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
  keyExtractor={(item, index) => index}
/>
```
