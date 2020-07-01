import React from 'react';
import { StyleSheet,View, Text,TextInput,Image,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Perfil({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.Header}>
          <TouchableOpacity style={{width:'20%', height:60}} onPress={() => navigation.toggleDrawer()}>
            <Image source={require('../../img/side.png')} style={styles.imagemHeader}/> 
          </TouchableOpacity>
          <Text style={styles.TextoHeader}>Perfil</Text>
        </View>
        <View style={styles.container}>
            <View style={{alignItems:'center'}}>
                <Image source={require('../../img/Camera.png')} style={styles.Image}/>
            </View>
            <View style={{width:'100%'}}>
                <Text style={styles.Titulo}>
                    Dados Pessoais
                </Text>
                <View style={{flexDirection:'column'}}>
                    <View style={styles.dados}>
                        <Text>
                            Nome:
                        </Text>
                        <TextInput style={styles.input}>

                        </TextInput>
                    </View>
                    <View style={styles.dados}>
                        <Text>
                            E-mail:
                        </Text>
                        <TextInput style={styles.input}>

                        </TextInput>
                    </View>
                    <View style={styles.dados}>
                        <Text>
                            Senha:
                        </Text>
                        <TextInput style={styles.input}>

                        </TextInput>
                    </View>
                    <View style={styles.dados}>
                        <Text>
                            Telefone:
                        </Text>
                        <TextInput style={styles.input}>

                        </TextInput>
                    </View>
                    <View style={styles.dados}>
                        <Text>
                            Cep:
                        </Text>
                        <TextInput style={styles.input}>

                        </TextInput>
                    </View>
                    <View style={styles.dados}>
                        <Text>
                            Rua:
                        </Text>
                        <TextInput style={styles.input}>

                        </TextInput>
                    </View>
                    <View style={styles.dados}>
                        <Text>
                            Cidade:
                        </Text>
                        <TextInput style={styles.input}>

                        </TextInput>
                    </View>
                    <View style={styles.dados}>
                        <Text>
                            Número:
                        </Text>
                        <TextInput style={styles.input}>

                        </TextInput>
                    </View>
                </View>
            <Text style={styles.Titulo}>
                Profissional
            </Text>  
                <View style={{flexDirection:'column'}}>
                    <View style={styles.dados}>
                        <Text>
                            CRMV:
                        </Text>
                        <TextInput style={styles.input}>

                        </TextInput>
                    </View>
                    <View style={styles.dados}>
                        <Text>
                            UF CRMV:
                        </Text>
                        <TextInput style={styles.input}>

                        </TextInput>
                    </View>
                </View>
            </View>
        </View>
        <View>
            <Text style={styles.Salvar}>
                Salvar
            </Text>
        </View>
      </SafeAreaView>
    );
  }
  export default Perfil

  const styles = StyleSheet.create({
    Header:{
        flexDirection:'row',
        backgroundColor:'#D7D6D6',
        height:60,
        padding:20,
        justifyContent:'space-between'
    },
    imagemHeader:{
        width:27,
        height:16,
        resizeMode:'contain'
    },
    TextoHeader:{
        width:'80%',
        height:60,
        fontSize:30,
        marginTop:-15
    },
    container:{
        padding:20,
        flexDirection:'column',
        backgroundColor:'#FFF'
    },
    Image:{
        width:144, 
        height:137
    }, 
    Titulo:{
        width:'100%',
        height:40,
        backgroundColor:'#D7D6D6',
        textAlign:'center',
        marginTop:30, 
        fontSize:20,
        fontWeight:'bold',
        paddingTop:5,
        borderRadius:5
    },
    dados:{
        width:'100%',
        flexDirection:'row',
        height:50,
        marginTop:10,
        alignItems:'center',
    },
    texto:{
            
    },
    input:{
        height:40,
        width:'80%',
        borderBottomColor:'#3DACB7', 
        borderBottomWidth:1
    },
    Salvar:{
        width:'100%',
        textAlign:'center',
        height:60,
        backgroundColor:"#3DACB7",
        fontWeight:'bold',
        fontSize:30,
        paddingTop:8
    }
  })