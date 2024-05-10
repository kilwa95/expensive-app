import { StyleSheet } from 'react-native'
import GlobalStyles from '../../style/GlobalStyles'

export default StyleSheet.create({
  item: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 7,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.4,
  },
  text: {
    color: GlobalStyles.colors.primary100,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },

  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 70,
  },

  amount: {
    color: GlobalStyles.colors.primary500,
    fontSize: 16,
    fontWeight: 'bold',
  },

  pressed: {
    opacity: 0.5,
  },
})
