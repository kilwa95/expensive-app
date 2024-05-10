import { createContext, useReducer } from 'react'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    description: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    description: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    description: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },

  {
    id: 'e5',
    description: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e6',
    description: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e7',
    description: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e8',
    description: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e9',
    description: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e10',
    description: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e11',
    description: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e12',
    description: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e13',
    description: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e14',
    description: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e15',
    description: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e16',
    description: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]
export const ExpensesContext = createContext({
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
})

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload]
    case 'DELETE_EXPENSE':
      return state.filter((expense) => expense.id !== action.payload)
    case 'UPDATE_EXPENSE':
      const expenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id,
      )
      const updatedExpenses = [...state]
      updatedExpenses[expenseIndex] = action.payload.data
      return updatedExpenses
    default:
      return state
  }
}

function ExpensesContextProvider({ children }) {
  const [expenses, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)
  const addExpenseHandler = (expenseData) => {
    dispatch({ type: 'ADD_EXPENSE', payload: expenseData })
  }

  const deleteExpenseHandler = (id) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: id })
  }

  const updateExpenseHandler = (id, expense) => {
    dispatch({ type: 'UPDATE_EXPENSE', payload: { id: id, data: expense } })
  }

  return (
    <ExpensesContext.Provider
      value={{
        expenses: expenses,
        addExpense: addExpenseHandler,
        deleteExpense: deleteExpenseHandler,
        updateExpense: updateExpenseHandler,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContextProvider
