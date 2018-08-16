import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'

export default class Paragraph extends Component {
  render() {
    return (
      <Text style={styles.paragraph}>{this.props.children}</Text>
    )
  }
}

const styles = StyleSheet.create({
  paragraph: {
    color: 'black',
    fontStyle: 'normal',
    fontSize: 14
  }
})
