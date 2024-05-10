import { View } from 'react-native'
import Input from '../Input/Input'

function ExpenseForm() {
  return (
    <View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          placeholder: 'Description',
          KeyboardType: 'decimal-pad',
          onchangeText: () => {},
        }}
      />
      <Input
        label="Amount"
        textInputConfig={{
          placeholder: 'Amount',
          KeyboardType: 'decimal-pad',
          onchangeText: () => {},
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: 'yyyy-mm-dd',
          maxLength: 10,
          KeyboardType: 'decimal-pad',
          onchangeText: () => {},
        }}
      />
    </View>
  )
}

export default ExpenseForm
