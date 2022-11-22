import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  name: {
    fontSize: 30,
    fontFamily: 'Futura'
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10

  },
  boardSmall: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginVertical: 5,
    marginHorizontal: 10

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
