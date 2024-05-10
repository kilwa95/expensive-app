import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RecentExpensesScreen from '../screens/RecentExpensesScreen'
import AllExpensesScreen from '../screens/AllExpensesScreen'
import { screenOptionsTabNav } from '../config/ScreenOptions'
import Options from '../config/Options'

const Tab = createBottomTabNavigator()

const ExpensesOverview = () => {
  const { RecentExpensesOptions, AllExpensesOptions } = Options
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => screenOptionsTabNav({ navigation })}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
        options={RecentExpensesOptions.title}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={AllExpensesOptions}
      />
    </Tab.Navigator>
  )
}

export default ExpensesOverview
