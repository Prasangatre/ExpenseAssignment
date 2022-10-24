import { createContext, useReducer } from 'react'

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'AddExpense':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      }

    case 'AddIncome':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        budget: state.budget + action.payload.cost,
      }

    case 'Delete':
      return {
        ...state,
        expenses: state.expenses.filter(
          (element) => element.id !== action.payload.deleteid,
        ),
        budget: state.budget + parseInt(action.payload.cost),
      }
    case 'EditExpense':
      const updatedexpense = action.payload
      console.log('at reducerr', updatedexpense)
      const updatedExpenses = state.expenses.map((user) => {
        if (user.id == updatedexpense.id) {
          return updatedexpense
        }

        return user
      })

      return {
        ...state,
        expenses: updatedExpenses,
      }
    case 'EditIncome':
      const updatedincome = action.payload
      console.log('at reducerr', updatedexpense)
      const updatedIncomes = state.expenses.map((user) => {
        if (user.id == updatedincome.id) {
          return updatedincome
        }

        return user
      })

      return {
        ...state,
        expenses: updatedIncomes,
        budget: state.budget + action.payload.cost,
      }
    default:
      return state
  }
}

const IntialState = {
  budget: 1000,
  expenses: [
    {
      id: 1,
      name: 'carwash',
      cost: '100',
      date: 'Mar 12 2020',
      type: 'income',
    },
    {
      id: 3,
      name: 'carwash',
      cost: '150',
      date: 'Mar 11 2022',
      type: 'expense',
    },
  ],
}

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, IntialState)

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
