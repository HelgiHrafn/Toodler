import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  boardBig: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: 10,
    display: 'flex',
    minHeight: '85%'

  },
  coolShadow: {
    shadowColor: '#171717',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: -2,
      height: 4
    },
    shadowRadius: 3

  },
  h2: {
    fontSize: 30,
    fontFamily: 'Futura',
    margin: 20
  },
  main: {
    backgroundColor: 'white',
    minHeight: '100%'
  }
})
