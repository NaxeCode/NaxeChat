import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, Text, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Protected Chat Screen</Text>
    </View>
  );
};
 
export default ChatScreen;