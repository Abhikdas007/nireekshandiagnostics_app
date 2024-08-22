import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useState } from 'react';
import logo from '../../assets/login-bg.jpg';
import styles from '../../style';


export default function LoginScreen({navigation}) {
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
                    <Text style={styles.loginHeading}>Login With Us</Text>
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
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomContaciner}>
                    <Text
                    style={styles.bottomConText}
                    onPress={() => navigation.navigate('Signup')}
                    >
                        Don't Have an Account ? Go to Sign up 
                    </Text>
                </View>

                {/* </ScrollView> */}
            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

