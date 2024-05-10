import { FlatList } from 'react-native'
import ExpensesItem from '../ExpensesItem/ExpensesItem'

const renderItem = ({ item }) => {
  return (
    <ExpensesItem
      description={item.description}
      date={item.date}
      amount={item.amount}
    />
  )
}

const ExpensesList = ({ items }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  )
}

export default ExpensesList
