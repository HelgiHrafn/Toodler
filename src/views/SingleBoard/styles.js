import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    boardBig: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 15,
        marginVertical: 5,
        marginHorizontal: 10,
        display: 'flex',
        minHeight: '73%'

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
        margin: 20,
      }
})
