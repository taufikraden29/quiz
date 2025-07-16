import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyle from '../utils/GlobalStyle'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <Image source={require('../images/quiz.png')} style={{ height: 200, resizeMode: 'contain', }} />
            <Text style={[GlobalStyle.textBold, { fontSize: 22, color: '#212121', fontWeight: '600' }]}>QUIZ PARAMPA</Text>
            <TouchableOpacity style={styles.buttonStart} onPress={() => navigation.navigate('SelectLevelScreen')}>
                <Text style={[GlobalStyle.textBold, { color: 'white' }]}>Mulai Quiz!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    images: {
        height: 200,
        resizeMode: 'contain'
    },
    buttonStart: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 30,
        backgroundColor: "tomato",
        borderRadius: 10
    }
})