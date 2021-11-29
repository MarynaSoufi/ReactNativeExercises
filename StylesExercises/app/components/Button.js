import React from 'react';;
import { StyleSheet, Text, View, Platform } from 'react-native'

export default function Button({text, styleBtn, styleText}) {
  return (
    <View style={styleBtn}>
      <Text style={styleText}>{text}</Text>
    </View>
  )
}
