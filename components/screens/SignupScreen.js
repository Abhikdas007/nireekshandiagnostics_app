import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useState } from 'react';
import logo from '../../assets/login-bg.jpg';


export default function SignupScreen({ navigation }) {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1, width: '100%' }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ImageBackground source={logo} resizeMode="cover" style={styles.image}>
                {/* <ScrollView contentContainerStyle={{ width: '100%' }}> */}
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/logo/logo.png')}
                        style={styles.logoImage}
                    />
                    <Text style={styles.loginHeading}>Sign Up With Us</Text>
                </View>

                <View style={styles.textInputView}>
                    <Text style={styles.textInputLabel}>Enter Your Email </Text>
                    <TextInput
                        style={styles.textInputStyle}
                        keyboardType="phone-pad"
                        placeholder="Phone Number"
                        placeholderTextColor="#999"
                    />
                </View>


                <View style={styles.textInputView}>
                    <Text style={styles.textInputLabel}>Enter Phone Number</Text>
                    <TextInput
                        style={styles.textInputStyle}
                        keyboardType="phone-pad"
                        placeholder="Phone Number"
                        placeholderTextColor="#999"
                    />
                </View>

                <View style={styles.textInputView}>
                    <Text style={styles.textInputLabel}>Enter Password</Text>
                    <TextInput
                        style={styles.textInputStyle}
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#999"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.buttonText}>Sign Up </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomContaciner}>
                    <Text
                        style={styles.bottomConText}
                        onPress={() => navigation.navigate('Login')}
                    >
                        Alread Have an Account ? Back to login
                    </Text>
                </View>

                {/* </ScrollView> */}
            </ImageBackground>
        </KeyboardAvoidingView>
    );
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
        width: 400,
        height: 100,
        marginBottom: 20,
    },
    textInputStyle: {
        borderColor: '#fff',
        borderWidth: 1,
        width: '100%',
        paddingVertical: 17,
        paddingHorizontal: 7,
        color: '#000',
        fontSize: 18,
        borderRadius: 9,
        backgroundColor: '#fff',
    },
    textInputView: {
        width: '85%',
        margin: 10,
        borderRadius: 7,
    },
    textInputLabel: {
        fontSize: 17,
        color: '#000',
        fontWeight: '500',
        marginBottom: 7,
    },
    buttonContainer: {
        width: '85%',
        marginTop: 9,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    loginButton: {
        backgroundColor: '#4CAF50',
        padding: 17,
        borderRadius: 9,
    },
    bottomContaciner: {
        width: '85%',
        marginTop: 7,

    },
    bottomConText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
