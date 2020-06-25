import React, { Component } from 'react';
import { StyleSheet,View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


function Cadastrar({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{flex:1, backgroundColor:'red', color:'#FFFF'}}>
          <Text> Aqui é a Cadastrar</Text> 
          <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
          <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
        </View>
      </SafeAreaView>
    );
  }
  export default Cadastrar