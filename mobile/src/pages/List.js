import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage} from 'react-native';

export default function List({navigation}){
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            if(storageTechs){
                const techsArray = storageTechs.split(',').map(tech => tech.trim());
                console.log('Techs', techsArray)
                setTechs(techsArray);
            }
        })
    }, []);

    async function logout(){
        await AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('techs');

        navigation.navigate('Login');
    }
    
    return (
        <View>
            <TouchableOpacity onPress={logout} style={styles.button}>
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
            <Text>{techs}</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    
    button: {
        marginTop: 25,
        marginHorizontal: 2,
        height: 42,
        width: 50,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    buttonText: {
        color: '#ffffff'
    }

});