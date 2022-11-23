import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  h1: {
    fontSize: 60,
    fontFamily: 'Futura',
    marginHorizontal: 20,
    marginTop: 5
  },
  main: {
    backgroundColor: 'white',
    minHeight: '100%'
  },
  boardBig: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    display: 'flex',
    maxHeight: '85%'

  },
  coolShadow: {
    shadowColor: '#171717',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: -2,
      height: 4
    },
    shadowRadius: 3

  }

})
