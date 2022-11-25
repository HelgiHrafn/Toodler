import { StyleSheet } from 'react-native'
import { emerald } from '../../styles/colors'

export default StyleSheet.create({
  h3: {
    fontSize: 18,
    fontFamily: 'Futura',
    maxWidth: '90%',
    maxHeight: '100%'

  },
  h4: {
    fontFamily: 'Futura'
  },
  textwrapper: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
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
    alignItems: 'center',
    minHeight: 70
  },
  touchable: {
    activeOpacity: 0.6,
    underlayColor: '#FFF'
  },
  checkbox: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
    margin: 10
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
