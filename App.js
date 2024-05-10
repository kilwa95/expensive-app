import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExpensesOverview from './navigation/ExpensesOverview'
import ManageExpensesScreen from './screens/ManageExpensesScreen'
import { screenOptionsStackNav } from './config/ScreenOptions'
import Options from './config/Options' // Add this line
import ExpensesContextProvider from './store/expenses-context'

const Stack = createNativeStackNavigator()

export default function App() {
  const { ManageExpensesOptions } = Options
  return (
    <>
      <StatusBar style="auto" />

      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptionsStackNav}>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ManageExpenses"
              component={ManageExpensesScreen}
              options={ManageExpensesOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  )
}
