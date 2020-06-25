import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, Image, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF', height: '100%', flexDirection:'column' }}>
            </View >
        );
    }
}
export default (SideMenu);