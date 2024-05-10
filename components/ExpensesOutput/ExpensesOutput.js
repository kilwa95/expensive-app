import React from 'react'
import { View, Text } from 'react-native'
import ExpensesList from '../ExpensesList/ExpensesList'
import ExpensesSummary from '../ExpensesSummury/ExpensesSummury'
import style from './style'

const ExpensesOutput = ({ items, expensesPeriod, fallBackText }) => {
  let content = <Text style={style.infoText}>{fallBackText}</Text>

  if (items.length > 0) {
    content = <ExpensesList items={items} />
  }
  return (
    <View style={style.container}>
      <ExpensesSummary items={items} periodName={expensesPeriod} />
      {content}
    </View>
  )
}

export default ExpensesOutput
