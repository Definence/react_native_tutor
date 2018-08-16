import React, {Component} from 'react'
import {View} from 'react-native'

export default class Flexbox extends Component {
  render() {
    return (
      // <View style={{flex: 1, flexDirection: 'row'}}>
      //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      // </View>

      <View style={{
        flex: 1,
        flexDirection: 'column', // row and column
        justifyContent: 'center', // first-axis align: flex-start, center, flex-end, space-around, space-between and space-evenly,
        alignItems: 'center' // second-axis align: flex-start, center, flex-end, and stretch
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>

    )
  }
}
