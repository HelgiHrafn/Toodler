import { StyleSheet, Dimensions } from 'react-native'

const { width: winWidth } = Dimensions.get('window')

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 0.4,
    borderRadius: 10,
    width: winWidth - 50,
    backgroundColor: 'white',
    padding: 10
  },
  title: {
    fontFamily: 'Futura',
    fontSize: 30,
    marginBottom: 20
  }
})
