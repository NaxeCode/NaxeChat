import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import {Helmet} from "react-helmet";
//import Login from './src/config/login/index.js';

export default class LoginScreen extends React.Component {
    static navigationOptions = ({ RootStack }) => ({
        title: (RootStack.state.params || {}).name || "Login!"
    });
    
    render() {
		return (
			<Button
                title="Go Home!"
                onPress={() => this.props.navigation.navigate('Home')}
            />
		);
	}

}