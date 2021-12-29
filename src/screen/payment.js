import React from 'react';
import { Text, View } from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

const Payment = () => {

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <CreditCardInput
                labelStyle={{ color: "#000" }}
                onChange={(e) => { console.log(e) }} />
        </View>
    );
}

export default Payment;