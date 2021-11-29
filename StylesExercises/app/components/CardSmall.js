import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function CardSmall({src, name, info}) {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={src}></Image>
      <View style={styles.imageWrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.info}>{info}</Text>
      </View>
    </View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems: 'center',
    padding: 10,
  },
  imageWrapper: {
    padding: 10,
    
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  name: {
    fontWeight: "500",
   
  },
  info: {
    color: "#6e6939",

  }
})
