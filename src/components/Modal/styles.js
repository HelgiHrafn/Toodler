import {StyleSheet, Dimensions} from 'react-native'

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: .4,
        borderRadius: 10,
        width: winWidth -50,
        backgroundColor: 'white',
        padding: 40,
    }
})