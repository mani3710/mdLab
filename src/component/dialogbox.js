import React from 'react';
import { Dialog } from 'react-native-simple-dialogs';

const DialogBox = (props) => {
    return (
        <Dialog
            visible={props.showDialog}
            contentStyle={{ backgroundColor: "#fff", borderRadius: 10 }}
            dialogStyle={{ borderRadius: 10 }}
            animationType="slide"
            onTouchOutside={() => props.disable(false)}
        >
            {props.children}
        </Dialog>
    );
}
export default DialogBox;