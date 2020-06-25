//importando dependencias
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//importando telas 
import Cadastrar from '../Screens/Cadastrar/cadastrar';
import Home from '../Screens/Home/Home';

//Renderizando a lista na navegação lateral
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

//Criando a constante de navegação
const Drawer = createDrawerNavigator();

//Gerenciando as rotas 
function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Cadastrar" component={Cadastrar} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MyDrawer />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}