import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDay } from '../utils/date'

const RecentExpensesScreen = () => {
  const expensesCtx = useContext(ExpensesContext)
  const { expenses } = expensesCtx

  const recentExpensive = expenses.filter((expense) => {
    const today = new Date()
    const date7DaysAgo = getDateMinusDay(today, 7)
    return expense.date > date7DaysAgo
  })

  return (
    <ExpensesOutput
      items={recentExpensive}
      expensesPeriod="Last 7 days"
      fallBackText="No Expenses registered for the last 7 days"
    />
  )
}

export default RecentExpensesScreen
