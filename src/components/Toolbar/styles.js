import { StyleSheet } from 'react-native';
import { celadon } from '../../styles/colors';

export default StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        backgroundColor: celadon

    },
    toolbarAction: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
    },
    toolbarActionText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16

    }

});
