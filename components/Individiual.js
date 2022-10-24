import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import EditModel from './EditModel'
const Individiual = ({ showdetail, setshowdetail, onclickid }) => {
  const { budget, expenses, id } = useContext(AppContext)
  const { dispatch } = useContext(AppContext)
  const [edit, setedit] = useState(false)
  const [editid, seteditid] = useState(0)
  const FoundData = expenses.find((element) => element.id == onclickid)
  console.log('found data', FoundData)

  const HandleDelete = (deleteid, cost) => {
    dispatch({
      type: 'Delete',
      payload: { deleteid, cost },
    })
    setshowdetail(false)
  }

  const HandleEdit = (id, cost, name) => {
    setedit(true)
    seteditid(id)
  }

  console.log('onclick id from expense', onclickid)
  return (
    <View style={styles.main}>
      {edit ? (
        <EditModel
          edit={edit}
          setedit={setedit}
          editid={editid}
          setshowdetail={setshowdetail}
        />
      ) : (
        <></>
      )}
      

      <TouchableOpacity onPress={() => setshowdetail(false)}>
        <Text style={styles.crosstext}>X</Text>
      </TouchableOpacity>
      <View style={{ alignSelf: 'center' }}>
        <Text>Expense</Text>
      </View>
      <View style={styles.data}>
        <View style={styles.cost}>
          <Text style={{ color: 'red', fontSize: 38 }}>${FoundData.cost}</Text>
        </View>
        <Text style={styles.name}>{FoundData.name}</Text>
        <View>
          <Text style={styles.date}>11-3-22</Text>
        </View>
        <View style={{ marginTop: 29 }}>
          <TouchableOpacity
            onPress={() =>
              HandleEdit(FoundData.id, FoundData.cost, FoundData.name)
            }
          >
            <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View stylle={{ marginTop: 22 }}>
          <TouchableOpacity
            onPress={() => HandleDelete(FoundData.id, FoundData.cost)}
          >
            <Text style={styles.delete}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 0.5,
    borderRadius: 18,
    top: -30,
  },
  cost: { marginTop: 10 },
  name: { marginTop: 10, fontSize: 18 },
  date: { marginTop: 3, fontSize: 18 },
  edit: {
    color: '#F9C201',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  delete: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
  },

  data: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  crosstext: {
    textAlign: 'right',
    paddingRight: 20,
    marginTop: 5,
    fontWeight: '700',
    fontSize: 18,
  },
})
export default Individiual
