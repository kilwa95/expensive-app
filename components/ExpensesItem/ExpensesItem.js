import { Pressable, View, Text } from 'react-native'
import style from './style'
import { getFormattedDate } from '../../utils/date'
import { useNavigation } from '@react-navigation/native'

const ExpensesItem = ({ id, description, date, amount }) => {
  const navigation = useNavigation()

  const expensePressHandler = () => {
    navigation.navigate('ManageExpenses', {
      expenseId: id,
    })
  }

  return (
    <Pressable
      style={({ pressed }) => pressed && style.pressed}
      onPress={expensePressHandler}
    >
      <View style={style.item}>
        <View>
          <Text style={[style.text, style.description]}>{description}</Text>
          <Text style={style.text}>{getFormattedDate(date)}</Text>
        </View>
        <View style={style.amountContainer}>
          <Text style={style.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default ExpensesItem
