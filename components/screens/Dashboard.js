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
    Keyboard,
    PermissionsAndroid,
    Alert
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import logo from '../../assets/login-bg.jpg';
import styles from '../../style';

const Dashboard = () => {
    const [patientName, setPatientName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [locationGranted, setLocationGranted] = useState(false);
    const [location, setLocation] = useState({ latitude: null, longitude: null });

    useEffect(() => {
        requestLocationPermission();
    }, []);

    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Location Permission",
                    message: "This app needs access to your location to autofill your address",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                setLocationGranted(true);
                getCurrentLocation();
            } else {
                setLocationGranted(false);
                Alert.alert("Location permission denied", "You can still enter your address manually.");
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                setAddress(`Lat: ${latitude}, Lng: ${longitude}`);
            },
            (error) => {
                console.log(error.code, error.message);
                Alert.alert("Error", "Unable to fetch location. Please enter your address manually.");
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    const handleSubmit = () => {
        // Handle the form submission logic here
        console.log('Patient Name:', patientName);
        console.log('Phone Number:', phoneNumber);
        console.log('Address:', address);
        console.log('Location:', location);
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
                            placeholder={locationGranted ? "Fetching your location..." : "Enter your address"}
                            placeholderTextColor="#999"
                            value={address}
                            onChangeText={setAddress}
                            editable={!locationGranted || (locationGranted && address.includes("Lat"))}
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
