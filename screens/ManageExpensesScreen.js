import { View, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useContext } from 'react'
import IconButton from '../UI/IconButton/IconButton'
import GlobalStyles from '../style/GlobalStyles'
import Button from '../UI/button/Button'
import { ExpensesContext } from '../store/expenses-context'

const ManageExpensesScreen = ({ route, navigation }) => {
  const expenseId = route.params?.expenseId
  const isEditing = !!expenseId
  const { deleteExpense } = useContext(ExpensesContext)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    })
  }, [navigation, isEditing])

  function deleteExpenseHandler() {
    deleteExpense(expenseId)
    navigation.goBack()
  }

  function cancelHandler() {
    navigation.goBack()
  }

  function confirmHandler() {
    // Add or update the expense
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
            size={36}
          />
        </View>
      )}
    </View>
  )
}

export default ManageExpensesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
})
