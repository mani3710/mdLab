import React, { useState } from 'react';
import { Text, View, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import DialogBox from '../component/dialogbox';
import CalendarPicker from 'react-native-calendar-picker';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import SelectDropdown from 'react-native-select-dropdown'
import DateTimePickerModal from "react-native-modal-datetime-picker";


import { RadioButton } from 'react-native-paper';
const Home = ({ navigation }) => {
    const [showDialog, setShowDialog] = useState(false);
    const [showDate, setShowDate] = useState(false);
    const [checked, setChecked] = useState('first');
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    const getLocation = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Md lab sem',
                    message: 'mdlab App access to your location ',
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the location")
                Geolocation.getCurrentPosition(
                    (position) => {
                        console.log(position.coords);

                    },
                    (error) => {
                        console.log(error);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 200000,
                        maximumAge: 120000,
                        showLocationDialog: true,
                        forceRequestLocation: true
                    }
                );
            }
        } catch (err) {
            console.warn(err)
        }
    }


    const distance = (lat1, lat2, lon1, lon2) => {
        lon1 = (lon1 * Math.PI) / 180;
        lon2 = (lon2 * Math.PI) / 180;
        lat1 = (lat1 * Math.PI) / 180;
        lat2 = (lat2 * Math.PI) / 180;

        // Haversine formula
        let dlon = lon2 - lon1;
        let dlat = lat2 - lat1;
        let a =
            Math.pow(Math.sin(dlat / 2), 2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

        let c = 2 * Math.asin(Math.sqrt(a));

        let r = 6371;
        return c * r;
    }

    const storeData = async () => {
        // firestore()
        //     .collection('Users')
        //     .add({
        //         name: 'Ada Lovelace',
        //         age: 21,
        //     })
        //     .then(() => {
        //         console.log('User added!');
        //     });

        //get data  
        firestore()
            .collection('Users')
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                });
            });
    }




    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text
                style={{ color: "#000" }}
                onPress={() => {
                    // navigation.navigate("Chat");
                    storeData();
                    setShowDate(true);
                }}
            >Home</Text>
            <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}

            />
            <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
            />
            <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
            />
            <DateTimePickerModal
                isVisible={showDate}
                mode="date"
                onConfirm={(e) => { console.log(e) }}
                onCancel={() => { setShowDate(false) }}
            />
            <CalendarPicker
                onDateChange={(e) => { console.log(e) }}
                previousTitleStyle={{ color: "#000" }}
                nextTitleStyle={{ color: "#000" }}
            />
            <DialogBox
                showDialog={showDialog}
                disable={setShowDialog}
            >
                <Text>Mani</Text>
            </DialogBox>
        </View>
    );
}

export default Home;