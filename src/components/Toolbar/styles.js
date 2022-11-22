import { StyleSheet } from 'react-native';
import { uranianBlue } from '../../styles/colors';

export default StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,
        backgroundColor: uranianBlue,

    },
    toolbarAction: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center'
    },
    toolbarActionText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
        fontFamily: 'Futura'

    }

});
