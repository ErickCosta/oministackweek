import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';

import logo from '../assets/logo.png';

export default function List({ navigation }) {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            if (storageTechs) {
                const techsArray = storageTechs.split(',').map(tech => tech.trim());
                console.log('Techs', techsArray)
                setTechs(techsArray);
            }
        })
    }, []);

    async function logout() {
        await AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('techs');

        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image style={styles.logo} source={logo} />
            </View>

            <View style={styles.content}>
                <Text>Conteúdo</Text>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity onPress={logout} style={styles.button}>
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    top: {
        flex: 1,
        marginTop: 25,
        paddingTop: 5,
        alignItems: "center",
        minHeight: 17
    },

    logo: {

    },

    content: {
        flex: 12,
    },

    bottom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    button: {
        marginRight: 10,
    },

    buttonText: {
        color: '#000000'
    }

});