import React, {Component} from 'react'
import {Platform, Text, View, Image} from 'react-native'
import {styles} from './style/components/app'
import Greeting from './components/Greeting'
import Blink from './components/Blink'
import Paragraph from './components/shared/Paragraph'
import Header from './components/shared/Header'
import Dimensions from './components/Dimensions'
import Flexbox from './components/Flexbox'
import Input from './components/Input'
import BasicButton from './components/BasicButton'
import Touchables from './components/Touchables'
import BasicScrollView from './components/BasicScrollView'
import Pager from './components/Pager'
import FlatListBasics from './components/FlatListBasics'
import SectionListBasics from './components/SectionListBasics'

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
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        {/* <Text style={styles.instructions}>To get started, edit App.js</Text> */}
        {/* <Text style={styles.instructions}>{instructions}</Text> */}

        {/* <Image source={picUrl} style={{width: 193, height: 110}}/> */}
        {/* <Greeting name='Vasil'/> */}
        {/* <Blink text='This is some text'/> */}
        {/* <Header>This is a header</Header> */}
        {/* <Paragraph>This is a paragraph</Paragraph> */}
        {/* <Dimensions/> */}
        {/* <Flexbox/> */}
        {/* <Input/> */}
        {/* <BasicButton/> */}
        {/* <Touchables/> */}
        {/* <BasicScrollView/> */}
        {/* <Pager/> */}
        {/* <FlatListBasics/> */}
        {/* <SectionListBasics/> */}
      </View>
    )
  }
}
