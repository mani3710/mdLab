import React, { useState, useCallback } from 'react';
import { Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
const Chat = () => {
    const [messages, setMessages] = useState([]);
    const onSend = useCallback((messages = []) => {
        var message = [
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ]
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <GiftedChat
                textInputStyle={{ width: "100%", color: "#000" }}
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </View>
    );
}

export default Chat;