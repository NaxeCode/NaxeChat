import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, Text, Button, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const ChatScreen = ({ navigation }) => {
  return (
    <GiftedChat />
  );
};
 
export default ChatScreen;