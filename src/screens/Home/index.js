import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({ RootStack }) => ({
        title: (RootStack.state.params || {}).name || "Home!"
    });
    
    render() {
		return (
			<Button
                title="Go Login!"
                onPress={() => this.props.navigation.navigate('Chat')}
            />
		);
	}

}