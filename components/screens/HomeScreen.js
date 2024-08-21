import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useState } from 'react';
import logo from '../../assets/login-bg.jpg';


const HomeScreen = ({ navigation }) => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1, width: '100%' }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ImageBackground source={logo} resizeMode="cover" style={styles.image}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/logo/logo.png')}
                        style={styles.logoImage}
                    />
                    <Text style={styles.loginHeading}>Join With Us Today !</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.loginButton}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.loginButton, { backgroundColor: '#06a8cf' }]}
                     onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={[styles.buttonText]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>



            </ImageBackground>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    imageContainer: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginHeading: {
        fontSize: 27,
        color: '#000',
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },


    buttonContainer: {
        width: '85%',
        marginTop: 9,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    loginButton: {
        backgroundColor: '#fb7d02',
        padding: 17,
        borderRadius: 9,
    },

});
export default HomeScreen