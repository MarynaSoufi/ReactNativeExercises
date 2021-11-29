import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function CardBig({title, subtitle, src}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={src}></Image>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.sum}>{subtitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    width: "100%",
    //height: 50,
    //justifyContent: "center",
    backgroundColor: "white",
    
  },
  image: {
    width: "100%",
    height: 300,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  textWrapper: {
    padding: 20,
  },
  sum: {
    color: "green",
    fontWeight: '600'
  },
  title: {
    fontSize: 20,
    color: "black",
  }

})
