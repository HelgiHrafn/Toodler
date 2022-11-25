import { StyleSheet } from 'react-native'
import { emerald } from '../../styles/colors'

export default StyleSheet.create({
  h3: {
    fontSize: 25,
    fontFamily: 'Futura',
    maxWidth: '87%',
    maxHeight: '100%'

  },
  dot: {
    borderRadius: 100,
    width: 25,
    height: 25,
    margin: 7,
    borderWidth: 1,
    borderColor: 'lightgray'
  },
  list: {
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
    marginHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
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
