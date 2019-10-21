import React, { useState, useEffect } from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

export default function List({ navigation }) {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            if (storageTechs) {
                const techsArray = storageTechs.split(',').map(tech => tech.trim());
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
                <TouchableOpacity onPress={logout} >
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <ScrollView>
                    {techs.map(tech => 
                        <SpotList key={tech} tech={tech}></SpotList>
                    )}
                </ScrollView>  
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
        minHeight: 17
    },

    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: "center"
    },

    content: {
        flex: 12,
    },

    button: {
        marginRight: 10,
    },

    buttonText: {
        color: '#000000'
    }

});