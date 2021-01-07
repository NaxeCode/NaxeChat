import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0

import firebaseSDK from '../Config/firebaseSDK';

export default class Chat extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		title: (navigation.state.params || {}).name || 'Chat!'
	});

	state = {
		messages: []
	};

	static user = ({ navigation }) => ({
		name: navigation.state.name,
		email: navigation.state.email,
		avatar: navigation.state.avatar,
		id: navigation.uid,
		_id: firebaseSDK.uid
	});

	render() {
		const chat=<GiftedChat messages={this.state.messages} onSend={Fire.shared.send} user={this.user}/>;
 
		 if(Platform.OS=='android'){
			 return(
				 <KeyboardAvoidingView style={{flex:1}}behavior="padding" keyboardVerticalOffset={0} enabled>
					 {chat}
				 </KeyboardAvoidingView>
			 );
		 }
	 return<SafeAreaView style={{flex:1}}>{chat}</SafeAreaView>; 
   }

   componentDidMount() {
    firebaseSDK.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    firebaseSDK.shared.off();
  }
}