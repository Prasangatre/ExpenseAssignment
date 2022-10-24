import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import Individiual from './Individiual'

const ExpenseList = ({ item }) => {
  const { cost, id, name, type } = item
  console.log('type here', type)
  const [showdetail, setshowdetail] = useState(false)
  return (
    <View>
      <View style={styles.main}>
        <View>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View>
          <Text
            style={
              type === 'income'
                ? styles.textammountgreen
                : styles.textammountred
            }
          >
            {cost}
          </Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    width: Dimensions.get('window').width / 1.05,
    height: Dimensions.get('window').height / 13,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '1px solid grey',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
  textammountred: {
    fontSize: 16,
    fontWeight: '400',
    color: '#D10000',
  },
  textammountgreen: {
    fontSize: 16,
    fontWeight: '400',
    color: 'green',
  },
})

export default ExpenseList
