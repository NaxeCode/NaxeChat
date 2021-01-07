import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: (navigation.state.params || {}).name || "Home!"
    });
    
    render() {
		return (
			<Button
                title="Go Login!"
                onPress={() => this.navigation.navigate('Login')}
            />
		);
	}

}