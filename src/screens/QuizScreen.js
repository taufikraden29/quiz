import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatGrid } from 'react-native-super-grid';
import GlobalStyle from '../utils/GlobalStyle';
import Icon from 'react-native-vector-icons/FontAwesome6';



const QuizScreen = () => {

    const quiz = [
        { pertanyaan: "1+1 =", jawaban: ['1', "5", '10', '20'] },
        { pertanyaan: "1+1", jawaban: ['1', "5", '10', '20'] },
        { pertanyaan: "1+1", jawaban: ['1', "5", '10', '20'] }
    ]

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginBottom: 20 }}>
                <TouchableOpacity onPress={() => NavigationContainer.navigate.pop()}>
                    <Icon name="circle-chevron-left" size={18} color="#212121" />
                </TouchableOpacity>
                <Text style={[GlobalStyle.textBold, { fontSize: 18 }]}>Pilih Level!</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text style={[GlobalStyle.textBold, { fontSize: 28 }]}>{quiz[0].pertanyaan}</Text>
            </View>
            <View>
                <FlatGrid
                    itemDimension={160}
                    data={quiz[0].jawaban}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={[styles.cardQuiz]} onPress={() => navigation.navigate('QuizScreen')}>
                            <Text style={[GlobalStyle.textBold, { color: 'white', fontSize: 18 }]}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

        </View>
    )
}

export default QuizScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    cardQuiz: {
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 80,
        elevation: 3
    }

})