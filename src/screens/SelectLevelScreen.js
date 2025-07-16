import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatGrid } from 'react-native-super-grid';
import GlobalStyle from '../utils/GlobalStyle';
import Icon from 'react-native-vector-icons/FontAwesome6';



const SelectLevelScreen = ({ navigation }) => {
    const level = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginBottom: 20 }}>
                <TouchableOpacity onPress={() => NavigationContainer.navigate.pop()}>
                    <Icon name="circle-chevron-left" size={18} color="#212121" />
                </TouchableOpacity>
                <Text style={[GlobalStyle.textBold, { fontSize: 18 }]}>Pilih Level!</Text>
            </View>
            <FlatGrid
                itemDimension={70}
                data={level}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.cardQuiz]} onPress={() => navigation.navigate('QuizScreen')}>
                        <Text style={[GlobalStyle.textBold, { color: 'white', fontSize: 18 }]}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default SelectLevelScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    cardQuiz: {
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 100,
        elevation: 3
    }

})