import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Grid } from 'react-native-animated-spinkit'
import { StackActions } from '@react-navigation/native'
import GlobalStyle from '../utils/GlobalStyle'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        const interval = setTimeout(() => {
            navigation.dispatch(StackActions.replace('Home Screen'))
        }, 3000);

        return () => clearTimeout(interval)
    }, [])

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: 'white' }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <Image source={require('../images/quiz.png')} style={{ height: 200, resizeMode: 'contain', marginBottom: 20 }} />
            <Text style={[GlobalStyle.textBold, { fontSize: 22, color: '#212121', fontWeight: '600' }]}>QUIZ PARAMPA</Text>
            <Text style={[GlobalStyle.textRegular, { fontSize: 14, marginTop: 5, color: '#212121' }]}>Asikin aja walau agak ngawur!</Text>
            <Grid style={{ marginTop: 30 }} color='tomato' size={30} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})