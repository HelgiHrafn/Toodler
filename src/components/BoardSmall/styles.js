import { StyleSheet } from 'react-native'
import { emerald } from '../../styles/colors'

export default StyleSheet.create({
  name: {
    fontSize: 30,
    fontFamily: 'Futura',
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
    marginBottom: 15,
    marginHorizontal: 5,
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

  },
  touchable: {
    activeOpacity: 0.6,
    underlayColor: '#FFF'
  },
  description: {
    fontFamily: 'Futura',
    fontSize: 15
  },
  textWrapper: {
    maxWidth: '60%'
  },
  editButton: {
    backgroundColor: emerald,
    borderRadius: 7,
    alignSelf: 'flex-end',
    paddingHorizontal: 5,
    paddingVertical: 2,
    margin: 10
  },
  editText: {
    fontFamily: 'Futura'
  }
})
