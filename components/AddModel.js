import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import { Cross } from './Images/Cross.png'
const AddModel = ({ showAddmodel, setshowaddmodel }) => {
  const { dispatch } = useContext(AppContext)
  const [selected, setSelected] = useState('expense')
  const [ammount, setAmmount] = useState(0)
  const [description, setDescription] = useState('')

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const HandleSave = () => {
    console.log('at save')
    if (selected === 'expense') {
      console.log('datee is', date)
      const expense = {
        id: uuidv4(),
        name: description,
        cost: parseInt(ammount),
        date: date,
        type: selected,
      }
      dispatch({
        type: 'AddExpense',
        payload: expense,
      })
    } else {
      console.log(ammount, ' ', description, ' ', date, selected)

      // function stringToDate(str) {
      //   var date = str.split('/'),
      //     m = date[0],
      //     d = date[1],
      //     y = date[2]
      //   setDate(new Date(y + '-' + m + '-' + d).toUTCString())
      // }
      // stringToDate(date)
      const income = {
        id: uuidv4(),
        name: description,
        cost: parseInt(ammount),
        date: date,
        type: selected,
      }
      dispatch({
        type: 'AddIncome',
        payload: income,
      })
    }
  }

  return (
    <View>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => setshowaddmodel(false)}>
          <Text style={styles.crosstext}>X</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>Add Income/Expense</Text>
        </View>
        <View style={styles.tab}>
          <View style={{ height: 40 }}>
            <TouchableOpacity onPress={() => setSelected('income')}>
              <View style={selected === 'income' ? styles.textcolor : <></>}>
                <Text style={{ fontSize: 20 }}>Income</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 40 }}>
            <TouchableOpacity onPress={() => setSelected('expense')}>
              <View style={selected === 'expense' ? styles.textcolor : <></>}>
                <Text style={{ fontSize: 20 }}>Expense</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputbox}
            onChangeText={(number) => setAmmount(number)}
            value={ammount}
            placeholder="Ammount"
          />
          <TextInput
            style={styles.inputbox}
            onChangeText={(text) => setDescription(text)}
            value={description}
            placeholder="Description"
          />
          <TouchableOpacity>
            <TextInput
              style={styles.inputbox}
              onChangeText={(date) => setDate(date)}
              value={date}
              placeholder="Date Ex:- (Oct 10 2022)"
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 25 }}>
          <TouchableOpacity onPress={() => HandleSave()}>
            <Text style={styles.buttontext}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFFFFF',
    height: Dimensions.get('window').height / 0.4,
    borderRadius: 18,
    bottom: 35,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
  tab: {
    height: 40,
    width: 148,
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textcolor: {
    backgroundColor: 'yellow',
    borderRadius: 8,
  },
  input: {},
  inputbox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  buttontext: {
    color: '#F9C201',
    textAlign: 'center',
    fontSize: 18,
  },
  crosstext: {
    textAlign: 'right',
    paddingRight: 20,
    marginTop: 5,
    fontWeight: '700',
    fontSize: 18,
  },
})
export default AddModel
