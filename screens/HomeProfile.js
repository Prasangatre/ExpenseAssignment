import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'
import axios from 'axios'

const HomeProfile = () => {
  const navigation = useNavigation()
  const [apidata, setapidata] = useState({})
  const [show, setshow] = useState(false)
  useEffect(() => {
    const FetchData = async () => {
      await axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          return setapidata(res.data[0])
        })
    }
    FetchData()
    setshow(true)
  }, [])
  console.log('data from api', apidata)
  const { address, company, email, username } = apidata
  return (
    <View>
      <View>
        <Header />
      </View>
      {show ? (
        <TouchableOpacity onPress={() => navigation.navigate('Expense')}>
          <View style={styles.imagecontainer}>
            <Image
              style={{ width: 90, height: 90, borderRadius: 99 / 2 }}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
              }}
            />
          </View>
          <View style={styles.description}>
            <View>
              <Text style={styles.nametext}>{username}</Text>
            </View>
            <View>
              <Text style={styles.detailstext}>{email}</Text>
            </View>
            <View>
              <Text style={styles.detailstext}>
                {`${address?.city} ${address?.street} ${address?.suite}`}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
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
  imagecontainer: {
    width: 90,
    height: 90,
    marginTop: 55,
    borderRadius: 99 / 2,
    // backgroundColor: 'green',
    alignSelf: 'center',
  },
  description: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nametext: {
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
  },
  detailstext: {
    fontStyle: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    color: '#707070',
  },
})

export default HomeProfile
