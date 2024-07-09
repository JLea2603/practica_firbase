import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';

const LogIn = (navegation) => {
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');


    // const goToHome = () => {
    //     navegation.navigate('BottomTab')
    // }

    return (
        <View style={styles.container}>
            <Image
                alt="App Logo"
                resizeMode="contain"
                style={styles.headerImg}
                source={{
                    uri: 'https://i.pinimg.com/564x/06/7b/9e/067b9e8769735b9840a4021e5f45f4b6.jpg',
                }}
            />
            <Text style={styles.title}>Log In</Text>

            <View style={styles.containerInput}>
                <TextInput
                    style={styles.Input}
                    onChangeText={setCorreo}
                    value={correo}
                    placeholder="Correo..."
                    placeholderTextColor={'#000000'}
                />
                <TextInput
                    style={styles.Input}
                    onChangeText={setClave}
                    value={clave}
                    placeholder="clave..."
                    placeholderTextColor={'#000000'}
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.containerBoton}>
                <TouchableOpacity >
                    <Text style={styles.signUp}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.signUp2}>Sign Up</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F1E7FF',
        paddingHorizontal: 20,
    },
    headerImg: {
        borderRadius: 30,
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 40,
    },
    signUp: {
        textAlign: 'center',
        fontSize: 30,
        backgroundColor: '#5480FF',
        borderRadius: 20,
        marginBottom: 20,
        marginRight: 10,
        width: 170,
        borderColor: '#000000',
        borderRadius: 8, // Redondeo de los bordes
        borderWidth: 3,
    },
    signUp2: {
        textAlign: 'center',
        fontSize: 30,
        backgroundColor: '#5480FF',
        borderRadius: 20,
        marginBottom: 20,
        width: 170,
        borderColor: '#000000',
        borderRadius: 8, // Redondeo de los bordes
        borderWidth: 3,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 30,
    },
    containerBoton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInput: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Input: {
        fontWeight: '900',
        height: 60, // Ajusta la altura según sea necesari
        width: 370,
        borderBottomColor: '#000000',
        borderRadius: 8, // Redondeo de los bordes
        borderBottomWidth: 3,
        backgroundColor: '#DEF3FF', // Color de fondo del input
        paddingHorizontal: 15,
        marginBottom: 20,
        color: 'black',
        fontSize: 17,
    },
});

export default LogIn;
