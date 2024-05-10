import React from 'react'
import { View } from 'react-native'
import ExpensesList from '../ExpensesList/ExpensesList'
import ExpensesSummary from '../ExpensesSummury/ExpensesSummury'
import style from './style'

const ExpensesOutput = ({ items, expensesPeriod }) => {
  return (
    <View style={style.container}>
      <ExpensesSummary items={items} periodName={expensesPeriod} />
      <ExpensesList items={items} />
    </View>
  )
}

export default ExpensesOutput
