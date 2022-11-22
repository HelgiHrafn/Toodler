import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  name: {
    fontSize: 30,
    fontFamily: 'Futura',
    maxWidth: '65%',
    maxHeight: '100%'
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    alignSelf: 'flex-end'

  },
  boardSmall: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'

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