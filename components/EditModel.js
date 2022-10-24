import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const EditModel = ({ edit, setedit, editid, setshowdetail }) => {
  console.log('edit id', editid)
  const { budget, expenses, id } = useContext(AppContext)
  const { dispatch } = useContext(AppContext)
  const FoundData = expenses.find((element) => element.id == editid)

  const [selected, setSelected] = useState('expense')
  const [ammount, setAmmount] = useState(0)
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(110622)

  const HandleSave = (id) => {
    console.log('yo id', id)
    console.log('at savveee')
    if(selected=='expense'){ 
       const data = {
      id: id,
      name: description,
      cost: parseInt(ammount),
      type: selected,
      date:date
    }
    dispatch({
      type: 'EditExpense',
      payload: data,
    })}
  else{
    const data = {
      id: id,
      name: description,
      cost: parseInt(ammount),
      type: selected,
      date:date
    }
    dispatch({
      type: 'EditIncome',
      payload: data,
    })



  }
    setedit(false)
    setshowdetail(false)
  }
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setedit(false)}>
        <Text style={styles.crosstext}>X</Text>
      </TouchableOpacity>
      <View>
        <Text style={{ textAlign: 'center', fontSize: 20 }}>
          Edit Income/Expense
        </Text>
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
          placeholder="cost"
        />
        <TextInput
          style={styles.inputbox}
          onChangeText={(text) => setDescription(text)}
          value={description}
          placeholder="desc"
        />

        <TextInput
          style={styles.inputbox}
          onChangeText={(date) => setDate(date)}
          value={date}
          placeholder="Date Ex:- (Oct 10 2022)"
          keyboardType="phone-pad"
        />
      </View>

      <View style={{ marginTop: 25 }}>
        <TouchableOpacity onPress={() => HandleSave(FoundData.id)}>
          <Text style={styles.buttontext}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFFFFF',
    height: Dimensions.get('window').height / 0.4,
    borderRadius: 18,
    bottom: 15,
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
    borderRadius: 15,
    justifyContent: 'space-between',
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
    color: 'black',
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
export default EditModel
