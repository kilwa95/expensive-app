import GlobalStyles from '../style/GlobalStyles'
import IconButton from '../UI/IconButton/IconButton'

export const screenOptionsTabNav = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: GlobalStyles.colors.primary500,
  },
  headerTintColor: GlobalStyles.colors.primary50,
  tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
  tabBarActiveTintColor: GlobalStyles.colors.accent500,
  headerRight: ({ size, color }) => {
    return (
      <IconButton
        icon="add"
        size={size}
        color={color}
        onPress={() => {
          navigation.navigate('ManageExpenses')
        }}
      />
    )
  },
})

export const screenOptionsStackNav = {
  headerStyle: {
    backgroundColor: GlobalStyles.colors.primary500,
  },
  headerTintColor: 'white',
}
