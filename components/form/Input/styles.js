import GlobalStyles from '../../../style/GlobalStyles'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    marginHorizontal: 4,
  },
  label: {
    fontSize: 16,
    color: GlobalStyles.colors.primary100,
    marginButtom: 4,
  },
  input: {
    padding: 6,
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    height: 120,
    textAlignVertical: 'top',
  },
})

export default styles
