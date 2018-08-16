import React, {Component} from 'react'
import {Text} from 'react-native'
import {StyleSheet} from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <Text style={styles.header}>{this.props.children}</Text>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    color: 'black',
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
