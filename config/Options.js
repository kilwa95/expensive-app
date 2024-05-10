import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default Options = {
  RecentExpensesOptions: {
    title: 'Recent Expenses',
    tabBarLabel: 'Recent',
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="hourglass" size={size} color={color} />
    ),
  },
  AllExpensesOptions: {
    title: 'All Expenses',
    tabBarLabel: 'All',
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="calendar" size={size} color={color} />
    ),
  },

  ManageExpensesOptions: {
    presentation: 'modal',
  },
}
