import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  boardList: {
    justifyContent: 'center',
    maxHeight: '85%',
    marginHorizontal: 10
  },
  h1: {
    fontSize: 40,
    fontFamily: 'Futura',
    margin: 10
  },
  boardBig: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    display: 'flex',
    height: '85%'

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
