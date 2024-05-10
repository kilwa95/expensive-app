import React from 'react'
import { Pressable, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from './style'

function IconButton({ icon, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.container}>
        <Ionicons name={icon} size={24} color="white" />
      </View>
    </Pressable>
  )
}

export default IconButton
