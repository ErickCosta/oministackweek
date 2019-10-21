import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import api from '../services/api';

export default function SpotList({tech}){
    
    const [spots, setSpots] = useState([]);

    useEffect(() =>{
        async function loadSpots(){
            const res = await api.get('/spots', {
                params: {tech}
            });

           setSpots(res.data);
        }

        loadSpots();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Empresas que usam <Text style={styles.bold}>{tech}</Text>:</Text>
            
            <FlatList 
                style={styles.list} 
                data={spots}
                keyExtractor={spot => spot._id}
                horizontal
                showsHorizontalScrollIndicator = {false}
                renderItem={({item}) => (
                    <View style={styles.listItem}>
                        <Image source={{ uri: item.thumbnail_url}} style={styles.thumbnail}/>
                        <Text style={styles.company}>{item.company}</Text>
                        <Text style={styles.price}>{item.price ? `R$${item.price}/DIA`: 'GRÁTIS'}</Text>
                        <TouchableOpacity onPress={()=>{}} style={styles.button}>
                            <Text style={styles.buttonText}>Solicitar reserva</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginTop: 30
    },

    title: {
        fontSize: 20,
        color: '#444444',
        paddingHorizontal: 20,
        marginBottom: 15
    },

    bold: {
        fontWeight: "bold"
    },

    list: {
        paddingHorizontal: 30
    },

    listItem: {
        marginRight: 15,
        marginBottom: 15
    },

    thumbnail: {
        width: 200,
        height: 120,
        resizeMode: "cover",
        borderRadius: 2,
    },

    company: {
        fontSize: 24,
        fontWeight: "bold",
        color: '#333333'
    },

    price: {
        fontSize: 15,
        color: "#999999",
        marginTop: 5
    },

    button: {
        height: 32,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 15
    },

    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16
    }


});