import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../constants';

export default function ButtonPrimary({ title, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignItems: 'center',
    },
    text: {
        fontFamily: fonts.bold,
        color: '#fff',
    }
});
