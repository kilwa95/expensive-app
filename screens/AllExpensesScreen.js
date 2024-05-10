import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'

const AllExpensesScreen = () => {
  const expensesCtx = useContext(ExpensesContext)
  const { expenses } = expensesCtx
  return (
    <ExpensesOutput
      items={expenses}
      expensesPeriod="Total"
      fallBackText="No registre expensive found"
    />
  )
}

export default AllExpensesScreen
