import React, {Component} from 'react'
import { Button, Alert } from 'react-native'

export default class BasicButton extends Component {
  render() {
    return (
      <Button
        onPress={() => {
          // alert('You tapped the button!')
          Alert.alert('You tapped the button!')
        }}
        title="Press Me"
        color="#841584"
      />
    )
  }
}
