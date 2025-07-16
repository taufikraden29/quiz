import { StyleSheet } from "react-native";
import { colors, fonts, spacing } from "../constants";

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background, padding: spacing.md },
    textRegular: {
        fontFamily: fonts.regular
    },
    textBold: {
        fontFamily: fonts.bold
    }
})