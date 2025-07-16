import { Alert, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FlatGrid } from 'react-native-super-grid';
import GlobalStyle from '../styles/GlobalStyle';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Modal from 'react-native-modal';
import ButtonPrimary from '../components/ButtonPrimary';
import { colors } from '../constants';


const QuizScreen = ({ navigation, route }) => {

    const { soal } = route.params;
    const quiz = soal;

    const [pertanyaanSaatIni, setPertanyaanSaatIni] = useState(0);
    const [skor, setSkor] = useState(0);
    const [gameBerakhir, setGameBerakhir] = useState(false)

    function cekJawaban(item) {
        if (item == quiz[pertanyaanSaatIni].jawabanbenar) {
            setSkor(skor + 10)
        }

        if (pertanyaanSaatIni === quiz.length - 1) {
            setGameBerakhir(true);
            setPertanyaanSaatIni(0);
        } else {
            setPertanyaanSaatIni(pertanyaanSaatIni + 1)
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <View style={{ flexDirection: 'row', gap: 10, marginBottom: 20, justifyContent: 'space-between', alignContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignItems: 'center', flexDirection: 'row', }}>
                    <Icon name="circle-chevron-left" size={18} color="#212121" />
                    <Text style={[GlobalStyle.textBold, { fontSize: 18, textAlign: 'center', marginLeft: 10 }]}>Pilih Level!</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="star" size={18} color="tomato" solid />
                    <Text style={[GlobalStyle.textBold, { fontSize: 18, marginLeft: 10 }]}>{skor}</Text>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text style={[GlobalStyle.textBold, { fontSize: 60 }]}>{quiz[pertanyaanSaatIni].pertanyaan}</Text>
            </View>
            <View>
                <FlatGrid
                    itemDimension={160}
                    data={quiz[pertanyaanSaatIni].jawaban}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={[styles.cardQuiz]} onPress={() => cekJawaban(item)}>
                            <Text style={[GlobalStyle.textBold, { color: 'white', fontSize: 18 }]}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <Modal isVisible={gameBerakhir}>
                <View style={{ backgroundColor: '#35bd59', borderRadius: 10, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name='circle-check' size={40} color={'white'} solid />
                    <Text style={[GlobalStyle.textBold, { fontSize: 22, color: 'white', marginTop: 15 }]}>Mantap! Cairr Cairr</Text>
                    <Text style={[GlobalStyle.textBold, { fontSize: 14, color: 'white', }]}>Skor Kamu</Text>
                    <Text style={[GlobalStyle.textBold, { fontSize: 50, color: colors.black, }]}>{skor}</Text>
                    <View style={{ width: '100%', justifyContent: 'center', marginTop: 20 }}>
                        <ButtonPrimary title={"Restart Quiz"} onPress={() => { setGameBerakhir(false), setPertanyaanSaatIni(0), setSkor(0) }}></ButtonPrimary>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginVertical: 10 }}>
                            <Text style={[GlobalStyle.textBold, { fontSize: 14, color: colors.black, textAlign: 'center' }]}>Kembali</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
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