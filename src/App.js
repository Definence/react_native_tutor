import React, {Component} from 'react'
import {Platform, Text, View, Image} from 'react-native'
import {styles} from './style/components/app'
import Greeting from './components/Greeting'
import Blink from './components/Blink'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

type Props = {}
export default class App extends Component<Props> {
  render() {
    let picUrl = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }

    return (
      <View style={styles.container}>
        <Image source={picUrl} style={{width: 193, height: 110}}/>

        <Text style={styles.welcome}>Welcome to React Native!!!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        {/* <Greeting name='Vasil' /> */}
        {/* <Blink text='This is some text' /> */}
      </View>
    )
  }
}
