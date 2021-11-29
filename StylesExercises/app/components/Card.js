import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function Card({title, subtitle, src}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={src}></Image>
      <View style={styles.textWrapper}>
        <Text>{title}</Text>
        <Text style={styles.sum}>{subtitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    width: "90%",
    //height: 50,
    //justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "white",
    marginTop: 100,
    overflow: 'hidden',
    
  },
  image: {
    width: "100%",
    height: 200,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  textWrapper: {
    padding: 20,
  },
  sum: {
    color: "green",
  }

})
