import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import ExpenseList from '../components/ExpenseList'
import AddModel from '../components/AddModel'
import { AppContext } from '../context/AppContext'
import Individiual from '../components/Individiual'
import Add from '../components/Images/Add.png'
const Expense = () => {
  const { budget, expenses, id } = useContext(AppContext)
  const [showAddmodel, setshowaddmodel] = useState(false)
  const [showdetail, setshowdetail] = useState(false)
  const [onclickid, setOnclickid] = useState(0)
  console.log('budget is', expenses)

  const TotalExpense = expenses.reduce((total, item) => {
    console.log('item.cost iss', item.cost)
    return (total = total + parseInt(item.cost))
  }, 0)
  const HandleOnTouch = (id) => {
    console.log('at handle touch', id)
    setOnclickid(id)
    setshowdetail(true)
  }

  return (
    <View>
      <Header />

      {showAddmodel ? (
        <View>
          <AddModel
            showAddmodel={showAddmodel}
            setshowaddmodel={setshowaddmodel}
          />
        </View>
      ) : (
        <></>
      )}

      {showdetail ? (
        <Individiual
          showdetail={showdetail}
          setshowdetail={setshowdetail}
          onclickid={onclickid}
        />
      ) : (
        <></>
      )}

      <View style={styles.box}>
        <View style={styles.balance}>
          <View>
            <Text style={styles.text}>Balance</Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 24,
                color: '#02BEE8',
              }}
            >
              ${budget - TotalExpense}
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.line} />
        </View>
        <View style={styles.secondsection}>
          <View style={styles.income}>
            <View>
              <Text style={styles.text}>Income</Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 24,
                  color: '#00B152',
                }}
              >
                ${budget}
              </Text>
            </View>
          </View>
          <View style={styles.expense}>
            <View>
              <Text
                style={{
                  fontSize: 24,
                  color: '#D10000',
                }}
              >
                ${TotalExpense}
              </Text>
            </View>
            <View>
              <Text style={styles.text}>Expense</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.expenselist}>
        {expenses
          .sort(function (a, b) {
            var c = new Date(a.date)
            var d = new Date(b.date)
            return d - c
          })
          .map((item) => {
            let newid = item.id
            return (
              <TouchableOpacity
                key={newid}
                onPress={() => HandleOnTouch(newid)}
              >
                <Text style={{ textAlign: 'center' }}>{item?.date}</Text>
                <ExpenseList item={item} />
              </TouchableOpacity>
            )
          })}
      </View>

      <TouchableOpacity onPress={() => setshowaddmodel(true)}>
        <View style={styles.addbutton}>
          <Image source={Add} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    marginTop: 15,
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 3.5,
    alignSelf: 'center',
    backgroundColor: 'white',
    border: '1px solid #D3D3D3',
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  balance: {
    justifyContent: 'center',
  },
  line: {
    borderRightColor: 'grey',
    height: Dimensions.get('window').height / 3.5,
    borderRightWidth: 1,
    border: '1px solid grey',
  },
  secondsection: { justifyContent: 'space-evenly' },
  text: { textAlign: 'center', fontSize: 14, color: 'grey' },
  income: {},
  expense: {},
  expenselist: {
    marginTop: 25,
  },
  addbutton: {
    backgroundColor: '#F9C201',
    width: 56,
    position: 'relative',
    height: 56,
    bottom: -40,
    alignSelf: 'center',
    borderRadius: 56 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Expense
