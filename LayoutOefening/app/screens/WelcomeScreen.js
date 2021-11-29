import React from 'react';
import { ImageBackground, StyleSheet  } from "react-native";
import Button from '../components/Button';
import Logo from '../components/Logo';
import colors from '../config/colors';

const WelcomeScreen = () => {
  return (
    <ImageBackground style={styles.image} source={require('../assets/background.jpg')}>
      <Logo/>
      <Button styles={styles.loginBtn}></Button>
      <Button styles={styles.registerBtn}></Button>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
  },
  loginBtn: {
    width: "100%",
    height: 75,
    backgroundColor: colors.primary,
  }
  ,
  registerBtn: {
    width: "100%",
    height: 75,
    backgroundColor: colors.secondary,
  }
})

export default WelcomeScreen
