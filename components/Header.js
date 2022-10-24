import { View, Text, SafeAreaViewBase, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Arrow from './Images/ArrowLeft.png'

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.top}>
        <View style={styles.center1}>
          <Image source={Arrow} />
        </View>
        <View style={styles.center}>
          <Text style={styles.text}> Trackit</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  top: {
    height: 80,
    width: '100%',
    backgroundColor: '#F9C201',
    alignItems: 'center',
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'flex-start',
    alignItems: 'center',

    alignSelf: 'center',
  },
  center1: {
    justifyContent: 'center',
    marginLeft: 10,
    width: '40%',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },
})

export default Header
