import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import logo from '../../assets/login-bg.jpg';
import styles from '../../style';



const Dashboard = () => {


    return (

        <KeyboardAvoidingView
            style={{ flex: 1, width: '100%' }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <ImageBackground source={logo} resizeMode="cover" style={styles.image}>

                    <View style={styles.textInputView}>
                        <Text style={styles.textInputLabel}>Patient name</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            keyboardType="default"
                            placeholder="Patient name"
                            placeholderTextColor="#999"
                        />
                    </View>


                    <View style={styles.textInputView}>
                        <Text style={styles.textInputLabel}>Patient Phone Number</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            keyboardType="phone-pad"
                            placeholder="Patient Phone Number"
                            placeholderTextColor="#999"
                        />
                    </View>

                    <View style={styles.textInputView}>
                        <Text style={styles.textInputLabel}>Address</Text>
                        {/* <TextInput
                        style={styles.textInputStyle}
                        secureTextEntry
                        placeholder="Address"
                        placeholderTextColor="#999"
                    /> */}

                        <TextInput
                            style={[styles.textInputStyle, { height: 200, textAlignVertical: 'top', }]}
                            multiline={true}
                            numberOfLines={10}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>



                    {/* </ScrollView> */}
                </ImageBackground>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );


}


export default Dashboard;