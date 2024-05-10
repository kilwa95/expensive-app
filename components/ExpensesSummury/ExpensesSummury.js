import { View, Text } from 'react-native'
import style from './style'

const ExpensesSummary = ({ items, periodName }) => {
  const expensesSum = items.reduce((acc, item) => acc + item.amount, 0)
  return (
    <View style={style.container}>
      <Text style={style.period}>{periodName}</Text>
      <Text style={style.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary
