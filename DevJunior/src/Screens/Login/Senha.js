import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


function Senha({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{flex:1, backgroundColor:'#707070', color:'#FFFF'}}>
          <Text> Aqui é a Home</Text> 
          <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
          <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
        </View>
      </SafeAreaView>
    );
  }
  export default Senha