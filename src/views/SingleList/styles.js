import { StyleSheet } from 'react-native'
import { emerald } from '../../styles/colors'

export default StyleSheet.create({

  listBig: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: 10,
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

  },
  h2: {
    fontSize: 40,
    fontFamily: 'Futura',
    margin: 20
  },
  main: {
    backgroundColor: 'white',
    minHeight: '100%'
  },
  button: {
    width: 200,
    padding: 10,
    marginTop: 7
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
