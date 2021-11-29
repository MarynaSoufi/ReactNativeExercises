import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CardBig, CardSmall } from '../components'

export default function DetailScreen() {
  return (
    <View>
      <CardBig title="Red jacket  for sale!" subtitle="$100" src={require('../assets/jacket.jpg')}></CardBig>
      <CardSmall src={require('../assets/mosh.jpg')} name="Mosh Hamedani" info="5 Listings"></CardSmall>
    </View>
  )
}
  
const styles = StyleSheet.create({})
