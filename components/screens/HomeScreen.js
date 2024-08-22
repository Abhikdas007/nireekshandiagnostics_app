import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useState } from 'react';
import logo from '../../assets/login-bg.jpg';
import styles from '../../style';


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
                    <TouchableOpacity style={[styles.loginButton, { backgroundColor: '#393185' }]}
                     onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={[styles.buttonText]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>



            </ImageBackground>
        </KeyboardAvoidingView>
    )
}


export default HomeScreen