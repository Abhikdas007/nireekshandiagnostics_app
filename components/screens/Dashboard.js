import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ImageBackground, 
    TextInput, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    Platform, 
    TouchableWithoutFeedback, 
    Keyboard 
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import logo from '../../assets/login-bg.jpg';
import styles from '../../style';

const Dashboard = () => {
    const [patientName, setPatientName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState({ latitude: null, longitude: null });

    useEffect(() => {
        // Request for location permission and get the current location
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                setAddress(`Lat: ${latitude}, Lng: ${longitude}`);
            },
            (error) => {
                console.warn(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }, []);

    const handleSubmit = () => {
        // Handle the form submission logic here
        console.warn('Patient Name:', patientName);
        console.warn('Phone Number:', phoneNumber);
        console.warn('Address:', address);
        console.warn('Location:', location);
    };

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
                            value={patientName}
                            onChangeText={setPatientName}
                        />
                    </View>

                    <View style={styles.textInputView}>
                        <Text style={styles.textInputLabel}>Patient Phone Number</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            keyboardType="phone-pad"
                            placeholder="Patient Phone Number"
                            placeholderTextColor="#999"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                        />
                    </View>

                    <View style={styles.textInputView}>
                        <Text style={styles.textInputLabel}>Address</Text>
                        <TextInput
                            style={[styles.textInputStyle, { height: 200, textAlignVertical: 'top' }]}
                            multiline={true}
                            numberOfLines={10}
                            placeholder="Address"
                            placeholderTextColor="#999"
                            value={address}
                            onChangeText={setAddress}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default Dashboard;
