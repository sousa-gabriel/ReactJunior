import React from 'react';
import { View, Text,StyleSheet , Image,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Home({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={styles.Header}>
          <TouchableOpacity style={{width:'20%', height:60}} onPress={() => navigation.toggleDrawer()}>
            <Image source={require('../../img/side.png')} style={styles.imagemHeader}/> 
          </TouchableOpacity>
          <Text style={styles.TextoHeader}>Home</Text>
        </View>
        <View style={styles.Container}>
          <View style={styles.linhas}>
            <TouchableOpacity style={styles.colunas}>
              <Image source={require('../../img/PrescreverReceita.png')} style={styles.imagem}/>
              <Text style={styles.Texto}>Prescrever</Text>
              <Text style={styles.Texto}>Receita</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.colunas}>
              <Image source={require('../../img/PrescricaoRealizadas.png')} style={styles.imagem} />
              <Text style={styles.Texto}>Prescrições</Text>
              <Text style={styles.Texto}>Realizadas</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.linhas}>
            <TouchableOpacity style={styles.colunas}>
              <Image source={require('../../img/BulasDeMedicamentos.png')} style={styles.imagem}/>
              <Text style={styles.Texto}>Bulas de</Text>
              <Text style={styles.Texto}>Medicamentos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.colunas}>
              <Image source={require('../../img/Manuais.png')} style={styles.imagem}/>
              <Text style={styles.Texto}>Manuais</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.linhas}>
            <TouchableOpacity style={styles.colunas}>
              <Image source={require('../../img/Perfil.png')} style={styles.imagem}/>
              <Text style={styles.Texto}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.colunas}>
              <Image source={require('../../img/Agenda.png')} style={styles.imagem} />
              <Text style={styles.Texto}>Agenda</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  export default Home;

  const styles = StyleSheet.create({
    Header:{
      flexDirection:'row',
      backgroundColor:'#B750F2',
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
    Container:{
      flex:3,
      flexDirection:'column', 
      backgroundColor:'#FFF',
      padding:20
    },
    linhas:{
      flex:1, 
      flexDirection:'row',
      justifyContent:'space-evenly' 
    },
    colunas:{
      flexDirection:'column'
    },
    imagem:{
      width:144, 
      height:137
    },
    Texto:{
      textAlign:'Center'
    }

  })
